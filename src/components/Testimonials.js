"use client"
// src/components/Testimonials.js
import { motion } from "framer-motion";

const Testimonials = () => (
  <div id="testimonials" className="py-16 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[1, 2, 3].map((testimonial) => (
          <div
            key={testimonial}
            className="p-6 bg-gray-100 rounded shadow-lg text-left"
          >
            <p className="text-gray-700 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dictum tristique ligula, nec venenatis ligula.
            </p>
            <h4 className="mt-4 font-bold">John Doe</h4>
            <p className="text-sm text-gray-500">CEO, ExampleCorp</p>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Testimonials;
