import { Home, Calendar, MessageCircle, Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: MessageCircle, label: "Clubs", path: "/community" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-foreground shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Enhanced */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-md group-hover:bg-primary/20 transition-all"></div>
              <img 
                src="/tce-logo.png" 
                alt="TCE Logo" 
                className="h-10 w-10 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="text-lg font-bold flex items-center gap-2">
              <span className="text-primary group-hover:scale-110 transition-transform duration-300">TCE</span>
              <span className="text-foreground transition-all duration-300">Connect</span>
            </div>
          </a>

          {/* Desktop Navigation - Improved */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className="px-4 py-1.5 rounded-lg text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium border border-transparent text-sm"
                activeClassName="text-primary font-bold border-primary bg-transparent"
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
            <a
              href="/login"
              className="ml-2 px-5 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold border border-primary text-sm btn-shine"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button - Improved */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-110 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu - Improved */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up border-t border-border bg-white">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className="flex items-center justify-center px-4 py-2 rounded-lg text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 mx-2 font-medium border border-transparent text-sm"
                activeClassName="text-primary font-bold border-primary bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
            <a
              href="/login"
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 mx-2 font-semibold text-sm btn-shine"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
