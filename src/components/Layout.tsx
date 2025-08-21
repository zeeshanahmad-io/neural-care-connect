import { ReactNode } from "react";
import Navbar from "./Navbar";
import FloatingWhatsApp from "./FloatingWhatsApp";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;