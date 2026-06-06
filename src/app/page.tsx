
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Sparkles, ShieldCheck, Home as HomeIcon } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-dog');
  const storyImg = PlaceHolderImages.find(img => img.id === 'bella-story');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] py-24 flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroImg?.imageUrl || ""} 
              alt="Happy dog" 
              fill 
              className="object-cover brightness-75 scale-105"
              priority
              data-ai-hint="happy dog"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl space-y-6 text-white animate-fade-in">
              <Badge className="bg-primary hover:bg-primary px-4 py-1 text-sm font-medium">UK Animal Welfare Initiative</Badge>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight text-white">
                Every Paw Deserves a <span className="text-primary italic">Second Chance</span>.
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed max-w-xl">
                Purrfect Whiskers is a UK-wide rescue initiative dedicated to finding loving homes for stray and abandoned dogs and cats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-7 rounded-xl shadow-lg">
                  <Link href="/adopt" className="flex items-center gap-2">
                    Meet Our Pets <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white/60 text-white hover:bg-white hover:text-secondary text-lg px-8 py-7 rounded-xl backdrop-blur-md bg-white/5 transition-all">
                  <Link href="/match">Find Your Perfect Match</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Compassion in Action</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                We believe that every animal has a story worth telling and a life worth saving. From the bustling streets of London to the quiet corners of the Lake District, our team works tirelessly to rescue, rehabilitate, and rehome those in need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Expert Care", desc: "Full veterinary checks, microchipping, and behavioral assessments for every animal." },
                { icon: Heart, title: "Loving Fosters", desc: "A network of dedicated UK foster homes providing warmth and safety while waiting for adoption." },
                { icon: HomeIcon, title: "Successful Matchmaking", desc: "Tailored adoption process ensuring a perfect lifelong bond between pet and owner." }
              ].map((feature, i) => (
                <div key={i} className="bg-background p-8 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl group">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adoption Quick Links */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/adopt?species=dog" className="group relative h-96 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/seed/home-dog/800/600" fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Adopt a Dog" data-ai-hint="happy dog" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <h3 className="text-3xl font-headline font-bold">Adopt a Dog</h3>
                <p className="opacity-80">Find your new best friend and hiking partner.</p>
                <div className="flex items-center gap-2 pt-2 text-primary group-hover:translate-x-2 transition-transform">
                  Browse Dogs <ArrowRight size={18} />
                </div>
              </div>
            </Link>
            <Link href="/adopt?species=cat" className="group relative h-96 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/seed/home-cat/800/600" fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Adopt a Cat" data-ai-hint="cute cat" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <h3 className="text-3xl font-headline font-bold">Adopt a Cat</h3>
                <p className="opacity-80">Welcome a gentle soul into your quiet home.</p>
                <div className="flex items-center gap-2 pt-2 text-primary group-hover:translate-x-2 transition-transform">
                  Browse Cats <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Rescue Story Spotlight */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image 
                    src={storyImg?.imageUrl || ""} 
                    width={800} 
                    height={600} 
                    alt="Bella's Story" 
                    className="object-cover"
                    data-ai-hint="happy rescued dog"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <Badge variant="outline" className="text-primary border-primary">Success Story</Badge>
                <h2 className="text-4xl md:text-5xl font-headline font-bold">From Stray to Beloved Companion: Bella's Journey</h2>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "When we found Bella wandering in the Manchester rain, she was cold, hungry, and terrified of human touch. Today, she's the queen of her new garden in Surrey, never leaving her owner's side."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bella is just one of the thousands of animals who found their forever families through Purrfect Whiskers. Her transformation is a testament to the power of love, patience, and community support.
                </p>
                <Button variant="link" className="text-primary font-bold p-0 flex items-center gap-2 text-lg">
                  Read More Stories <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Banner */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-secondary rounded-[3rem] p-8 md:p-16 text-center text-secondary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Heart size={200} fill="currentColor" />
              </div>
              <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                <Sparkles className="mx-auto text-primary" size={48} />
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">Your Help Saves Lives.</h2>
                <p className="text-lg opacity-80">
                  We receive no government funding. Every bowl of food, every medical check, and every rescue mission is powered entirely by donors like you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-12 py-6 text-lg">
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 py-6 text-lg">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
