import React from "react";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <GlassCard className="p-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-nature-gradient rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-display font-bold text-white">
                  NutriGrow
                </span>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Premium hydroponic melons powered by precision technology. Grown
                sustainably, delivered directly to your door.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-nature-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-nature-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-nature-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-nature-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/melons/sweet-hami"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Sweet Hami
                  </a>
                </li>
                <li>
                  <a
                    href="/melons/sweet-lavender"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Sweet Lavender
                  </a>
                </li>
                <li>
                  <a
                    href="/nutribot"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    NutriBot System
                  </a>
                </li>
                <li>
                  <a
                    href="/accessories"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Growing Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="/subscriptions"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Subscription Plans
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/blog"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/growing-guide"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Growing Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/nutrition-facts"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Nutrition Facts
                  </a>
                </li>
                <li>
                  <a
                    href="/sustainability"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/70" />
                  <a
                    href="mailto:hello@nutrigrow.com"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    hello@nutrigrow.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/70" />
                  <a
                    href="tel:+6281234567890"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-white/70 mt-1" />
                  <p className="text-white/70 leading-snug">
                    Greenhouse Center, Jl. Hidroponik No. 123, Bandung,
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} NutriGrow. All rights reserved.
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;
