import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

interface LogoProps {
  variant?: "light" | "dark";
}

export const Logo = ({ variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "text-ivory" : "text-navy";
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Sterling Finance & Investment">
      <img
        src={logoImg}
        alt="Sterling Finance & Investment"
        className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
      />
      <span className={`flex flex-col leading-tight ${textColor}`}>
        <span className="font-serif text-base tracking-wide">Sterling</span>
        <span className="text-[10px] uppercase tracking-[0.28em] opacity-80">Finance &amp; Investment</span>
      </span>
    </Link>
  );
};
