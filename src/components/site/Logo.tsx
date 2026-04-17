import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
}

export const Logo = ({ variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "text-ivory" : "text-navy";
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Sterling Finance & Investment">
      <span className="grid h-10 w-10 place-items-center border border-secondary/70 transition-colors group-hover:bg-secondary/10">
        <span className="font-serif text-xl text-secondary">S</span>
      </span>
      <span className={`flex flex-col leading-tight ${textColor}`}>
        <span className="font-serif text-base tracking-wide">Sterling</span>
        <span className="text-[10px] uppercase tracking-[0.28em] opacity-80">Finance &amp; Investment</span>
      </span>
    </Link>
  );
};
