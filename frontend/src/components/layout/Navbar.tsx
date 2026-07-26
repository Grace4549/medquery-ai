import { Activity } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200">
            <Activity className="h-7 w-7" strokeWidth={2.5} />
          </div>

          <div className="leading-tight">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              MedQuery AI
            </h1>

            <p className="mt-1 text-sm font-medium tracking-wide text-slate-500">
              AI-Powered Healthcare Platform
            </p>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-all duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login Button */}
        <NavLink to="/login">
          <Button className="rounded-xl bg-blue-600 px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl">
            Login
          </Button>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;