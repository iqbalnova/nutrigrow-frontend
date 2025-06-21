"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { GlassCard, Button } from "@/components/ui/GlassCard";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readTime: number;
}

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`,
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
            },
          }
        );
        console.log("RES: ", res.data.data.data);
        setPosts(res.data.data.data || []);
      } catch (error) {
        console.error("Failed to fetch blog posts", error);
      }
    };

    fetchBlogs();
  }, []);

  if (!posts.length) return null;

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Growing
            <span className="block bg-gradient-to-r from-nature-400 to-earth-400 bg-clip-text text-transparent">
              Knowledge
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the science behind our premium melons, sustainable growing
            practices, and the technology that makes it all possible.
          </p>
        </div>

        {/* Featured */}
        <div className="mb-16">
          <GlassCard className="p-8 lg:p-12 group">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-nature-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                  <div className="bg-white/10 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {featuredPost.category}
                  </div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4 group-hover:text-nature-400 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-8 text-white/60">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {formatDate(featuredPost.publishedAt)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {featuredPost.readTime} min read
                    </span>
                  </div>
                </div>
                <Button className="group">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden">
                {featuredPost.featuredImage ? (
                  <Image
                    src={`http://localhost:3000${featuredPost.featuredImage}`}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-nature-200 to-earth-400 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🌱</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl pointer-events-none" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Others */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {otherPosts.map((post) => (
            <GlassCard key={post.id} className="p-6 group hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-earth-200 to-earth-400 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl opacity-50">
                  {post.category === "nutrition" ? "🥗" : "🚚"}
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white/10 text-white px-2 py-1 rounded text-xs font-medium capitalize">
                  {post.category}
                </div>
                <div className="flex items-center space-x-1 text-white/60 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min</span>
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-nature-400 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-white/70 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white/60 text-xs">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <button className="text-nature-400 hover:text-nature-300 text-sm font-medium">
                  Read More →
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Categories */}
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-8">
            Explore by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Hydroponics",
              "Nutrition",
              "Sustainability",
              "Technology",
              "Recipes",
              "Growing Tips",
            ].map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                className="group"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
