import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { name, email, phone, quanty, district } = await request.json();
    const transporter = nodemailer.createTransport({
      host: "mail.daledelivery.com",
      port: 465,
      secure: true,
      auth: {
        user: undefined                         ,
        // tu correo
        pass: undefined                         
        // tu contraseña o App Password
      }
    });
    await transporter.sendMail({
      from: `"Formulario Web" <${undefined                         }>`,
      to: undefined                         ,
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
      `
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
