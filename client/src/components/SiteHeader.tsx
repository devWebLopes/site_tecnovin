import { Menu, MoveUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Origem", href: "/#origem" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Produtos", href: "/produtos" },
  { label: "Qualidade", href: "/#qualidade" },
  { label: "Conteúdos", href: "/blog" },
];

export default function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isBlog = location === "/blog";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const compact = scrolled || isBlog;

  return (
    <header
      className={`site-header ${compact ? "site-header--solid" : "site-header--hero"}`}
    >
      <div className="container flex items-center justify-between gap-6 py-4 lg:py-5">
        <Link href="/" className="brand-lockup" aria-label="Tecnovin — início">
          <span className="brand-mark">T</span>
          <span className="brand-name-wrap">
            <span className="brand-name">TECNOVIN</span>
            <span className="brand-tagline">ingredientes naturais</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {navItems.map(item =>
            item.href.includes("#") ? (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <a className="header-cta hidden lg:inline-flex" href="/#contato">
          Fale com a Tecnovin <MoveUpRight size={15} strokeWidth={1.8} />
        </a>

        <button
          type="button"
          className="mobile-menu-button lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`mobile-menu lg:hidden ${open ? "mobile-menu--open" : ""}`}
      >
        <div className="container flex flex-col gap-1 pb-5 pt-1">
          {navItems.map(item =>
            item.href.includes("#") ? (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            className="header-cta mt-3 inline-flex w-fit"
            href="/#contato"
            onClick={() => setOpen(false)}
          >
            Fale com a Tecnovin <MoveUpRight size={15} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </header>
  );
}

export { navItems };
