import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative border-t bg-primary-50 text-primary-900 py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
          alt="African professionals in workshop" 
          className="w-full h-full object-cover opacity-5"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="inline-block w-40">
              <Logo variant="default" className="w-full h-auto" />
            </Link>
            <p className="text-sm text-primary-800/80 leading-relaxed mt-2">
              Transforming African education through inquiry, leadership, and community-driven research solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-primary-900">Quick Links</h3>
            <ul className="space-y-3 text-sm text-primary-800/80">
              <li><Link to="/about" className="hover:text-secondary-500 transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-secondary-500 transition-colors">Events</Link></li>
              <li><Link to="/fellowship" className="hover:text-secondary-500 transition-colors">Fellowship Program</Link></li>
              <li><Link to="/training" className="hover:text-secondary-500 transition-colors">Training</Link></li>
              <li><Link to="/partners" className="hover:text-secondary-500 transition-colors">Partnerships</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-primary-900">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm text-primary-800/80">
              <p>No 1 Lane 6, Bayan Katanga Gidan Radio G9 Area,</p>
              <p>Dutse, Jigawa State, Nigeria.</p>
              <p>+234 806 548 4653</p>
              <p><a href="mailto:edushiftlearning@gmail.com" className="hover:text-secondary-500 transition-colors">edushiftlearning@gmail.com</a></p>
            </address>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-primary-900">Newsletter</h3>
            <p className="text-sm text-primary-800/80 mb-4">Stay updated with our latest shifts in African education.</p>
            <form className="flex flex-col space-y-2" action="mailto:edushiftlearning@gmail.com" method="POST" encType="text/plain">
              <Input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="bg-white border-primary-200 text-primary-900 placeholder:text-gray-400 focus-visible:ring-accent-500 rounded-sm"
              />
              <Button type="submit" className="bg-accent-500 text-primary-900 hover:bg-accent-400 font-semibold rounded-sm hover:-translate-y-0.5 transition-all shadow-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-200 text-center text-sm text-primary-800/60">
          <p>&copy; {new Date().getFullYear()} EduSHIFT Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
