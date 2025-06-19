import React from "react";
import { Star, Droplets, Clock } from "lucide-react";
import { GlassCard, Button } from "@/components/ui/GlassCard";
import { melons } from "@/data";
import { formatPrice } from "@/lib/utils";

const MelonsSection: React.FC = () => {
  return (
    <section id="melons" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Our Premium
            <span className="block bg-gradient-to-r from-melon-400 to-nature-400 bg-clip-text text-transparent">
              Melons
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Each variety is carefully cultivated using our NutriBot technology
            to achieve exceptional sweetness and flavor profiles that
            traditional farming cannot match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {melons.map((melon) => (
            <GlassCard key={melon.id} className="p-8 group">
              <div className="relative mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-melon-200 to-melon-400 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🍈</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-nature-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {melon.brixLevel}% Brix
                  </div>
                </div>
                {melon.availability === "pre-order" && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-earth-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Pre-Order
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    {melon.name}
                  </h3>
                  <p className="text-white/60 text-sm font-medium mb-4">
                    {melon.variety}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {melon.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {melon.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-nature-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Clock className="w-5 h-5 text-nature-400 mx-auto mb-2" />
                    <div className="text-white font-bold">
                      {melon.growthCycle} days
                    </div>
                    <div className="text-white/60 text-xs">Growth Cycle</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-bold">
                      {melon.nutritionFacts.water}%
                    </div>
                    <div className="text-white/60 text-xs">Water Content</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div>
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(melon.price)}
                    </div>
                    <div className="text-white/60 text-sm">per melon</div>
                  </div>
                  <Button
                    variant={
                      melon.availability === "in-stock"
                        ? "primary"
                        : "secondary"
                    }
                    className="group"
                  >
                    {melon.availability === "in-stock"
                      ? "Order Now"
                      : "Pre-Order"}
                    <Star className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Nutrition Facts */}
        <div className="mt-16">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
              Nutritional Excellence
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-nature-400 mb-1">
                  High
                </div>
                <div className="text-white/80 text-sm">Vitamin C</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">90%</div>
                <div className="text-white/80 text-sm">Water Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-melon-400 mb-1">
                  Low
                </div>
                <div className="text-white/80 text-sm">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth-400 mb-1">
                  Zero
                </div>
                <div className="text-white/80 text-sm">Pesticides</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default MelonsSection;
