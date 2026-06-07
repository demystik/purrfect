
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Heart, Users, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=70&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              fill 
              className="object-cover brightness-50" 
              alt="Team with dogs" 
              data-ai-hint="happy pet owner"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-[#F28C52]">The Hearts Behind the Paws</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-100 leading-relaxed font-light">
              We are a passionate collective of animal lovers, veterinarians, and volunteers dedicated to rewriting the stories of UK's abandoned pets.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:row gap-20 items-center">
              <div className="w-full lg:w-1/2 space-y-8">
                <Badge variant="outline" className="text-primary border-primary font-bold">Our Origin</Badge>
                <h2 className="text-4xl font-headline font-bold leading-tight">Born from a Dream of <span className="text-primary italic">Better Welfare</span>.</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Purrfect Whiskers started in a small garden shed in Derbyshire in 2012. Our founder, Eleanor Whiske, saw the rising number of pets being abandoned due to economic changes and decided to take a stand.
                  </p>
                  <p>
                    What began as a localized effort to rescue four stray cats has grown into a nationwide network of foster homes, partner clinics, and rehoming centers across the United Kingdom.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="h-64 rounded-[2rem] overflow-hidden shadow-xl"><Image src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={600} className="object-cover h-full" alt="Volunteer" /></div>
                  <div className="h-48 rounded-[2rem] overflow-hidden shadow-xl"><Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={400} className="object-cover h-full" alt="Rescued pet" /></div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 rounded-[2rem] overflow-hidden shadow-xl"><Image src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={400} className="object-cover h-full" alt="Dog care" /></div>
                  <div className="h-64 rounded-[2rem] overflow-hidden shadow-xl"><Image src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={600} className="object-cover h-full" alt="Kitten" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Analytics Dashboard */}
        <section className="py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl font-headline font-bold">Our Impact Since 2012</h2>
              <p className="opacity-70 max-w-xl mx-auto">Real numbers showing the progress of our mission across the UK.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, label: "Pets Rehomed", value: "1,248+" },
                { icon: Heart, label: "Active Volunteers", value: "520+" },
                { icon: Calendar, label: "Rescues Monthly", value: "25+" },
                { icon: Sparkles, label: "Happy Endings", value: "100%" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-center space-y-4 hover:bg-white/10 transition-colors">
                  <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mx-auto">
                    <stat.icon size={32} />
                  </div>
                  <div className="text-5xl font-headline font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest opacity-60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-background rounded-[3rem] p-12 space-y-6">
              <Badge className="bg-accent">Our Mission</Badge>
              <h3 className="text-3xl font-headline font-bold">To Protect and Serve.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Purrfect Whiskers exists to rescue, rehabilitate, and rehome vulnerable cats and dogs while promoting responsible pet care through education, community support, and compassionate action. We are committed to giving every animal a second chance at a safe, healthy, and loving life.
              </p>
            </div>
            <div className="bg-secondary p-12 rounded-[3rem] text-white space-y-6">
              <Badge className="bg-primary">Our Vision</Badge>
              <h3 className="text-3xl font-headline font-bold text-[#F28C52]">A World of Respect.</h3>
              <p className="opacity-80 leading-relaxed">
                To build a world where every cat and dog is valued, protected, and given the opportunity to thrive in a loving home.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
