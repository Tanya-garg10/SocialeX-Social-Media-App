import { Home, Search, Compass, MessageCircle, Heart, PlusSquare, User, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: MessageCircle, label: "Messages", path: "/messages" },
  { icon: Heart, label: "Notifications", path: "/notifications" },
  { icon: PlusSquare, label: "Create", path: "/create" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-20 flex-col border-r border-border bg-sidebar lg:w-64">
      {/* Logo */}
      <div className="flex h-20 items-center justify-center border-b border-border px-4 lg:justify-start">
        <h1 className="gradient-text text-2xl font-bold hidden lg:block">SocialeX</h1>
        <span className="gradient-text text-2xl font-bold lg:hidden">S</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200",
                "hover:bg-secondary lg:justify-start justify-center",
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <item.icon className="h-6 w-6 flex-shrink-0" />
            <span className="hidden lg:block">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-border p-3 space-y-1">
        <NavLink
          to="/settings"
          className="flex items-center gap-4 rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground lg:justify-start justify-center"
        >
          <Settings className="h-6 w-6" />
          <span className="hidden lg:block">Settings</span>
        </NavLink>
        <Button
          variant="ghost"
          className="w-full justify-center lg:justify-start gap-4 px-3 py-3 text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-6 w-6" />
          <span className="hidden lg:block">Log out</span>
        </Button>
      </div>
    </aside>
  );
};
