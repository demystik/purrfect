
import Link from "next/link";
import { PawPrint, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <PawPrint size={20} />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-white">
              Purrfect Whiskers
            </span>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Registered Charity in England & Wales (No. 1234567). Dedicated to the rescue, rehabilitation, and rehoming of cats and dogs across the United Kingdom.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline font-semibold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/adopt" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Available Pets</Link></li>
            <li><Link href="/match" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">AI Compatibility Tool</Link></li>
            <li><Link href="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Our Story</Link></li>
            <li><Link href="/donate" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Ways to Give</Link></li>
            <li><Link href="/blog" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Pet Care Tips</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-semibold mb-6 text-white">Support Us</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Volunteer</Link></li>
            <li><Link href="/donate" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Monthly Giving</Link></li>
            <li><Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Foster a Pet</Link></li>
            <li><Link href="/donate" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Gift Aid Info</Link></li>
          </ul>
        </div>

        <div className="space-y-6 text-sm">
          <h4 className="font-headline font-semibold mb-6 text-white">Contact Us</h4>
          <div className="flex items-start gap-3 opacity-80">
            <MapPin size={18} className="shrink-0 text-primary" />
            <span>123 Whiskers Way, London,<br />SW1A 1AA, United Kingdom</span>
          </div>
          <div className="flex items-center gap-3 opacity-80">
            <Phone size={18} className="shrink-0 text-primary" />
            <span>0800 123 4567</span>
          </div>
          <div className="flex items-center gap-3 opacity-80">
            <Mail size={18} className="shrink-0 text-primary" />
            <span>hello@purrfectwhiskers.org.uk</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} Purrfect Whiskers. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}
