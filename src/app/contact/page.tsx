
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to adopt, volunteer, or simply have a question about our work, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="rounded-[3rem] border-none shadow-2xl p-8 md:p-12">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="rounded-xl py-6" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl py-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="subject">I am inquiring about...</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl py-6">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adoption">Adoption Process</SelectItem>
                        <SelectItem value="volunteering">Volunteering Opportunities</SelectItem>
                        <SelectItem value="fostering">Becoming a Foster Carer</SelectItem>
                        <SelectItem value="donations">Donations & Support</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help..." className="rounded-xl min-h-[200px]" />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 py-8 text-lg rounded-2xl shadow-lg flex items-center gap-3">
                    Send Message <Send size={20} />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary rounded-[2.5rem] p-10 text-white space-y-10 shadow-xl">
                <h3 className="text-2xl font-headline font-bold">Our Headquarters</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-2xl text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Visit Us</p>
                      <p className="text-sm opacity-70">123 Whiskers Way, London,<br />SW1A 1AA, UK</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-2xl text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Call Us</p>
                      <p className="text-sm opacity-70">0800 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-2xl text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Operational Hours</p>
                      <p className="text-sm opacity-70">Mon - Fri: 9am - 6pm<br />Sat - Sun: 10am - 4pm</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 space-y-4">
                  <p className="text-xs opacity-60 uppercase tracking-widest font-bold">Find us on social</p>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">FB</div>
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">TW</div>
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">IG</div>
                  </div>
                </div>
              </div>

              <div className="h-64 rounded-[2.5rem] bg-muted relative overflow-hidden shadow-lg border-2 border-primary/5">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/5">
                   <div className="text-center">
                     <MapPin size={48} className="mx-auto text-primary mb-2 opacity-20" />
                     <p className="text-sm font-bold opacity-30 uppercase tracking-widest">Interactive Map</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
