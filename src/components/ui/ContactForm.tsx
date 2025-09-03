"use client";
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current!);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                quanty: formData.get("quanty"),
                district: formData.get("district"),
            }),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {
            toast.success("✅ Tu mensaje ha sido enviado correctamente.");
            formRef.current?.reset();
        } else {
            toast.error("❌ Error al enviar el mensaje. Intenta nuevamente.");
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full h-full p-6 sm:p-8"
        >
            <h2 className="text-2xl font-bold text-gray-800 text-center">
                📩 Contáctanos
            </h2>
            <p className="text-gray-600 text-center text-sm">
                Completa el formulario y nos pondremos en contacto contigo.
            </p>

            {/* Nombre */}
            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                    Nombre Completo
                </Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    required
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Número de Whatsapp
                </Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+51999999999"
                    required
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Cantidad */}
            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="quanty" className="text-gray-700 font-medium">
                    Cantidad de envíos a la semana
                </Label>
                <Input
                    id="quanty"
                    name="quanty"
                    type="text"
                    placeholder="Ej: 10 - 20 envíos"
                    required
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Distrito */}
            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="district" className="text-gray-700 font-medium">
                    Distrito de recojo de tus envíos
                </Label>
                <Input
                    id="district"
                    name="district"
                    type="text"
                    placeholder="Ej: San Isidro"
                    required
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Botón */}
            <Button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
            >
                {loading ? "Enviando..." : "Enviar"}
            </Button>
        </form>
    );
}
