import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Funeral Plans', path: '/plans' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Top Bar */}
      <div className="bg-[#0b335c] text-white text-sm py-2 px-4 flex justify-between items-center sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <span className="hidden sm:inline">TFI Burial Society (PTY) Ltd - Marketed by Dignify Funeral Solutions</span>
          <span className="sm:hidden">TFI Burial Society</span>
          <div className="flex items-center gap-4">
            <a href="tel:+27000000000" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Phone size={14} /> <span className="hidden sm:inline">Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo area */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0b335c] to-[#1e5b9f] flex items-center justify-center text-white font-bold text-xl shadow-md">
                  TFI
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#0b335c] text-lg leading-tight uppercase tracking-tight">Burial Society</span>
                  <span className="text-xs text-gray-500 font-medium">Protecting Families</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-[#0b335c] font-semibold border-b-2 border-green-500'
                      : 'text-gray-600 hover:text-[#0b335c]'
                  } py-2 transition-colors duration-200 text-sm tracking-wide uppercase`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-md font-medium transition-all shadow-sm flex items-center gap-2 text-sm uppercase tracking-wide"
              >
                Get a Quote <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#0b335c] focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b shadow-lg absolute w-full top-20 left-0">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-[#0b335c] font-semibold bg-gray-50'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#0b335c]'
                  } block w-full text-center py-3 text-lg uppercase tracking-wider rounded-md`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-green-600 text-white w-full max-w-xs text-center py-3 rounded-md font-medium mt-4 block uppercase tracking-wide"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/27000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-medium py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-[#061a30] text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0b335c] to-white/20 flex items-center justify-center text-white font-bold text-xl">
                  TFI
                </div>
                <span className="font-bold text-white text-lg tracking-tight uppercase">Burial Society</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Providing affordable, flexible, and reliable funeral cover to protect you and your loved ones during difficult times.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14}/> Home</Link></li>
                <li><Link to="/plans" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14}/> Funeral Plans</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14}/> About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14}/> Contact & Quote</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Contact Info</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span>0800 123 456<br/><span className="text-xs text-gray-500">Toll Free</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span>WhatsApp:<br/>+27 71 234 5678</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Partners</h3>
              <div className="flex flex-col gap-4">
                <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center border border-white/10">
                  <span className="text-white font-semibold">Dignify Funeral Solutions</span>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 rounded-lg p-3 flex-1 flex items-center justify-center border border-white/10">
                    <span className="text-white font-bold text-sm">Old Mutual</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 flex-1 flex items-center justify-center border border-white/10">
                    <span className="text-white font-bold text-sm">RMA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col gap-2">
            <p className="font-medium text-gray-400 text-sm">
              TFI Brokers (Pty) Ltd is a juristic representative operating under House of Administration (Pty) Ltd, an authorised Financial Services Provider (FSP No. 50841). Terms & Conditions Apply.
            </p>
            <p>
              &copy; {new Date().getFullYear()} TFI Burial Society. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
