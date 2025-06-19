import React from "react";
import {
  Gauge,
  Zap,
  Waves,
  Smartphone,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { GlassCard, Button } from "@/components/ui/GlassCard";
import { nutriBotFeatures } from "@/data";

const iconMap = {
  Gauge,
  Zap,
  Waves,
  Smartphone,
};

const NutriBotSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-nature-400 to-blue-400 bg-clip-text text-transparent">
              NutriBot
            </span>
            <span className="block text-white">Smart Nutrition Control</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Manage pH, EC, and flow automatically—delivering optimal growth
            conditions. Get real-time alerts, remote monitoring, and data
            insights to perfect each cycle.
          </p>
        </div>

        {/* Main NutriBot Display */}
        <div className="mb-16">
          <GlassCard className="p-12 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-nature-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-glow">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Precision Growing Technology
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Our AI-powered system continuously monitors and adjusts critical
              parameters, ensuring your melons receive the perfect growing
              conditions 24/7.
            </p>
            <Button size="lg" className="group">
              Get NutriBot System
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </GlassCard>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {nutriBotFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <GlassCard
                key={feature.id}
                className="p-6 text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-nature-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  {feature.name}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-nature-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/60 text-xs text-left">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Mobile App Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-display font-bold text-white mb-6">
              Monitor from
              <span className="block bg-gradient-to-r from-blue-400 to-nature-400 bg-clip-text text-transparent">
                Anywhere
              </span>
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Our Android mobile app puts complete system control in your
              pocket. Track growth metrics, receive alerts, and optimize your
              harvest from anywhere in the world.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-gradient rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Real-time Monitoring</h4>
                  <p className="text-white/60 text-sm">
                    24/7 system visibility with instant alerts
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-nature-gradient rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Growth Analytics</h4>
                  <p className="text-white/60 text-sm">
                    Historical data and trend analysis
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-melon-gradient rounded-lg flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Remote Control</h4>
                  <p className="text-white/60 text-sm">
                    Adjust parameters from anywhere
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="secondary">
              Download Android App
            </Button>
          </div>

          <div className="relative">
            <GlassCard className="p-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-bold">NutriBot Dashboard</h4>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">pH Level</span>
                    <span className="text-nature-400 font-bold">6.2</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-nature-400 h-2 rounded-full w-3/4"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">EC Level</span>
                    <span className="text-blue-400 font-bold">1.8</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Water Flow</span>
                    <span className="text-melon-400 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-melon-400 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutriBotSection;
