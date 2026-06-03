import { MapPin, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Events() {
  return (
    <div className="bg-primary-50 min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our workshops, webinars, and fellowship sessions to shape the future of education in Africa.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Event Card */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-primary-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
            
            <div className="flex-1 space-y-4">
              <div className="flex gap-2 items-center">
                <span className="inline-flex items-center rounded-full bg-secondary-100 px-3 py-0.5 text-sm font-medium text-secondary-600">
                  Workshop
                </span>
                <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-0.5 text-sm font-medium text-primary-800">
                  Jigawa
                </span>
              </div>
              <h2 className="text-3xl font-bold font-heading text-primary-900">AI For Teachers Workshop</h2>
              <p className="text-xl text-primary-800/80 font-medium">Teaching Smarter, Not Harder</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-accent-500" />
                  <span>Thursday 4th June, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-accent-500" />
                  <span>1:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground sm:col-span-2">
                  <MapPin className="w-5 h-5 text-accent-500 shrink-0" />
                  <span>FUD America Windows, Jigawa</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
              <Link to="/register" className={cn(buttonVariants({ size: "lg" }), "bg-accent-500 text-primary-900 hover:bg-accent-400 font-semibold hover:-translate-y-0.5 transition-all shadow-sm w-full md:w-48")}>
                Register Now
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
