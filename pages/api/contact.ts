import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }
  const { nombre, email, mensaje, tipo } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `Nuevo mensaje de contacto (${tipo})`,
      text: mensaje,
      html: `<p><strong>Nombre:</strong> ${nombre}</p><p><strong>Email:</strong> ${email}</p><p><strong>Tipo:</strong> ${tipo}</p><p><strong>Mensaje:</strong><br/>${mensaje}</p>`
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return res.status(500).json({ ok: false, error: 'No se pudo enviar el correo.' });
  }
}
