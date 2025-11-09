import { motion } from 'framer-motion'

export default function Highlights() {
  const data = [
    { num: '85+', text: 'Projects' },
    { num: '50+', text: 'Happy Clients' },
    { num: '10+', text: 'Expert Team' },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h3 className="text-2xl font-semibold mb-8 text-gray-800">Our Journey in Numbers</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            className="bg-white border shadow-md p-6 rounded-md w-40 hover:scale-105 transition"
          >
            <p className="text-3xl font-bold text-accent">{item.num}</p>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
