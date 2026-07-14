import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, TrendingUp, Users, Target } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-primary-900 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl font-heading"
          >
            Empowering African Education
            <span className="block text-accent-500 mt-2">Shift Mindsets. Build Solutions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
          >
            Transforming teachers into research leaders and students into problem-solvers across Africa. We're building the future of innovation, one classroom at a time.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/fellowship" className={cn(buttonVariants({ size: "lg" }), "bg-accent-500 text-primary-900 hover:bg-accent-400 font-semibold hover:-translate-y-0.5 transition-all shadow-sm")}>
              Apply for Fellowship <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/partners" className={cn(buttonVariants({ size: "lg" }), "bg-secondary-500 text-white hover:bg-secondary-600 hover:-translate-y-0.5 transition-all shadow-sm")}>
              Partner With Us
            </Link>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop" 
            alt="African adults in formal training" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-secondary-500)_0%,transparent_60%)] opacity-40 mix-blend-multiply" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary-900 font-heading">500+</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Teachers Impacted</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary-900 font-heading">5k</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Students Reached</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary-900 font-heading">5</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Countries</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary-900 font-heading">85%</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-heading mb-4">The Problem in African Education</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Despite Africa's immense potential, many education systems remain rooted in outdated models that don't prepare the next generation for a complex, tech-driven world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border"
            >
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Rote Learning</h3>
              <p className="text-muted-foreground">
                Passive memorization dominates classrooms, stifling critical thinking and creative expression.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border"
            >
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Teacher Isolation</h3>
              <p className="text-muted-foreground">
                Educators lack support networks and professional leadership opportunities to innovate.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Curriculum Gap</h3>
              <p className="text-muted-foreground">
                Traditional education often fails to equip students with real-world problem-solving skills.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 bg-primary-900 text-white rounded-3xl p-8 text-center max-w-3xl mx-auto shadow-xl">
            <h3 className="text-xl font-medium mb-2">The Economic Impact</h3>
            <p className="text-gray-300 mb-6">Over 100 million youth in Africa enter the workforce without industry-relevant skills every decade.</p>
            <div className="text-5xl font-bold text-secondary-500 font-heading">-$500B</div>
            <p className="text-sm text-gray-400 mt-2 uppercase tracking-wider">Potential GDP Loss</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-heading mb-4">The EduSHIFT Solution</h2>
                <p className="text-lg text-muted-foreground">
                  Our multi-layered approach addresses the root causes of educational stagnation by empowering those closest to the classroom.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Inquiry-Based Learning", desc: "We move from 'what to think' to 'how to think' using research-led pedagogical frameworks." },
                  { title: "Teacher Fellowship", desc: "Intensive training that turns classroom teachers into innovative research leaders." },
                  { title: "Problem-Solving Hubs", desc: "Collaborative spaces where students tackle real-world community challenges." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold">
                        {i+1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-900">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 rounded-3xl p-8 md:p-12 border relative overflow-hidden text-white shadow-xl">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2664&auto=format&fit=crop" 
                  alt="Teacher writing on board" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-900/90 mix-blend-multiply" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-heading mb-4">The MUMS Framework™</h3>
                <p className="mb-8 text-primary-100">
                  We don't just train teachers; we cultivate a mindset of continuous improvement. The MUMS framework is our roadmap for creating sustainable educational transformation.
                </p>
                
                <div className="flex flex-col gap-4">
                  {[
                    "Mindset Shift",
                    "Unwavering Inquiry",
                    "Model Solutions",
                    "Social Impact"
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-white/20 font-medium flex items-center gap-3">
                      <Lightbulb className="w-5 h-5 text-accent-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-heading mb-4">Voices of Shift</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Hear from the educators leading the transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left border">
              <p className="text-lg italic text-muted-foreground mb-6">
                "The EduSHIFT fellowship didn't just teach me new methods; it gave me the courage to let my students lead. My classroom is now a lab for innovation."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop" 
                  alt="Sarah Mensah" 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary-900">Sarah Mensah</h4>
                  <p className="text-sm text-muted-foreground">Science Teacher, Ghana</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left border">
              <p className="text-lg italic text-muted-foreground mb-6">
                "Partnering with EduSHIFT has allowed us to witness firsthand the power of inquiry-based learning. The results in student engagement are unparalleled."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150&auto=format&fit=crop" 
                  alt="David Okoro" 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary-900">David Okoro</h4>
                  <p className="text-sm text-muted-foreground">Principal, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6 max-w-3xl mx-auto line-height-tight">
            Ready to lead the shift in your classroom?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of educators across Africa building the next generation of problem-solvers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className={cn(buttonVariants({ size: "lg" }), "bg-accent-500 text-primary-900 hover:bg-accent-400 font-semibold hover:-translate-y-0.5 transition-all shadow-sm")}>
              Apply for 2024 Fellowship
            </Link>
            <Link to="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-secondary-500 text-white hover:bg-secondary-600 hover:-translate-y-0.5 transition-all shadow-sm")}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
