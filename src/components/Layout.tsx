import { ReactNode } from "react";
import Navbar from "./Navbar";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { ThemeCustomizer } from "./ThemeCustomizer";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ThemeCustomizer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;