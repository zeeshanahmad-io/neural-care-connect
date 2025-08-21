import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Dr. Faiyaz Ahmad</h3>
            <p className="text-sm leading-relaxed">
              Expert neurological care with compassion. Dedicated to your health and well-being.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="text-sm">123 Medical Complex, Patna, Bihar</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <p className="text-sm">+91 99999 99999</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-sm">contact@drfaiyazahmad.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/appointments" className="hover:text-primary transition-colors">Appointments</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><FaFacebook className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter"><FaTwitter className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><FaLinkedin className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Newsletter (Placeholder) */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Newsletter</h3>
            <p className="text-sm">Stay updated with our latest news and health tips.</p>
            {/* You can add a newsletter signup form here later */}
            <input type="email" placeholder="Your email" className="w-full p-2 rounded-md bg-background border border-input text-foreground" />
            <button className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors">Subscribe</button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          &copy; {currentYear} Dr. Faiyaz Ahmad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
