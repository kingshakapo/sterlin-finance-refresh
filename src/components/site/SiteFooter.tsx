import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Logo } from "./Logo";

export const SiteFooter = () => {
  return (
    <footer className="bg-navy-deep text-ivory/80">
      <div className="container-wide grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
            Sterling Finance &amp; Investment is a Cape Town–based firm advising clients across asset management,
            brokerage and investment banking.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-ivory/60 hover:text-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="text-ivory/60 hover:text-gold transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="mailto:info@sterlinfin.com" aria-label="Email" className="text-ivory/60 hover:text-gold transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.22em] text-gold">Services</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/asset-management" className="hover:text-gold transition-colors">Asset Management</Link></li>
            <li><Link to="/brokerage" className="hover:text-gold transition-colors">Brokerage</Link></li>
            <li><Link to="/investment-banking" className="hover:text-gold transition-colors">Investment Banking</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.22em] text-gold">Company</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm uppercase tracking-[0.22em] text-gold">Cape Town Office</h4>
          <address className="mt-6 not-italic text-sm leading-relaxed text-ivory/70">
            The Sterling Building<br />
            Foreshore, Cape Town 8001<br />
            South Africa<br />
            <a href="tel:+27210000000" className="mt-3 inline-block hover:text-gold transition-colors">+27 (0) 21 000 0000</a>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-wide flex flex-col items-start justify-between gap-4 py-6 text-xs text-ivory/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sterling Finance &amp; Investment. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
