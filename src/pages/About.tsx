import { Target, Eye, Heart, BookOpen, Users, Lightbulb } from "lucide-react";

export function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop" 
            alt="African adults learning together" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
            About EduSHIFT Learning
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            We are dedicated to transforming education in Africa through innovative training and development for professionals and educators.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="bg-primary-50 rounded-3xl p-10 md:p-14 border border-primary-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 transform transition-transform group-hover:scale-110">
                <Target className="w-32 h-32 text-primary-900" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold font-heading text-primary-900 mb-6">Our Mission</h2>
                <p className="text-lg text-primary-800 leading-relaxed">
                  To empower African professionals and educators with world-class skills, leveraging the MUMS Framework™ to foster continuous learning, drive innovation, and build a sustainable future for our communities.
                </p>
              </div>
            </div>

            <div className="bg-secondary-500 text-white rounded-3xl p-10 md:p-14 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 transform transition-transform group-hover:scale-110">
                <Eye className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center text-white mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-6">Our Vision</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  To become the leading catalyst for educational and professional excellence in Africa, creating a continent where every individual has access to transformative learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-24 bg-gray-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do, from our training programs to our community partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We constantly seek new and better ways to deliver impactful learning experiences."
              },
              {
                icon: Heart,
                title: "Empathy",
                description: "We center our programs around the real needs and contexts of our learners."
              },
              {
                icon: BookOpen,
                title: "Excellence",
                description: "We maintain the highest standards in our curriculum and delivery methods."
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe in the power of collaboration and shared growth."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-900 mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?q=80&w=2574&auto=format&fit=crop" 
                  alt="Team collaborating" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-900/10" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border w-64 hidden md:block">
                <div className="text-4xl font-bold font-heading text-accent-500 mb-2">10+</div>
                <div className="text-sm font-medium text-primary-900 uppercase tracking-wider">Years of Impact</div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  EduSHIFT Learning was born from a simple observation: while talent is distributed equally across Africa, opportunity is not. We recognized a critical gap in professional development and educational training that was holding back brilliant minds.
                </p>
                <p>
                  What started as a small initiative in Dutse, Jigawa State, Nigeria, has grown into a comprehensive framework for professional growth. We developed the MUMS Framework™ through years of on-the-ground experience, working directly with educators and professionals.
                </p>
                <p>
                  Today, we stand as a beacon of transformative education, partnering with schools, organizations, and individuals to unlock potential and drive sustainable progress across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
