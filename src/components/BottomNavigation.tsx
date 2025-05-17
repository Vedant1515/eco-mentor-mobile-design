
import { Home, Award, User, LeafIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-sm z-50 max-w-lg mx-auto">
      <div className="flex justify-around items-center h-16">
        <NavItem 
          to="/" 
          icon={<Home />} 
          label="Home" 
          isActive={path === '/'} 
        />
        <NavItem 
          to="/dashboard" 
          icon={<LeafIcon />} 
          label="Dashboard" 
          isActive={path === '/dashboard'} 
        />
        <NavItem 
          to="/challenges" 
          icon={<Award />} 
          label="Challenges" 
          isActive={path === '/challenges'} 
        />
        <NavItem 
          to="/tips" 
          icon={<LeafIcon />} 
          label="Tips" 
          isActive={path === '/tips'} 
        />
        <NavItem 
          to="/profile" 
          icon={<User />} 
          label="Profile" 
          isActive={path === '/profile'} 
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center w-full h-full ${
        isActive ? "text-eco-primary font-medium" : "text-gray-500"
      }`}
    >
      <div className="w-6 h-6">
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default BottomNavigation;
