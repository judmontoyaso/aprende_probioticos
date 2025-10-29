"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("General");
  const [status, setStatus] = useState<string|null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje, tipo })
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("¡Mensaje enviado correctamente!");
        setNombre(""); setEmail(""); setMensaje(""); setTipo("General");
      } else {
        setStatus("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch {
      setStatus("No se pudo conectar con el servidor.");
    }
    setLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tipo de consulta *
        </label>
        <select value={tipo} onChange={e => setTipo(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors">
          <option value="General">General</option>
          <option value="Colaboración">Colaboración</option>
          <option value="Contenido">Contenido</option>
          <option value="Privacidad">Privacidad</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
        <input type="text" name="nombre" required value={nombre} onChange={e => setNombre(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
        <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
        <textarea name="mensaje" required rows={5} value={mensaje} onChange={e => setMensaje(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"></textarea>
      </div>
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="text-sm text-gray-600 space-y-2">
          <p className="font-medium">* Campos requeridos</p>
          <p>
            Al enviar este formulario, aceptas nuestros{' '}
            <Link href="/terminos-servicio" className="text-green-600 hover:text-green-700 underline font-medium">
              Términos de Servicio
            </Link>{' '}
            y{' '}
            <Link href="/politica-privacidad" className="text-green-600 hover:text-green-700 underline font-medium">
              Política de Privacidad
            </Link>.
          </p>
        </div>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition-colors">
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status && <div className="text-center text-sm mt-2 text-green-700">{status}</div>}
    </form>
  );
}
