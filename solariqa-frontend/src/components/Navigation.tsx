import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Solariqa</span>
          </div>

          <div className="hidden lg:flex items-center space-x-5">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/explore" className="text-gray-700 hover:text-purple-600 transition-colors">Explore</Link>
            <Link to="/ask" className="text-gray-700 hover:text-purple-600 transition-colors">Ask</Link>
            <Link to="/question/:id" className="text-gray-700 hover:text-purple-600 transition-colors">Tags</Link>
          </div>

          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search questions..."
              className="pl-10 w-64 border border-gray-300 focus-visible:border-purple-600 focus-visible:ring-2 focus-visible:ring-purple-600"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline">
              Sign in with Google
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Connect Wallet
            </Button>
          </div>

          <div className="flex lg:hidden items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4 animate-slide-in-right">
            <div className="relative focus:outline-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search questions..."
                className="pl-10 border border-gray-300 focus-visible:border-purple-600 focus-visible:ring-2 focus-visible:ring-purple-600"
              />
            </div>
            
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/explore" className="text-gray-700 hover:text-purple-600 transition-colors">Explore</Link>
              <Link to="/question/:id" className="text-gray-700 hover:text-purple-600 transition-colors">Tags</Link>
              <Link to="/ask" className="text-gray-700 hover:text-purple-600 transition-colors">Ask</Link>
            </div>

            <Button variant="outline" className="w-full">
              Sign In with Google
            </Button>
            <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
