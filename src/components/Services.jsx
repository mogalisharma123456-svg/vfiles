import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    { title: 'Film Production', desc: 'We capture and narrate stories with cinematic precision.' },
    { title: 'Brand Strategy', desc: 'Building timeless brands with thoughtful storytelling.' },
    { title: 'Art Direction', desc: 'Designing visuals that communicate culture and creativity.' }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-12 text-gray-800">Our Expertise</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="border rounded-lg p-8 hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-accent mb-2">{s.title}</h4>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
