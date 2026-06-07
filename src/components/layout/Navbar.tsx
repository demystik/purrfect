
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={18}
            className="object-contain"
          />
          {/* <div className="bg-primary p-1.5 rounded-lg text-white transition-transform group-hover:scale-110">
            <PawPrint size={24} />
          </div> */}
          <span className="font-headline font-bold text-xl tracking-tight text-secondary">
            Purrfect <span className="text-primary">Whiskers</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          <Link href="/adopt" className="text-sm font-medium hover:text-primary transition-colors">Adoption</Link>
          <Link href="/match" className="text-sm font-medium hover:text-primary transition-colors">Find Your Match</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          <div className="flex items-center gap-3 pl-4 border-l border-primary/20">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link href="/donate">Donate</Link>
            </Button>
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
              <Link href="/adopt">Adopt Now</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-secondary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-6 gap-6">
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/adopt" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Adoption</Link>
          <Link href="/match" className="text-lg font-medium text-primary font-bold" onClick={() => setIsOpen(false)}>AI Pet Matcher</Link>
          <Link href="/blog" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="flex flex-col gap-4 mt-4">
            <Button asChild className="w-full bg-primary py-6 text-lg"><Link href="/donate">Donate</Link></Button>
            <Button asChild className="w-full bg-accent py-6 text-lg"><Link href="/adopt">Adopt Now</Link></Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
