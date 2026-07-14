import { 
  Laptop, 
  BrainCircuit, 
  Globe2, 
  HeartHandshake, 
  Bot, 
  Briefcase, 
  UserPlus, 
  Users,
  CalendarDays,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export function Training() {
  const topics = [
    {
      icon: Laptop,
      title: "Teaching Methodologies",
      description: "Modern, student-centered approaches that move beyond traditional rote learning to foster critical thinking."
    },
    {
      icon: BrainCircuit,
      title: "Technology Integration",
      description: "Seamlessly incorporating digital tools into the curriculum to enhance learning outcomes and engagement."
    },
    {
      icon: Globe2,
      title: "Cultural Shift",
      description: "Transforming school culture to promote collaboration, continuous improvement, and a growth mindset."
    },
    {
      icon: HeartHandshake,
      title: "Empathy in Education",
      description: "Building emotionally intelligent classrooms where students feel seen, heard, and supported."
    },
    {
      icon: Bot,
      title: "AI in Education",
      description: "Leveraging artificial intelligence tools responsibly to personalize learning and streamline administrative tasks."
    },
    {
      icon: Briefcase,
      title: "Edupreneurship",
      description: "Empowering educators to think like entrepreneurs, innovating within their schools and communities."
    },
    {
      icon: UserPlus,
      title: "Teacher as a Mentor",
      description: "Shifting the role of the teacher from a mere knowledge dispenser to a guide and life mentor."
    },
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Creating accessible learning environments that cater to diverse learning needs and backgrounds."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2787&auto=format&fit=crop" 
            alt="Educators in a training workshop" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
            Training & Development
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-10">
            Driving a mindset shift through regular, high-impact training sessions for educators across diverse themes.
          </p>
          <Link 
            to="/events" 
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            <CalendarDays className="w-5 h-5" /> View Training Schedule
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-900 mb-6">
            Catalyzing a Mindset Shift
          </h2>
          <p className="text-lg text-primary-800 leading-relaxed mb-8">
            We organize regular, intensive training programs designed to challenge the status quo and introduce innovative perspectives. Our goal is to catalyze a profound mindset shift among educators, equipping them to navigate the complexities of modern education and deliver transformative learning experiences.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-900 mb-6">Our Training Themes</h2>
            <p className="text-lg text-muted-foreground">
              We cover a wide spectrum of vital topics tailored to the evolving needs of the African educational landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-6">
                  <topic.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-900 mb-3">{topic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
            alt="Professionals in a workshop" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6 max-w-2xl mx-auto line-height-tight">
            Ready to upgrade your skills?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Our training schedule is regularly updated. Check our Events page to find upcoming sessions and register.
          </p>
          <Link 
            to="/events" 
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            See Upcoming Events <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
