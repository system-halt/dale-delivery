
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
export  const  prerender = false;
export const POST: APIRoute = async ({ request }) => {
    try {
        const { name, email, phone, quanty, district,  } = await request.json();

        // Transporter SMTP (ejemplo con Gmail, pero puedes usar otro proveedor)
        const transporter = nodemailer.createTransport({
            host: "mail.daledelivery.com",
            port: 465,
            secure: true,
            auth: {
                user: import.meta.env.SMTP_USER, // tu correo
                pass: import.meta.env.SMTP_PASS, // tu contraseña o App Password
            },
        });

        await transporter.sendMail({
            from: `"Formulario Web" <${import.meta.env.SMTP_USER}>`,
            to: import.meta.env.SMTP_USER,
            subject: `Nuevo mensaje de ${name}`,
            text: `
        Nombre: ${name}
        Correo: ${email}
        Cantidad de envios: ${quanty}
        Distrito de recojo de envios: ${district}
        Teléfono: ${phone}
      `,
            html: `
        <h3>Nuevo mensaje desde tu formulario 🚀</h3>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Correo:</b> ${email}</p>
        <p><b>Cantidad de envios:</b> ${quanty}</p>
        <p><b>Distrito de recojo de envios:</b> ${district}</p>
        <p><b>Teléfono:</b> ${phone}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false }), {
            status: 500,
        });
    }
};
