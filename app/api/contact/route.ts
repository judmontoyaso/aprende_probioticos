import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { nombre, email, mensaje, tipo } = await req.json();

  // Configura el transporter con variables de entorno
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
      from: `"${nombre}" <${email}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `Nuevo mensaje de contacto (${tipo})`,
      text: mensaje,
      html: `<p><strong>Nombre:</strong> ${nombre}</p><p><strong>Email:</strong> ${email}</p><p><strong>Tipo:</strong> ${tipo}</p><p><strong>Mensaje:</strong><br/>${mensaje}</p>`
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'No se pudo enviar el correo.' }, { status: 500 });
  }
}
