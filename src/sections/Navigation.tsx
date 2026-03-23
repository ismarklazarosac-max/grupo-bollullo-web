import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wine, Home, BookOpen, Newspaper, Users, Grape } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigationConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, BookOpen, Newspaper, Users, Grape, Wine, Menu, X, ChevDown: ChevronDown,
};

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  // Null check: if config is empty, render nothing
  if (!navigationConfig.brandName) return null;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      navigate('/' + href);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavClick = (href: string, hasDropdown: boolean) => {
    if (hasDropdown) return;
    
    if (href.startsWith('/')) {
      // It's a route
      if (href === '/') {
        navigate('/');
        window.scrollTo(0, 0);
      } else {
        navigate(href);
      }
    } else if (href.startsWith('#')) {
      // It's a section anchor
      scrollToSection(href);
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = navigationConfig.navLinks;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-wine-800/95 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label={navigationConfig.brandName}
          onClick={() => window.scrollTo(0, 0)}
        >
          <Wine className="w-8 h-8 text-gold-500 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="font-serif text-xl text-white tracking-wide">{navigationConfig.brandName}</span>
            <span className="text-[10px] text-gold-400 tracking-widest uppercase">{navigationConfig.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isExternalLink = link.href.startsWith('/');
            
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                role="none"
              >
                {isExternalLink && !hasDropdown ? (
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-gold-400 transition-colors duration-300 py-2"
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, hasDropdown)}
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-gold-400 transition-colors duration-300 py-2"
                    role="menuitem"
                    aria-haspopup={hasDropdown ? 'true' : undefined}
                    aria-expanded={hasDropdown ? activeDropdown === link.name : undefined}
                  >
                    {link.name}
                    {hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} aria-hidden="true" />
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                      activeDropdown === link.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    role="menu"
                  >
                    <div className="bg-wine-800/95 backdrop-blur-md rounded-md overflow-hidden min-w-[200px] border border-white/10">
                      {link.dropdown?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-gold-500/20 hover:text-gold-400 transition-colors"
                          role="menuitem"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {navigationConfig.ctaButtonText && (
          <Link
            to="/#contact"
            className="hidden lg:block btn-primary rounded"
            aria-label={navigationConfig.ctaButtonText}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                scrollToSection('#contact');
              }
            }}
          >
            {navigationConfig.ctaButtonText}
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-wine-900/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container-custom py-8 flex flex-col gap-2">
          {navLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];
            const hasDropdown = !!link.dropdown;
            
            return (
              <div
                key={link.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="flex items-center justify-between w-full py-4 text-lg text-white border-b border-white/10"
                      aria-expanded={activeDropdown === link.name}
                      role="menuitem"
                    >
                      <span className="flex items-center gap-3">
                        {IconComponent && <IconComponent className="w-5 h-5 text-gold-500" />}
                        {link.name}
                      </span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} aria-hidden="true" />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeDropdown === link.name ? 'max-h-60' : 'max-h-0'
                      }`}
                      role="menu"
                    >
                      {link.dropdown?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block w-full text-left pl-12 py-3 text-white/70 hover:text-gold-400"
                          role="menuitem"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="flex items-center gap-3 w-full py-4 text-lg text-white border-b border-white/10 hover:text-gold-400 transition-colors"
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5 text-gold-500" />}
                    {link.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, false)}
                    className="flex items-center gap-3 w-full py-4 text-lg text-white border-b border-white/10 hover:text-gold-400 transition-colors"
                    role="menuitem"
                  >
                    {IconComponent && <IconComponent className="w-5 h-5 text-gold-500" />}
                    {link.name}
                  </button>
                )}
              </div>
            );
          })}

          {navigationConfig.ctaButtonText && (
            <Link
              to="/#contact"
              className="btn-primary rounded mt-6 text-center"
              role="menuitem"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  scrollToSection('#contact');
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {navigationConfig.ctaButtonText}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
