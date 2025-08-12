'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Testimonial } from '@/types/index';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    // {
    //   id: 1,
    //   name: 'Sarah Johnson',
    //   position: 'Product Manager',
    //   company: 'Tech Solutions Inc.',
    //   text: 'Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations. Their attention to detail and problem-solving skills are impressive.',
    //   image: 'https://via.placeholder.com/150?text=Sarah+J'
    // },
    // {
    //   id: 2,
    //   name: 'Michael Chen',
    //   position: 'CEO',
    //   company: 'StartUp Innovations',
    //   text: 'I was amazed by the quality of work delivered. Not only did they build exactly what we needed, but they also suggested improvements that made our product even better. Highly recommended!',
    //   image: 'https://via.placeholder.com/150?text=Michael+C'
    // },
    // {
    //   id: 3,
    //   name: 'Emily Rodriguez',
    //   position: 'Marketing Director',
    //   company: 'Creative Designs',
    //   text: 'The website they built for us has significantly increased our conversion rates. Their understanding of both design and functionality created the perfect balance for our brand.',
    //   image: 'https://via.placeholder.com/150?text=Emily+R'
    // }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="section-subtitle">
            What people say about working with me
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-2xl shadow-custom bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-primary-100">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-6">
                        <svg className="w-10 h-10 text-primary-200" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-1.1 0.9-2 2-2h2V8h-6zm14 0c-2.2 0-4 1.8-4 4v12h12V12h-6c0-1.1 0.9-2 2-2h2V8h-6z"></path>
                        </svg>
                      </div>
                      <p className="text-secondary-600 mb-6 italic">{testimonial.text}</p>
                      <div>
                        <h4 className="text-lg font-semibold text-secondary-800">{testimonial.name}</h4>
                        <p className="text-primary-600">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-secondary-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-secondary-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-secondary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;