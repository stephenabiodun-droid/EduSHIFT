import { BookOpen, Users, Lightbulb, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Fellowship() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop" 
            alt="Educators collaborating" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
            EduSHIFT Fellowship Program
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-10">
            Empowering educators through mentorship, modern teaching methodologies, and a commitment to excellence.
          </p>
          <Link 
            to="/apply" 
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Apply for Next Cohort <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-900 mb-6">
                Cultivating Excellence in Education
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  We organize periodic fellowship programs designed specifically to mentor educators on the best practices and modern approaches to teaching. 
                </p>
                <p>
                  Our goal is to instill a mindset of excellence, equipping teachers with the tools and strategies they need to reproduce the same level of excellence in the students they teach. By transforming the educator, we transform the entire classroom experience.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Intensive mentorship from experienced educational leaders",
                    "Hands-on training in modern, student-centered methodologies",
                    "Collaborative peer-learning and network building",
                    "Actionable strategies for classroom management and engagement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
                      <span className="text-primary-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                  alt="Mentorship session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary-500 text-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <Trophy className="w-12 h-12 mb-4 text-white" />
                <p className="font-bold text-xl font-heading">
                  "Excellence in teaching leads to excellence in learning."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="py-20 md:py-24 bg-primary-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-900 mb-6">Program Pillars</h2>
            <p className="text-lg text-muted-foreground">
              Our fellowship is built on core areas of focus that ensure holistic development for every participating educator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Modern Approaches",
                description: "Moving beyond rote memorization to foster critical thinking, creativity, and active student participation."
              },
              {
                icon: Users,
                title: "Mentorship",
                description: "Direct guidance from seasoned educators who provide feedback, support, and actionable insights."
              },
              {
                icon: BookOpen,
                title: "Best Practices",
                description: "Implementing globally recognized, evidence-based teaching strategies adapted for local contexts."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-primary-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center text-secondary-600 mb-6">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-primary-900 mb-4">{pillar.title}</h3>
                <p className="text-primary-800 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop" 
            alt="Professionals learning" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6 max-w-2xl mx-auto line-height-tight">
            Ready to elevate your teaching practice?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join a community of passionate educators committed to transforming the future of learning in Africa.
          </p>
          <Link 
            to="/apply" 
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
