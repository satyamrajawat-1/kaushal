import { useState, useEffect } from 'react';
import { Menu, X, Accessibility } from 'lucide-react';
import { useFamilySession } from '../../hooks/useFamilySession';

const navLinks = [
  { label: 'How It Works', labelHi: 'कैसे काम करता है', href: '#how-it-works' },
  { label: 'Counselling', labelHi: 'परामर्श', href: '#counselling' },
  { label: 'Careers', labelHi: 'करियर', href: '#careers' },
  { label: 'Evidence', labelHi: 'साक्ष्य', href: '#evidence' },
  { label: 'For Counsellors', labelHi: 'काउंसलर के लिए', href: '#counsellor-workspace' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { session, setLanguage, demoRole, setDemoRole, isSimpleMode, toggleSimpleMode } = useFamilySession();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isHi = session.language === 'hi';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-cream-light/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex flex-col leading-tight cursor-pointer bg-transparent border-none p-0"
            aria-label="Go to top"
          >
            <span className="font-editorial text-xl lg:text-2xl text-primary tracking-tight">
              KAUSHAL SAATH
            </span>
            <span className="text-[10px] lg:text-xs tracking-[0.2em] text-text-muted uppercase">
              {isHi ? 'परिवार करियर परामर्श' : 'Family Career Counselling'}
            </span>
          </button>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors bg-transparent border-none cursor-pointer py-2"
              >
                {isHi ? link.labelHi : link.label}
              </button>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Demo Role Switcher */}
            <select
              value={demoRole}
              onChange={(e) => setDemoRole(e.target.value as 'family' | 'counsellor' | 'admin')}
              className="text-xs px-2 py-1 bg-cream border border-border rounded text-text-muted cursor-pointer"
              aria-label="Demo role selector"
            >
              <option value="family">{isHi ? 'परिवार' : 'Family'}</option>
              <option value="counsellor">{isHi ? 'काउंसलर' : 'Counsellor'}</option>
              <option value="admin">{isHi ? 'व्यवस्थापक' : 'Admin'}</option>
            </select>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(isHi ? 'en' : 'hi')}
              className="text-xs px-3 py-1.5 border border-border rounded hover:bg-sage transition-colors bg-transparent cursor-pointer"
              aria-label={isHi ? 'Switch to English' : 'Switch to Hindi'}
            >
              {isHi ? 'EN' : 'हिं'}
            </button>

            {/* Simple Mode */}
            <button
              onClick={toggleSimpleMode}
              className={`p-1.5 border rounded transition-colors cursor-pointer ${
                isSimpleMode ? 'bg-primary text-cream-light border-primary' : 'bg-transparent border-border hover:bg-sage'
              }`}
              aria-label={isSimpleMode ? 'Disable simple mode' : 'Enable simple mode'}
              title="Simple Mode"
            >
              <Accessibility size={16} />
            </button>

            <button
              onClick={() => scrollTo('#family-context')}
              className="px-5 py-2 bg-primary text-cream-light text-sm font-medium rounded hover:bg-primary-light transition-colors cursor-pointer border-none"
            >
              {isHi ? 'परामर्श शुरू करें →' : 'Start Counselling →'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 bg-transparent border-none cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-light border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-text hover:bg-sage rounded transition-colors bg-transparent border-none cursor-pointer"
              >
                {isHi ? link.labelHi : link.label}
              </button>
            ))}
            <hr className="border-border" />
            <div className="flex items-center gap-2 px-4 pt-2">
              <select
                value={demoRole}
                onChange={(e) => setDemoRole(e.target.value as 'family' | 'counsellor' | 'admin')}
                className="text-xs px-2 py-1 bg-cream border border-border rounded text-text-muted"
                aria-label="Demo role selector"
              >
                <option value="family">{isHi ? 'परिवार' : 'Family'}</option>
                <option value="counsellor">{isHi ? 'काउंसलर' : 'Counsellor'}</option>
                <option value="admin">{isHi ? 'व्यवस्थापक' : 'Admin'}</option>
              </select>
              <button
                onClick={() => setLanguage(isHi ? 'en' : 'hi')}
                className="text-xs px-3 py-1.5 border border-border rounded bg-transparent cursor-pointer"
              >
                {isHi ? 'EN' : 'हिं'}
              </button>
              <button
                onClick={toggleSimpleMode}
                className={`p-1.5 border rounded cursor-pointer ${
                  isSimpleMode ? 'bg-primary text-cream-light border-primary' : 'bg-transparent border-border'
                }`}
                aria-label="Simple mode"
              >
                <Accessibility size={16} />
              </button>
            </div>
            <button
              onClick={() => scrollTo('#family-context')}
              className="block w-full mt-2 px-5 py-3 bg-primary text-cream-light text-sm font-medium rounded text-center cursor-pointer border-none"
            >
              {isHi ? 'परामर्श शुरू करें →' : 'Start Counselling →'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
