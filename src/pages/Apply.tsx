import { ClipboardList, ArrowRight, User, Mail, Phone, BookOpen, GraduationCap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Apply() {
  return (
    <div className="bg-primary-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <ClipboardList className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-4">Apply Now</h1>
          <p className="text-lg text-primary-800/80 max-w-2xl mx-auto">
            Take the first step towards transforming your educational journey. Apply for our Fellowship Program or register for upcoming Training sessions.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary-100">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Program Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-primary-900 border-b pb-2">1. Select Program</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative flex cursor-pointer rounded-xl border bg-white p-4 shadow-sm focus:outline-none hover:border-primary-300 transition-colors">
                  <input type="radio" name="program" value="fellowship" className="peer sr-only" defaultChecked />
                  <div className="peer-checked:border-accent-500 peer-checked:bg-accent-50 absolute inset-0 rounded-xl border-2 border-transparent transition-all"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">Fellowship Program</h3>
                      <p className="text-sm text-primary-800/70">Intensive mentorship and training.</p>
                    </div>
                  </div>
                </label>
                
                <label className="relative flex cursor-pointer rounded-xl border bg-white p-4 shadow-sm focus:outline-none hover:border-primary-300 transition-colors">
                  <input type="radio" name="program" value="training" className="peer sr-only" />
                  <div className="peer-checked:border-accent-500 peer-checked:bg-accent-50 absolute inset-0 rounded-xl border-2 border-transparent transition-all"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">General Training</h3>
                      <p className="text-sm text-primary-800/70">Specific workshops and seminars.</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-primary-900 border-b pb-2">2. Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-primary-900">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      id="fullName" 
                      className="w-full pl-10 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary-900">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full pl-10 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-primary-900">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full pl-10 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-primary-900">Location (City, State)</label>
                  <input 
                    type="text" 
                    id="location" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Dutse, Jigawa State"
                  />
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-primary-900 border-b pb-2">3. Professional Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="institution" className="text-sm font-medium text-primary-900">Current Institution/School</label>
                  <input 
                    type="text" 
                    id="institution" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="School Name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-primary-900">Current Role</label>
                  <input 
                    type="text" 
                    id="role" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="e.g. Science Teacher, Principal"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="motivation" className="text-sm font-medium text-primary-900">Why do you want to join this program?</label>
                  <textarea 
                    id="motivation" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your goals and expectations..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className={cn(buttonVariants({ size: "lg" }), "w-full md:w-auto bg-accent-500 hover:bg-accent-600 text-white gap-2 font-bold px-12 py-4 h-auto")}
              >
                Submit Application <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
