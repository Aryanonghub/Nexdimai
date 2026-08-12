import Link from "next/link";

export default function Footer({ variant }: { variant: "home" | "velmora" }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logos">
              <Link href="/" className="brand" aria-label="Nexdim home">
                <svg viewBox="0 0 1285 826" aria-hidden="true">
                  <use href="#nexdim-mark" />
                </svg>
                Nexdim
              </Link>
            </div>
            <p>Nexdim builds applied AI agents for businesses.</p>
            <p style={{ fontSize: "0.85rem" }}>Velmora is a product of Nexdim.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nexdim. All rights reserved.</span>
          <span>hello@nexdim.ai</span>
        </div>
      </div>
    </footer>
  );
}
