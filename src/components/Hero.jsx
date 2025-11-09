import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 bg-gradient-to-b from-white to-gray-50">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-semibold text-gray-800 mb-4">
        Where stories find their <span className="text-accent">voice</span> and form
      </motion.h2>
      <p className="text-gray-500 max-w-2xl">
        We bring stories to life through visuals, creativity, and meaning. 
        Every frame, word, and idea is crafted with passion and purpose.
      </p>
      <a href="#contact" className="mt-8 bg-accent text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
        Let’s Talk
      </a>
    </section>
  );
}
