import { Building2, Landmark, GraduationCap, Users, Factory, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Partners() {
  const partnerTypes = [
    {
      icon: Building2,
      title: "Organizations",
      description: "NGOs and non-profits aligned with our vision for educational transformation."
    },
    {
      icon: GraduationCap,
      title: "Institutions",
      description: "Schools, colleges, and universities committed to upgrading their teaching methodologies."
    },
    {
      icon: Factory,
      title: "Industries",
      description: "Corporate partners providing resources, tools, and real-world context for educators."
    },
    {
      icon: Landmark,
      title: "Government Agencies",
      description: "Local and national bodies driving policy and systemic changes in education."
    },
    {
      icon: Users,
      title: "Individuals",
      description: "Passionate professionals, philanthropists, and thought leaders supporting our mission."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
            alt="Partnership meeting" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Handshake className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
            Our Partnerships
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-10">
            Collaborating across sectors to ensure no educator is left behind and every child is impacted.
          </p>
        </div>
      </section>

      {/* The Goal */}
      <section className="py-20 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-900 mb-6">
            Why We Partner
          </h2>
          <p className="text-xl text-primary-800 leading-relaxed mb-8">
            Our goal is to see <span className="font-bold text-accent-600">no educator left behind</span>, ensuring all children within the continent are impacted with quality, modern education. We believe we cannot achieve this monumental task alone. It requires a broad, rich, and diverse coalition of partners working together.
          </p>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-900 mb-6">Who We Partner With</h2>
            <p className="text-lg text-muted-foreground">
              We collaborate with a wide array of stakeholders to ensure a rich and broader reach across the continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {partnerTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-6">
                  <type.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-primary-900 mb-3">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop" 
            alt="Collaboration" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6 max-w-2xl mx-auto line-height-tight">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Are you ready to make a lasting impact on education in Africa? We are always looking for partners who share our vision.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Partner With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
