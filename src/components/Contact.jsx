import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.message) return 'Please fill all required fields.';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Invalid email address.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) return setStatus(error);

    try {
      const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Form Submitted 🎉');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else setStatus('Submission failed ❌');
    } catch {
      setStatus('Network error ❌');
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 flex flex-col md:flex-row justify-between gap-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
        <p className="text-gray-600 mb-6">We’d love to collaborate and create something meaningful together.</p>
      </motion.div>
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <input name="name" placeholder="Name*" value={form.name} onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-accent" />
        <input name="email" placeholder="Email*" value={form.email} onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-accent" />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-accent" />
        <textarea name="message" placeholder="Message*" value={form.message} onChange={handleChange} className="border p-2 rounded focus:ring-2 focus:ring-accent" />
        <button type="submit" className="bg-accent text-white py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        {status && <p className="text-center text-blue-600">{status}</p>}
      </motion.form>
    </section>
  );
}
