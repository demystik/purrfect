
"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Heart, ShieldCheck, TrendingUp, Info } from "lucide-react";

export default function DonatePage() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(20);

  const tiers = [
    { amount: 10, impact: "Provides 5 nutritious meals for a rescued animal." },
    { amount: 20, impact: "Covers a full medical check-up and basic vaccinations." },
    { amount: 50, impact: "Funds a rescue mission for an animal in urgent need." },
    { amount: 100, impact: "Provides 2 weeks of shelter, warmth, and specialized care." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-secondary py-24 text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-headline font-bold">Your Kindness <span className="text-primary">Saves Lives</span></h1>
            <p className="text-xl opacity-80 leading-relaxed">
              Purrfect Whiskers relies 100% on the generosity of animal lovers. Your gift directly funds the rescue, care, and rehoming of cats and dogs in the UK.
            </p>
          </div>
        </section>

        <section className="py-20 -mt-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="rounded-[3rem] shadow-2xl overflow-hidden border-none">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 p-8 md:p-12 space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                      <span className={!isMonthly ? "font-bold text-secondary" : "text-muted-foreground"}>Single Gift</span>
                      <Switch checked={isMonthly} onCheckedChange={setIsMonthly} className="data-[state=checked]:bg-primary" />
                      <span className={isMonthly ? "font-bold text-secondary" : "text-muted-foreground"}>Monthly Giving</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {tiers.map((tier) => (
                        <button
                          key={tier.amount}
                          onClick={() => setSelectedAmount(tier.amount)}
                          className={`p-6 rounded-2xl border-2 transition-all text-center group ${
                            selectedAmount === tier.amount 
                              ? "border-primary bg-primary/5 text-primary" 
                              : "border-secondary/10 hover:border-primary/50"
                          }`}
                        >
                          <span className="block text-2xl font-bold">£{tier.amount}</span>
                          <span className="text-xs opacity-60">{isMonthly ? "/ month" : "once"}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-background rounded-2xl p-6 flex items-start gap-4 border border-primary/10">
                    <TrendingUp className="text-primary shrink-0" size={24} />
                    <p className="text-sm leading-relaxed">
                      <span className="font-bold block mb-1">Impact of your gift:</span>
                      {tiers.find(t => t.amount === selectedAmount)?.impact || "Select an amount to see your impact."}
                    </p>
                  </div>

                  <div className="space-y-6 pt-6">
                    <div className="flex items-start gap-3 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                      <Checkbox id="gift-aid" className="mt-1" />
                      <div className="space-y-2">
                        <Label htmlFor="gift-aid" className="text-base font-bold flex items-center gap-2">
                          Add Gift Aid (25% extra) <Badge variant="secondary" className="bg-accent text-white">UK Only</Badge>
                        </Label>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all my donations in that tax year it is my responsibility to pay any difference.
                        </p>
                      </div>
                    </div>
                    
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 py-8 text-xl rounded-2xl shadow-lg">
                      Donate £{selectedAmount} {isMonthly ? "Monthly" : "Today"}
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-background p-8 md:p-12 space-y-12 border-l border-primary/5">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-headline font-bold">Financial Transparency</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      At Purrfect Whiskers, we pride ourselves on being fully accountable to our supporters. Here is how your donation is spent:
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        { label: "Direct Animal Care", pct: "75%", color: "bg-primary" },
                        { label: "Rescue Operations", pct: "15%", color: "bg-accent" },
                        { label: "Public Education", pct: "10%", color: "bg-secondary" }
                      ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span>{stat.label}</span>
                            <span>{stat.pct}</span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className={`${stat.color} h-full`} style={{ width: stat.pct }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-12 border-t border-primary/5">
                    <div className="flex items-center gap-3 text-secondary font-bold">
                      <ShieldCheck className="text-accent" />
                      <span>Secure Payment</span>
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      All transactions are encrypted and secured. We never store your full payment details.
                    </p>
                    <div className="flex gap-4 pt-2 grayscale opacity-40">
                      <div className="w-12 h-8 bg-black rounded" />
                      <div className="w-12 h-8 bg-black rounded" />
                      <div className="w-12 h-8 bg-black rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
