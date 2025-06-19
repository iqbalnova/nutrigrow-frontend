export interface Melon {
  id: string;
  name: string;
  variety: string;
  brixLevel: number;
  price: number;
  description: string;
  image: string;
  features: string[];
  nutritionFacts: NutritionFacts;
  growthCycle: number; // days
  availability: "in-stock" | "pre-order" | "out-of-stock";
}

export interface NutritionFacts {
  calories: number;
  sugar: number;
  fiber: number;
  vitaminC: number;
  potassium: number;
  water: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: BlogCategory;
  tags: string[];
  featuredImage: string;
  readTime: number;
  seoMeta: SEOMeta;
}

export interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

export type BlogCategory =
  | "hydroponics"
  | "nutrition"
  | "sustainability"
  | "technology"
  | "recipes"
  | "growing-tips";

export interface NutriBotFeature {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface GrowthData {
  ph: number;
  ec: number;
  temperature: number;
  humidity: number;
  lightIntensity: number;
  waterFlow: number;
  timestamp: string;
}

export interface Product {
  id: string;
  name: string;
  type: "melon" | "nutribot" | "accessory";
  price: number;
  description: string;
  images: string[];
  specifications?: Record<string, string>;
  inStock: boolean;
}
