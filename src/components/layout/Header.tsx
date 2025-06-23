"use client";

import React, { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { GlassCard, Button } from "@/components/ui/GlassCard";
import { openWhatsApp } from "@/lib/whatsapp";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Our Melons", href: "#melons" },
    { name: "NutriBot", href: "#nutribot" },
    { name: "Blog", href: "#blog" },
    // { name: "About", href: "#about" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <GlassCard className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-nature-gradient rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-white">
              NutriGrow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="text-white/80 hover:text-white transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-melon-500 rounded-full text-xs text-white flex items-center justify-center">
                2
              </span>
            </button> */}
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                openWhatsApp({
                  phone: "6285210445912",
                  message: "Halo! Saya tertarik membeli Premium Melon 🍈",
                })
              }
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-4">
                  {/* <button className="text-white/80 hover:text-white transition-colors duration-200">
                    <User className="w-5 h-5" />
                  </button>
                  <button className="text-white/80 hover:text-white transition-colors duration-200 relative">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-melon-500 rounded-full text-xs text-white flex items-center justify-center">
                      2
                    </span>
                  </button> */}
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    openWhatsApp({
                      phone: "6285210445912",
                      message: "Halo! Saya tertarik membeli Premium Melon 🍈",
                    })
                  }
                >
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </GlassCard>
    </header>
  );
};

export default Header;
