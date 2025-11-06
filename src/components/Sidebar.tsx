import { Home, Calendar, MessageCircle, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: MessageCircle, label: "Community", path: "/community" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-card border-r border-border h-screen sticky top-0">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-primary">TCE-Connect</h1>
        <p className="text-xs text-muted-foreground mt-1">Campus Events & Community</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © 2025 TCE-Connect
        </p>
      </div>
    </aside>
  );
};
