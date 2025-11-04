import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-airline-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-airline-500 group-hover:bg-airline-600 transition-colors">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-airline-900 hidden sm:inline">
              AirReserve
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-airline-900 hover:text-airline-600 hover:bg-airline-50 rounded-lg transition-all"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="px-4 py-2 text-sm font-medium text-airline-900 hover:text-airline-600 hover:bg-airline-50 rounded-lg transition-all"
            >
              Features
            </Link>
            <Link
              to="/demo"
              className="px-4 py-2 text-sm font-medium text-airline-900 hover:text-airline-600 hover:bg-airline-50 rounded-lg transition-all"
            >
              Demo
            </Link>
            <Link
              to="/team"
              className="px-4 py-2 text-sm font-medium text-airline-900 hover:text-airline-600 hover:bg-airline-50 rounded-lg transition-all"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-airline-900 hover:text-airline-600 hover:bg-airline-50 rounded-lg transition-all"
            >
              Contact
            </Link>
          </nav>

          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-semibold text-white bg-airline-500 hover:bg-airline-600 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
