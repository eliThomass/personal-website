import '../styles/navbar.css';
import LI from '../assets/linkedin.svg';
import GH from '../assets/github.svg';
import IN from '../assets/instagram.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navItems = [
  { to: '/', label: '<About_Me object at 0x784c574f10b0>' },
  { to: '/projects', label: '<Projects object at 0x682g5h4a1010>' },
  { to: '/resume', label: '<Resume object at 0x884c574f101f>' },
  { to: '/contact', label: '<Contact object at 0x384e57461710>' },
];

const socials = [
  { href: 'https://www.linkedin.com/in/eli-thomas/', src: LI, alt: 'LinkedIn' },
  { href: 'https://github.com/eliThomass', src: GH, alt: 'GitHub' },
  { href: 'https://www.instagram.com/eli_thomas222/', src: IN, alt: 'Instagram' },
];

function NavList({ onNavigate }) {
  return (
    <div className="nav-links">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          onClick={onNavigate}
          className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

function SocialList() {
  return (
    <div className="social-icons">
      {socials.map(({ href, src, alt }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
          <img src={src} className="icon" alt={alt} />
        </a>
      ))}
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close overlay when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll + Esc to close while overlay is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  return (
    <div className="header">
      <nav className="navbar">
        <NavList />
        <SocialList />

        <button
          type="button"
          className="nav-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        <div
          id="mobile-menu"
          className="mobile-menu"
          data-open={isMenuOpen}
          aria-hidden={!isMenuOpen}
        >
          <NavList onNavigate={() => setIsMenuOpen(false)} />
          <SocialList />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
