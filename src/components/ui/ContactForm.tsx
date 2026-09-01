"use client";
import React, { useState, useRef } from "react";
import { toast } from "sonner";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current!);

        try {
            const res = await fetch("/contact.php", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            setLoading(false);

            if (data.success) {
                toast.success("✅ Tu mensaje ha sido enviado correctamente.");
                formRef.current?.reset();
            } else {
                toast.error("❌ Error al enviar el mensaje. Intenta nuevamente.");
            }
        } catch (error) {
            setLoading(false);
            toast.error("⚠️ No se pudo conectar con el servidor.");
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5 w-full h-full"
        >
            <div className="text-center sm:text-left mb-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                    📩 Envíanos un Mensaje
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                    Déjanos tus datos y te responderemos en minutos con la mejor cotización.
                </p>
            </div>

            {/* Nombre */}
            <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="name" className="text-slate-300 font-semibold text-xs sm:text-sm">
                    Nombre Completo o Empresa <span className="text-[#FE7F01]">*</span>
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ej: Juan Pérez / Mi Tienda SAC"
                    required
                    className="w-full bg-[#070A12]/90 border border-[#1E2C4A] focus:border-[#FE7F01] focus:ring-2 focus:ring-[#FE7F01]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="email" className="text-slate-300 font-semibold text-xs sm:text-sm">
                    Correo Electrónico <span className="text-[#FE7F01]">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="contacto@tunegocio.com"
                    required
                    className="w-full bg-[#070A12]/90 border border-[#1E2C4A] focus:border-[#FE7F01] focus:ring-2 focus:ring-[#FE7F01]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                />
            </div>

            {/* Teléfono / WhatsApp */}
            <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="phone" className="text-slate-300 font-semibold text-xs sm:text-sm">
                    Número de WhatsApp <span className="text-[#FE7F01]">*</span>
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+51 987 654 321"
                    required
                    className="w-full bg-[#070A12]/90 border border-[#1E2C4A] focus:border-[#FE7F01] focus:ring-2 focus:ring-[#FE7F01]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                />
            </div>

            {/* Cantidad de envíos y Distrito (2 cols on tablet/desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="quanty" className="text-slate-300 font-semibold text-xs sm:text-sm">
                        Envíos por semana <span className="text-[#FE7F01]">*</span>
                    </label>
                    <input
                        id="quanty"
                        name="quanty"
                        type="text"
                        placeholder="Ej: 15 - 30 envíos"
                        required
                        className="w-full bg-[#070A12]/90 border border-[#1E2C4A] focus:border-[#FE7F01] focus:ring-2 focus:ring-[#FE7F01]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                    />
                </div>

                <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="district" className="text-slate-300 font-semibold text-xs sm:text-sm">
                        Distrito de recojo <span className="text-[#FE7F01]">*</span>
                    </label>
                    <input
                        id="district"
                        name="district"
                        type="text"
                        placeholder="Ej: San Isidro / Miraflores"
                        required
                        className="w-full bg-[#070A12]/90 border border-[#1E2C4A] focus:border-[#FE7F01] focus:ring-2 focus:ring-[#FE7F01]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                    />
                </div>
            </div>

            {/* Botón de Enviar */}
            <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FE7F01] to-[#FF5500] hover:from-[#e57200] hover:to-[#eb4d00] disabled:opacity-60 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg shadow-[#FE7F01]/30 hover:shadow-[#FE7F01]/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
            >
                {loading ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Enviando información...</span>
                    </>
                ) : (
                    <>
                        <span>Solicitar Asesoría Personalizada</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </>
                )}
            </button>
        </form>
    );
}

