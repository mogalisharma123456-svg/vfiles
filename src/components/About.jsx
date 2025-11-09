import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 bg-white">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        className="md:w-1/2"
      >
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Crafting brands, films, and art that inspire.</h3>
        <p className="text-gray-600 mb-4">
          Some craft films. Some build brands. We curate experiences that stay. 
          Every project we take deserves to become a masterpiece.
        </p>
        <button className="bg-accent text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">View Portfolio</button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <img src="https://i.ibb.co/4sgHt7R/filmmakers.png" alt="Team" className="rounded-lg shadow-md" />
      </motion.div>
    </section>
  );
}
