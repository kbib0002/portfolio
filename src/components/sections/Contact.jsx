import RevealOnScroll from "../RevealOnScroll";
import emailjs from '@emailjs/browser';
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        body: ""
    });

    const handleSubmit = (e) => {
        console.log(import.meta.env.VITE_PUBLIC_KEY);
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
            alert("Email sent successfully! I'll get back to you ASAP.");
            setFormData({name: "", email: "", body: ""});
        }).catch(() => alert("Email failed to send. Apologies, something probably went awry on my end!"));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    get in touch
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} placeholder="your name" onChange={(e) => setFormData({...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 twxt-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/2"/>
                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" required value={formData.email} placeholder="your-email@email.com" onChange={(e) => setFormData({...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 twxt-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/2"/>
                    </div>

                    <div className="relative">
                        <textarea id="body" name="body" required value={formData.body} rows={6} placeholder="message body" onChange={(e) => setFormData({...formData, body: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 twxt-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/2"/>
                    </div>

                    <button type="submit" className="w-full bg-blue-500/75 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba)59, 130, 246, 4)] cursor-pointer">
                        submit
                    </button>
                </form>
            </div>
        </RevealOnScroll>
        </section>
    );
};