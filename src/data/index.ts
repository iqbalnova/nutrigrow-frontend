import { Melon, BlogPost, NutriBotFeature } from "@/types";

export const melons: Melon[] = [
  {
    id: "1",
    name: "Sweet Hami",
    variety: "Hami Melon",
    brixLevel: 16,
    price: 24.99,
    description:
      "Premium Hami melons with exceptional sweetness and crisp texture. Grown using our precision hydroponic system for optimal flavor development.",
    image: "/images/sweet-hami.jpg",
    features: [
      "16% Brix sweetness level",
      "Crisp, refreshing texture",
      "Rich in vitamins A & C",
      "Zero pesticides",
      "Harvested at peak ripeness",
    ],
    nutritionFacts: {
      calories: 64,
      sugar: 14.4,
      fiber: 1.6,
      vitaminC: 67,
      potassium: 388,
      water: 89.8,
    },
    growthCycle: 85,
    availability: "in-stock",
  },
  {
    id: "2",
    name: "Sweet Lavender",
    variety: "Japanese Lavender Melon",
    brixLevel: 15,
    price: 29.99,
    description:
      "Exotic lavender melons with delicate floral notes and incredible sweetness. A rare variety perfected through our NutriBot technology.",
    image: "/images/sweet-lavender.jpg",
    features: [
      "15% Brix sweetness level",
      "Unique lavender aroma",
      "Smooth, creamy texture",
      "Antioxidant-rich",
      "Limited harvest variety",
    ],
    nutritionFacts: {
      calories: 58,
      sugar: 13.2,
      fiber: 1.4,
      vitaminC: 72,
      potassium: 395,
      water: 91.2,
    },
    growthCycle: 92,
    availability: "pre-order",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Revolutionary Hydroponic Growing: How NutriBot Changes Everything",
    slug: "revolutionary-hydroponic-growing-nutribot",
    excerpt:
      "Discover how our AI-powered NutriBot system is transforming melon cultivation with precision technology and sustainable practices.",
    content: `# Revolutionary Hydroponic Growing: How NutriBot Changes Everything

The future of agriculture is here, and it's growing in our state-of-the-art hydroponic facilities. Our NutriBot system represents a quantum leap in precision growing technology, delivering consistently superior melons while using 90% less water than traditional farming.

## The Science Behind NutriBot

Our proprietary IoT system monitors and adjusts critical growing parameters in real-time:

- **pH Balance**: Maintained within 0.1 units of optimal levels
- **Electrical Conductivity (EC)**: Precise nutrient delivery tracking
- **Water Flow**: Automated circulation for perfect root oxygenation
- **Environmental Controls**: Temperature, humidity, and light optimization

## Sustainable Excellence

By eliminating soil-based farming, we've created a closed-loop system that:
- Reduces water usage by 90%
- Eliminates pesticide need
- Minimizes transportation emissions
- Ensures year-round production

The result? Melons that consistently achieve 15-16% Brix levels – a sweetness level that traditional farming can rarely match.`,
    author: "Dr. Sarah Chen",
    publishedAt: "2024-03-15",
    category: "technology",
    tags: ["hydroponics", "nutribot", "sustainability", "innovation"],
    featuredImage: "/images/blog/nutribot-system.jpg",
    readTime: 5,
    seoMeta: {
      title: "Revolutionary Hydroponic Growing with NutriBot | NutriGrow",
      description:
        "Learn how NutriBot AI technology revolutionizes hydroponic melon growing with precision controls and sustainable practices.",
      keywords: [
        "hydroponic growing",
        "nutribot",
        "precision agriculture",
        "sustainable farming",
        "melon cultivation",
      ],
    },
  },
  {
    id: "2",
    title: "The Perfect Melon: Understanding Brix Levels and Sweetness",
    slug: "perfect-melon-brix-levels-sweetness",
    excerpt:
      "Learn why Brix levels matter and how our precision growing achieves consistently sweet, premium melons every harvest.",
    content: `# The Perfect Melon: Understanding Brix Levels and Sweetness

When it comes to melons, sweetness isn't just about taste – it's about science. The Brix scale measures dissolved sugar content, and it's the gold standard for determining fruit quality.

## What Makes Our Melons Special

Most commercial melons average 8-12% Brix. Our precision-grown melons consistently achieve 15-16% Brix through:

### Controlled Nutrition
- Precise nutrient timing
- Optimal potassium levels for sugar development  
- Balanced calcium for cell structure

### Environmental Perfection
- Consistent temperature ranges
- Humidity control preventing stress
- Optimal light cycles mimicking natural conditions

### Harvest Timing
- Real-time Brix monitoring
- Peak ripeness detection
- Immediate cold chain preservation

The result is a melon experience unlike any other – consistently sweet, perfectly textured, and incredibly fresh.`,
    author: "Marcus Rodriguez",
    publishedAt: "2024-03-10",
    category: "nutrition",
    tags: ["brix levels", "sweetness", "quality", "nutrition"],
    featuredImage: "/images/blog/brix-testing.jpg",
    readTime: 4,
    seoMeta: {
      title:
        "Understanding Brix Levels: The Science Behind Sweet Melons | NutriGrow",
      description:
        "Discover how Brix levels determine melon sweetness and why our precision-grown melons achieve superior 15-16% Brix consistently.",
      keywords: [
        "brix levels",
        "melon sweetness",
        "fruit quality",
        "nutrition facts",
        "premium melons",
      ],
    },
  },
  {
    id: "3",
    title: "From Greenhouse to Your Door: Our Sustainable Supply Chain",
    slug: "greenhouse-to-door-sustainable-supply-chain",
    excerpt:
      "Explore how we maintain maximum freshness and minimize environmental impact through our direct-to-customer model.",
    content: `# From Greenhouse to Your Door: Our Sustainable Supply Chain

Traditional produce travels thousands of miles, sitting in warehouses and losing freshness every day. We've revolutionized this process with our greenhouse-to-door approach.

## The Journey of Freshness

### Day 1: Harvest
- Melons picked at optimal ripeness
- Immediate quality testing
- Cold storage at precise temperatures

### Day 2: Processing & Packaging  
- Gentle cleaning and inspection
- Biodegradable packaging materials
- Temperature-controlled preparation

### Day 3: Direct Delivery
- Carbon-neutral shipping partners
- Insulated containers maintain freshness
- Real-time tracking for customers

## Environmental Impact

Our direct model eliminates:
- Multiple transportation stages
- Warehouse storage energy
- Plastic packaging waste
- Food spoilage and waste

The result? Melons that taste like they were just picked, with a carbon footprint 70% smaller than store-bought alternatives.`,
    author: "Emma Thompson",
    publishedAt: "2024-03-05",
    category: "sustainability",
    tags: ["supply chain", "sustainability", "direct delivery", "freshness"],
    featuredImage: "/images/blog/supply-chain.jpg",
    readTime: 6,
    seoMeta: {
      title:
        "Sustainable Supply Chain: Greenhouse to Door Delivery | NutriGrow",
      description:
        "Learn how our direct-to-customer model ensures maximum freshness while minimizing environmental impact.",
      keywords: [
        "sustainable supply chain",
        "direct delivery",
        "fresh produce",
        "environmental impact",
        "greenhouse to door",
      ],
    },
  },
];

export const nutriBotFeatures: NutriBotFeature[] = [
  {
    id: "1",
    name: "Smart pH Control",
    description:
      "Automated pH monitoring and adjustment for optimal nutrient uptake",
    icon: "Gauge",
    benefits: [
      "Maintains pH within 0.1 units of target",
      "Prevents nutrient lockout",
      "Reduces manual testing by 95%",
      "Real-time alerts for irregularities",
    ],
  },
  {
    id: "2",
    name: "EC Management",
    description:
      "Precise electrical conductivity control ensures perfect nutrient concentration",
    icon: "Zap",
    benefits: [
      "Automated nutrient dosing",
      "Prevents over/under-feeding",
      "Growth stage optimization",
      "Cost reduction through efficiency",
    ],
  },
  {
    id: "3",
    name: "Flow Optimization",
    description: "Intelligent water circulation for maximum root oxygenation",
    icon: "Waves",
    benefits: [
      "Prevents root rot",
      "Optimizes nutrient delivery",
      "Energy-efficient pumping",
      "Extended system lifespan",
    ],
  },
  {
    id: "4",
    name: "Remote Monitoring",
    description: "Access your system data anywhere with our mobile app",
    icon: "Smartphone",
    benefits: [
      "24/7 system visibility",
      "Historical data analysis",
      "Trend prediction",
      "Multi-system management",
    ],
  },
];
