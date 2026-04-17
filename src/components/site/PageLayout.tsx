import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface PageLayoutProps {
  children: ReactNode;
  transparentHeader?: boolean;
}

export const PageLayout = ({ children, transparentHeader = false }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <SiteHeader transparentOnTop={transparentHeader} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};
