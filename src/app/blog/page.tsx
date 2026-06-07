
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Understanding Dog Body Language: A Guide for New Owners",
    excerpt: "Learn the subtle signs your dog is giving you, from tail position to eye contact...",
    category: "Training Tips",
    author: "Dr. Sarah Jenkins",
    date: "Oct 24, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1582456891925-a53965520520?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "How to Prepare Your Home for a New Foster Cat",
    excerpt: "Fostering is a rewarding experience. Here's how to create a safe haven for your first guest...",
    category: "Fostering",
    author: "Mark Thompson",
    date: "Oct 20, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "The Reality of UK Pet Rescue in 2024",
    excerpt: "A deep dive into the challenges and triumphs of animal welfare across the country...",
    category: "NGO News",
    author: "Eleanor Whiske",
    date: "Oct 15, 2023",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "5 Common Myths About Shelter Dogs Debunked",
    excerpt: "Shelter dogs aren't 'damaged'—they are resilient souls waiting for a second chance...",
    category: "Education",
    author: "Dr. Sarah Jenkins",
    date: "Oct 10, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">The Whiskers Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stories of survival, expert advice on pet care, and the latest updates from our rescue missions.
            </p>
          </div>

          {/* Featured Post */}
          <section className="mb-20">
            <Link href="#" className="group">
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <Image src="https://images.unsplash.com/photo-1736445786983-d7a6c09fc657?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt="Featured Post" />
                </div>
                <div className="p-8 md:p-16 flex flex-col justify-center space-y-6">
                  <Badge className="w-fit bg-primary">Featured Story</Badge>
                  <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">Finding Forever: The Heartwarming Story of Max & The Miller Family</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Max was our longest resident, waiting over 400 days for a home. We sat down with the Millers to talk about his first week in a real house.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground border-t pt-6 border-secondary/5">
                    <span className="flex items-center gap-2"><User size={16} className="text-primary" /> Eleanor Whiske</span>
                    <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> Oct 28, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:row lg:grid-cols-2 gap-12">
            {posts.map((post) => (
              <Card key={post.id} className="group overflow-hidden rounded-[2.5rem] border-none shadow-xl hover:shadow-2xl transition-all">
                <div className="flex flex-col md:row h-full">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <Image src={post.image} fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                  </div>
                  <CardContent className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <Badge variant="outline" className="text-primary border-primary">{post.category}</Badge>
                      <h3 className="text-2xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="pt-6 flex justify-between items-center text-xs text-muted-foreground border-t border-secondary/5">
                      <div className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</div>
                      <Button variant="link" className="text-primary p-0 font-bold group-hover:translate-x-1 transition-transform">Read Article <ArrowRight size={14} className="ml-1" /></Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
             <Button size="lg" variant="outline" className="rounded-full px-12 py-6 border-primary/20 hover:bg-primary/5 text-primary font-bold">Load More Articles</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
