"use client";
// src/components/Hero.js
import { motion } from "framer-motion";

const Hero = () => (
  <div className="relative h-screen bg-gray-900 text-white flex items-center justify-center pt-16">
    {/* Adjust padding to match the navbar height */}
    <video
      autoPlay
      muted
      loop
      className="absolute inset-0 w-full h-full object-cover"
      src="/vedio/finalbgvedio.mp4"
    />
    {/* Adjusted overlay opacity */}
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <motion.div
      className="text-center z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">Md Rashadul Islam</h1>
      <p className="mt-4 text-lg md:text-2xl">Frontend Developer | Web Enthusiast</p>
      <p className="max-w-3xl text-lg my-4">I’m a Frontend Web Developer who is passionate about making error-free websites with 100% client satisfaction. I have a passion for learning new technologies.</p>
      <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded">
        Contact Me
      </button>
    </motion.div>
  </div>
);

export default Hero;
