import { HeartHandshake, ArrowRight, ShieldCheck, CreditCard, Banknote } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Donate() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop" 
            alt="Supporting education" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <HeartHandshake className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Support Our Mission
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">
            Your generous contribution helps us empower educators and transform the learning experience for children across Africa.
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-900 mb-6">
                Why Your Support Matters
              </h2>
              <div className="space-y-6 text-lg text-primary-800 leading-relaxed">
                <p>
                  At EduSHIFT Learning, we believe that an investment in an educator is an investment in hundreds of children. When you donate, you are directly funding training, mentorship, and resources for teachers who are on the front lines of shaping the next generation.
                </p>
                <p>
                  We aim to see no educator left behind. Your donations help us subsidize training costs, provide necessary materials, and expand our reach to underserved communities.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100 text-center">
                <div className="text-4xl font-bold text-accent-500 font-heading mb-2">100%</div>
                <p className="text-sm font-medium text-primary-900">Of donations go directly to program execution</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100 text-center">
                <ShieldCheck className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                <p className="text-sm font-medium text-primary-900">Secure & Transparent Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-900 mb-4">Ways to Give</h2>
            <p className="text-lg text-muted-foreground">Choose the method that works best for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Direct Bank Transfer */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-primary-100 shadow-sm relative overflow-hidden group hover:border-primary-300 transition-colors">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-700 mb-6">
                <Banknote className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary-900 mb-4">Direct Bank Transfer</h3>
              <p className="text-primary-800 mb-6">
                You can make a direct deposit to our organizational bank account.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center border-b border-primary-100 pb-2">
                  <span className="text-primary-600">Bank:</span>
                  <span className="font-semibold text-primary-900">Guaranty Trust Bank (GTB)</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary-100 pb-2">
                  <span className="text-primary-600">Account Name:</span>
                  <span className="font-semibold text-primary-900">EduSHIFT Learning</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600">Account No:</span>
                  <span className="font-bold text-accent-600 text-base">0123456789</span>
                </div>
              </div>
            </div>

            {/* Online Payment */}
            <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CreditCard className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent-400 mb-6">
                  <CreditCard className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">Donate Online</h3>
                <p className="text-primary-100 mb-8">
                  Make a secure online donation using your debit/credit card from anywhere in the world.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                    Donate Once <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                    Become a Monthly Donor
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
