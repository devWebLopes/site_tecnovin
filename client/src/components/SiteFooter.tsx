import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link
              href="/"
              className="brand-lockup brand-lockup--footer"
              aria-label="Tecnovin — início"
            >
              <span className="brand-mark">T</span>
              <span className="brand-name-wrap">
                <span className="brand-name">TECNOVIN</span>
                <span className="brand-tagline">ingredientes naturais</span>
              </span>
            </Link>
            <p className="footer-manifesto">
              A natureza brasileira, preparada para as melhores formulações do
              mundo.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <p className="footer-label">Explorar</p>
              <Link href="/#origem">Origem</Link>
              <Link href="/#solucoes">Soluções</Link>
              <Link href="/#qualidade">Qualidade</Link>
              <Link href="/blog">Conteúdos</Link>
            </div>
            <div>
              <p className="footer-label">Contato</p>
              <a href="mailto:tecnovin@tecnovin.com.br">
                <Mail size={14} /> tecnovin@tecnovin.com.br
              </a>
              <a href="tel:+555421021999">
                <Phone size={14} /> +55 54 2102-1999
              </a>
              <span>
                <MapPin size={14} /> Vale dos Vinhedos · RS
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Tecnovin do Brasil. Todos os direitos
            reservados.
          </span>
          <a
            href="https://www.tecnovin.com.br/politicas.html"
            target="_blank"
            rel="noreferrer"
          >
            Políticas e código de ética <ArrowUpRight size={13} />
          </a>
          <a href="mailto:ouvidoria@tecnovin.com.br">Ouvidoria</a>
        </div>
      </div>
    </footer>
  );
}
