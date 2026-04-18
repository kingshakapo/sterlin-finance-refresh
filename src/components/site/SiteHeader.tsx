import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, MapPin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/asset-management", label: "Asset Management" },
  { to: "/brokerage", label: "Brokerage" },
  { to: "/investment-banking", label: "Investment Banking" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

interface SiteHeaderProps {
  transparentOnTop?: boolean;
}

export const SiteHeader = ({ transparentOnTop = false }: SiteHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const transparent = transparentOnTop && !scrolled;
  const headerCls = transparent
    ? "bg-transparent text-ivory border-transparent"
    : "bg-navy text-ivory border-navy-soft/40 shadow-elegant";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 border-b ${headerCls}`}>
      {/* Top utility bar */}
      <div className="hidden border-b border-ivory/10 lg:block">
        <div className="container-wide flex h-9 items-center justify-between text-[11px] uppercase tracking-[0.22em] text-ivory/70">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2"><MapPin className="h-3 w-3 text-gold" /> Cape Town · South Africa</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-3 w-3 text-gold" /> +27 64 080 6800</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/careers" className="hover:text-gold transition-colors">Careers</Link>
            
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex h-20 items-center justify-between">
        <Logo variant="light" />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.slice(1, 6).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `group relative text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-ivory/90"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative inline-block py-1">
                  {item.label}
                  <span
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-none bg-gold text-navy hover:bg-gold-bright">
            <Link to="/contact">Speak with us</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-ivory hover:bg-ivory/10 hover:text-gold">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-navy text-ivory border-l border-navy-soft">
              <div className="mt-6 flex flex-col gap-1">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `border-b border-ivory/10 py-4 font-serif text-xl transition-colors ${
                        isActive ? "text-gold" : "text-ivory hover:text-gold"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button asChild className="mt-8 rounded-none bg-gold text-navy hover:bg-gold-bright">
                  <Link to="/contact">Speak with us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
