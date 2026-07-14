import { MapPin, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EventItem = {
  id: string;
  type: string;
  location: string;
  title: string;
  subtitle: string;
  dateStr: string; // ISO format YYYY-MM-DD for comparison
  dateDisplay: string;
  time: string;
  venue: string;
};

const eventsData: EventItem[] = [
  {
    id: "ai-for-teachers-1",
    type: "Workshop",
    location: "Jigawa",
    title: "AI For Teachers Workshop",
    subtitle: "Teaching Smarter, Not Harder",
    dateStr: "2026-06-04",
    dateDisplay: "Thursday 4th June, 2026",
    time: "1:00 PM",
    venue: "FUD America Windows, Jigawa",
  }
];

export function Events() {
  const currentDate = new Date();
  
  const upcomingEvents = eventsData.filter(event => new Date(event.dateStr) >= currentDate);
  const pastEvents = eventsData.filter(event => new Date(event.dateStr) < currentDate);

  const EventCard = ({ event, isPast }: { event: EventItem, isPast: boolean }) => (
    <div className={cn("bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-primary-100 flex flex-col md:flex-row gap-8 items-start md:items-center", isPast && "opacity-80")}>
      <div className="flex-1 space-y-4">
        <div className="flex gap-2 items-center">
          <span className="inline-flex items-center rounded-full bg-secondary-100 px-3 py-0.5 text-sm font-medium text-secondary-600">
            {event.type}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-0.5 text-sm font-medium text-primary-800">
            {event.location}
          </span>
        </div>
        <h2 className="text-3xl font-bold font-heading text-primary-900">{event.title}</h2>
        <p className="text-xl text-primary-800/80 font-medium">{event.subtitle}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-5 h-5 text-accent-500" />
            <span>{event.dateDisplay}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5 text-accent-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground sm:col-span-2">
            <MapPin className="w-5 h-5 text-accent-500 shrink-0" />
            <span>{event.venue}</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
        {isPast ? (
          <div className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold bg-gray-100 text-gray-500 cursor-not-allowed w-full md:w-48 shadow-sm">
            Event Closed
          </div>
        ) : (
          <Link to="/register" className={cn(buttonVariants({ size: "lg" }), "bg-accent-500 text-primary-900 hover:bg-accent-400 font-semibold hover:-translate-y-0.5 transition-all shadow-sm w-full md:w-48")}>
            Register Now
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-primary-50 min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 mb-4">Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our workshops, webinars, and fellowship sessions to shape the future of education in Africa.
          </p>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-6">Upcoming Events</h2>
            <div className="grid gap-8">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-6">Past Events</h2>
            <div className="grid gap-8">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
