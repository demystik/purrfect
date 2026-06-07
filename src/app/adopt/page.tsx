
"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, MapPin, PawPrint, ClipboardCheck, Users, Calendar } from "lucide-react";
import Image from "next/image";

const pets = [
  { id: 1, name: "Luna", species: "dog", breed: "Golden Retriever", age: "2 years", location: "Manchester", status: "Available", img: "https://images.unsplash.com/photo-1582456891925-a53965520520?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Oliver", species: "cat", breed: "British Shorthair", age: "4 years", location: "London", status: "Available", img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Buster", species: "dog", breed: "Border Collie", age: "Puppy", location: "Edinburgh", status: "Fostered", img: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Milo", species: "cat", breed: "Tabby", age: "1 year", location: "Bristol", status: "Available", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Daisy", species: "dog", breed: "Jack Russell", age: "Senior", location: "Cardiff", status: "Available", img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Smokey", species: "cat", breed: "Russian Blue Mix", age: "Kitten", location: "Belfast", status: "Available", img: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "Emily", species: "dog", breed: "Jack Russell", age: "Senior", location: "Cardiff", status: "Available", img: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function AdoptPage() {
  const [filterSpecies, setFilterSpecies] = useState("all");

  const filteredPets = filterSpecies === "all" ? pets : pets.filter(p => p.species === filterSpecies);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-background">
        {/* Step Visualizer */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">How Adoption Works</h1>
              <p className="text-muted-foreground text-lg">Our straightforward process ensures the perfect match for you and your new pet.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0" />
              {[
                { step: "01", title: "Application", icon: ClipboardCheck, desc: "Submit your details and tell us about your lifestyle and home environment." },
                { step: "02", title: "Home Check", icon: HomeIcon, desc: "A friendly volunteer will visit to ensure your home is safe and ready for a pet." },
                { step: "03", title: "Matching", icon: Heart, desc: "The exciting part! Spend time with your potential pet before making it official." }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                    <item.icon size={32} />
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest">Step {item.step}</div>
                  <h3 className="text-2xl font-headline font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directory Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:row justify-between items-center gap-8 mb-16">
              <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                <Search className="text-primary" /> Meet Our Residents
              </h2>
              <div className="flex gap-4 w-full md:w-auto">
                <Select onValueChange={setFilterSpecies}>
                  <SelectTrigger className="w-full md:w-48 rounded-xl">
                    <SelectValue placeholder="All Species" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Animals</SelectItem>
                    <SelectItem value="dog">Dogs</SelectItem>
                    <SelectItem value="cat">Cats</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:row lg:grid-cols-3 gap-10">
              {filteredPets.map((pet) => (
                <Card key={pet.id} className="group overflow-hidden rounded-[2.5rem] border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-72">
                    <Image src={pet.img} fill alt={pet.name} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-6 left-6">
                      <Badge className={pet.status === "Available" ? "bg-accent/90" : "bg-primary/90"}>{pet.status}</Badge>
                    </div>
                    <button className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-lg">
                      <Heart size={20} />
                    </button>
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-headline font-bold">{pet.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{pet.breed}</p>
                      </div>
                      <Badge variant="outline" className="text-xs uppercase tracking-tighter">{pet.age}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pb-4 border-b border-secondary/5">
                      <MapPin size={16} className="text-primary" /> {pet.location}, UK
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 py-6 rounded-2xl group-hover:bg-primary transition-colors">Learn More About {pet.name}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & FAQs */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold">Adoption Requirements</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take our rehoming process seriously to ensure every pet goes to a safe and stable environment. Here are our baseline requirements for UK adopters:
              </p>
              <ul className="space-y-4">
                {[
                  "Must be over 18 years of age.",
                  "Permanent UK residency status.",
                  "A secure outdoor space (required for most dogs).",
                  "Consent from landlord (if renting).",
                  "Sufficient time to provide exercise, training, and socialization."
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full text-primary mt-1">
                      <ClipboardCheck size={16} />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-secondary/10">
                  <AccordionTrigger className="hover:text-primary font-bold">What are the adoption fees?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Our fees vary but typically range from £150 for cats to £350 for dogs. This covers their microchipping, vaccinations, spaying/neutering, and initial health checks.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-secondary/10">
                  <AccordionTrigger className="hover:text-primary font-bold">Can I adopt if I live in a flat?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes! While some pets require a garden, many (especially indoor cats and smaller dogs) thrive in apartments as long as they get adequate mental and physical stimulation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-secondary/10">
                  <AccordionTrigger className="hover:text-primary font-bold">How long does the process take?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    The process usually takes between 1 to 3 weeks depending on your availability for a home check and the matching process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
