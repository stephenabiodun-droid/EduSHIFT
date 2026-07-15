import { Mail, Phone, MapPin, Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <div className="bg-primary-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-4">Contact Us</h1>
          <p className="text-lg text-primary-800/80 max-w-2xl mx-auto">
            Have questions about our programs, want to partner with us, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-3xl"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 relative z-10">Get in Touch</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                  <address className="not-italic text-primary-100">
                    No 1 Lane 6, Bayan Katanga Gidan Radio<br />
                    G9 Area, Dutse,<br />
                    Jigawa State, Nigeria.
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                  <p className="text-primary-100">+234 806 548 4653</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                  <p className="text-primary-100">edushiftlearning@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary-100">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-8">Send us a Message</h2>
            
            <form className="space-y-6" action="mailto:edushiftlearning@gmail.com" method="POST" encType="text/plain">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-primary-900">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-primary-900">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary-900">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-primary-900">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary-900">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={cn(buttonVariants({ size: "lg" }), "w-full bg-accent-500 hover:bg-accent-600 text-white gap-2 font-bold")}
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
