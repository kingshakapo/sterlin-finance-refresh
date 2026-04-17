interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionEyebrow = ({ children, className = "" }: SectionEyebrowProps) => (
  <span className={`eyebrow ${className}`}>{children}</span>
);
