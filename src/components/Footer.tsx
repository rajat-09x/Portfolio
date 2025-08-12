// 'use client';
// import Link from 'next/link';
// import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <footer className="bg-secondary-900 text-white pt-16 pb-8">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           <div className="md:col-span-2">
//             <Link href="/" className="text-2xl font-bold mb-4 inline-block">
//               YourName<span className="text-accent-500">.</span>
//             </Link>
//             <p className="text-secondary-300 mb-6 max-w-md">
//               A passionate Full Stack Web Developer building modern, responsive websites and web applications that deliver exceptional user experiences.
//             </p>
//             <div className="flex space-x-4">
//               <a 
//                 href="https://github.com/yourusername" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
//               >
//                 <FiGithub size={18} />
//               </a>
//               <a 
//                 href="https://linkedin.com/in/yourusername" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
//               >
//                 <FiLinkedin size={18} />
//               </a>
//               <a 
//                 href="https://twitter.com/yourusername" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
//               >
//                 <FiTwitter size={18} />
//               </a>
//               <a 
//                 href="https://instagram.com/yourusername" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
//               >
//                 <FiInstagram size={18} />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link href="#about" className="text-secondary-300 hover:text-white transition-colors">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#skills" className="text-secondary-300 hover:text-white transition-colors">
//                   Skills
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#projects" className="text-secondary-300 hover:text-white transition-colors">
//                   Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#experience" className="text-secondary-300 hover:text-white transition-colors">
//                   Experience
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#contact" className="text-secondary-300 hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-3">
//               <li className="text-secondary-300">
//                 <span className="block">Email:</span>
//                 <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
//                   your.email@example.com
//                 </a>
//               </li>
//               <li className="text-secondary-300">
//                 <span className="block">Phone:</span>
//                 <a href="tel:+1234567890" className="hover:text-white transition-colors">
//                   +1 (234) 567-890
//                 </a>
//               </li>
//               <li className="text-secondary-300">
//                 <span className="block">Location:</span>
//                 <span>San Francisco, California, USA</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-secondary-400 text-sm mb-4 md:mb-0">
//             © {new Date().getFullYear()} YourName. All rights reserved.
//           </p>
//           <button 
//             onClick={scrollToTop}
//             className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
//             aria-label="Scroll to top"
//           >
//             <FiArrowUp size={18} />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-secondary-900 text-white pt-10 pb-6">
      <div className="container mx-auto flex flex-col items-center gap-6">
        {/* Brand + Social Links */}
        <div className="flex flex-col items-center gap-3">
          {/* <Link href="/" className="text-2xl font-bold">
            YourName<span className="text-accent-500">.</span>
          </Link> */}
          <div className="flex space-x-3">
            {[
              { href: 'https://github.com/rajat-09x', icon: <FiGithub size={18} /> },
              { href: 'https://www.linkedin.com/in/rajat-09x', icon: <FiLinkedin size={18} /> },
              { href: 'https://instagram.com/_rg__200', icon: <FiInstagram size={18} /> },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-secondary-300">
          {['about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className="hover:text-white transition-colors"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-secondary-800 pt-4 gap-4">
          <p className="text-secondary-400 text-xs">
            © {new Date().getFullYear()} Rajat Goyal. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
