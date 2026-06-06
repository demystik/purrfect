
"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, MapPin, Heart, Info } from "lucide-react";
import Image from "next/image";
import { aiPetCompatibilityMatcher, type AiPetCompatibilityMatcherOutput } from "@/ai/flows/ai-pet-compatibility-matcher";

export default function MatcherPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AiPetCompatibilityMatcherOutput | null>(null);

  const [formData, setFormData] = useState({
    homeEnvironment: "",
    activityLevel: "",
    hasChildren: false,
    hasOtherPets: false,
    petSizePreference: "",
    petTemperamentPreference: "",
    experienceWithPets: "",
    timeAlone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await aiPetCompatibilityMatcher(formData);
      setResults(output);
      window.scrollTo({ top: document.getElementById("results")?.offsetTop || 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1 text-sm font-bold uppercase tracking-widest">Powered by PurrfectAI</Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-bold">Find Your <span className="text-primary italic">Soulmate</span>.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your lifestyle, and our expert AI system will match you with the pets in our care that fit your home perfectly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="rounded-[2.5rem] border-primary/5 shadow-2xl overflow-hidden">
              <div className="bg-primary p-8 text-white text-center">
                <Sparkles className="mx-auto mb-4" size={32} />
                <h2 className="text-2xl font-headline font-bold">The Compatibility Quiz</h2>
                <p className="opacity-80">It only takes 2 minutes to find a lifelong friend.</p>
              </div>
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="home">Your Home Environment</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, homeEnvironment: v })}>
                      <SelectTrigger className="rounded-xl border-secondary/10 py-6">
                        <SelectValue placeholder="Describe your home" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small apartment">Small Apartment</SelectItem>
                        <SelectItem value="busy city apartment">Busy City Apartment</SelectItem>
                        <SelectItem value="quiet suburban home">Quiet Suburban Home</SelectItem>
                        <SelectItem value="house with a large garden">House with a Large Garden</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="activity">Typical Activity Level</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, activityLevel: v })}>
                      <SelectTrigger className="rounded-xl border-secondary/10 py-6">
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Mostly Sedentary</SelectItem>
                        <SelectItem value="moderately active with daily walks">Moderately Active (Daily Walks)</SelectItem>
                        <SelectItem value="very active with regular hikes">Very Active (Hikes & Running)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="experience">Pet Experience</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, experienceWithPets: v })}>
                      <SelectTrigger className="rounded-xl border-secondary/10 py-6">
                        <SelectValue placeholder="Tell us your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time owner">First-time Owner</SelectItem>
                        <SelectItem value="experienced dog owner">Experienced Dog Owner</SelectItem>
                        <SelectItem value="grew up with cats">Grew up with Cats</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="timeAlone">Daily Time Alone (Hours)</Label>
                    <Input 
                      placeholder="e.g. 4 hours" 
                      className="rounded-xl border-secondary/10 py-6"
                      onChange={(e) => setFormData({ ...formData, timeAlone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Preferred Size</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, petSizePreference: v })}>
                      <SelectTrigger className="rounded-xl border-secondary/10 py-6">
                        <SelectValue placeholder="Any size preference?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                        <SelectItem value="no preference">No Preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Temperament Preference</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, petTemperamentPreference: v })}>
                      <SelectTrigger className="rounded-xl border-secondary/10 py-6">
                        <SelectValue placeholder="What personality fits you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="calm and cuddly">Calm & Cuddly</SelectItem>
                        <SelectItem value="playful and energetic">Playful & Energetic</SelectItem>
                        <SelectItem value="independent">Independent</SelectItem>
                        <SelectItem value="affectionate and social">Affectionate & Social</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox id="children" onCheckedChange={(c) => setFormData({ ...formData, hasChildren: !!c })} />
                    <Label htmlFor="children" className="font-normal">I have children in my household</Label>
                  </div>

                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox id="otherPets" onCheckedChange={(c) => setFormData({ ...formData, hasOtherPets: !!c })} />
                    <Label htmlFor="otherPets" className="font-normal">I have other pets at home</Label>
                  </div>

                  <div className="md:col-span-2 pt-8">
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 py-8 text-lg rounded-2xl shadow-lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={24} /> Analyzing Compatibility...
                        </>
                      ) : (
                        "Find My Perfect Match"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {results && (
            <div id="results" className="mt-32 space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Potential Matches</h2>
                <p className="text-muted-foreground">Based on your lifestyle, we think these sweet souls would be a perfect fit.</p>
              </div>
              
              <div className="grid grid-cols-1 md:row lg:grid-cols-3 gap-8">
                {results.recommendations.map((pet, idx) => (
                  <Card key={idx} className="group rounded-[2rem] overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all">
                    <div className="relative h-64">
                      <Image src={pet.imageUrl} fill alt={pet.petName} className="object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent/90 backdrop-blur-md px-3 py-1">Best Match</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-headline font-bold">{pet.petName}</h3>
                          <p className="text-sm text-muted-foreground">{pet.breed} • {pet.age}</p>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full text-primary">
                          <Heart size={20} fill="currentColor" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                        <MapPin size={16} className="text-primary" />
                        {pet.location}, UK
                      </div>
                      <div className="bg-background p-4 rounded-2xl border border-secondary/5 text-sm leading-relaxed">
                        <div className="flex items-center gap-2 font-bold text-secondary mb-2">
                          <Info size={16} className="text-primary" /> Why they match:
                        </div>
                        {pet.compatibilityReason}
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 rounded-xl">Adopt {pet.petName}</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
