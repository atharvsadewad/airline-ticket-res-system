import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-airline-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">AirReserve</h3>
            <p className="text-airline-100 text-sm">
              Efficient airline booking system using Hashing and BST for the DSA project.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-airline-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-airline-100 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-airline-100 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-airline-100 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Institution</h4>
            <p className="text-airline-100 text-sm mb-2">MIT ADT University</p>
            <p className="text-airline-100 text-sm">Pune, India</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-airline-100">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@airreserve.com">info@airreserve.com</a>
              </li>
              <li className="flex items-center gap-2 text-airline-100">
                <Phone className="w-4 h-4" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2 text-airline-100">
                <MapPin className="w-4 h-4" />
                <span>Pune, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-airline-700 pt-8">
          <div className="text-center text-airline-100 text-sm">
            <p>Made with ❤️ for DSA Jury 2025</p>
            <p className="mt-2">
              © 2025 Airline Ticket Reservation System. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
