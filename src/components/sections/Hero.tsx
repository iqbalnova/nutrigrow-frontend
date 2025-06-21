"use client";

import React from "react";
import { ArrowRight, Zap, Leaf, Truck } from "lucide-react";
import { GlassCard, Button } from "@/components/ui/GlassCard";
import { openWhatsApp } from "@/lib/whatsapp";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
            Premium
            <span className="block bg-gradient-to-r from-nature-400 to-melon-400 bg-clip-text text-transparent">
              Hydroponic
            </span>
            Melons
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            Grown sustainably with precision technology. Delivered directly to
            your door. Experience sweetness up to{" "}
            <span className="text-melon-400 font-bold">16% Brix</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group"
              onClick={() =>
                openWhatsApp({
                  phone: "6285210445912",
                  message: "Halo! Saya tertarik membeli Premium Melon 🍈",
                })
              }
            >
              Shop Premium Melons
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const target = document.getElementById("nutribot");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Discover NutriBot
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          <GlassCard className="p-8 text-center">
            <div className="w-16 h-16 bg-nature-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Tech-Integrated Growing
            </h3>
            <p className="text-white/70 mb-4">
              Melons nurtured with <strong>NutriBot</strong>, our custom IoT
              system for optimal growth conditions.
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-center">
            <div className="w-16 h-16 bg-melon-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Premium Taste
            </h3>
            <p className="text-white/70 mb-4">
              Sweetness up to <strong>16% Brix</strong>. Grown with precision
              for unforgettable flavor.
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-center">
            <div className="w-16 h-16 bg-earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Direct-to-Customer
            </h3>
            <p className="text-white/70 mb-4">
              From greenhouse to your doorstep. No middlemen.{" "}
              <strong>Maximum freshness</strong>.
            </p>
          </GlassCard>
        </div>

        {/* Floating Melon Visual */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-melon-400 to-melon-600 rounded-full animate-float opacity-20 blur-sm"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-melon-300 to-melon-500 rounded-full animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
