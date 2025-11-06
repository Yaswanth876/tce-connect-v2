import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import { BottomNav } from "@/components/BottomNav";
import { Sidebar } from "@/components/Sidebar";

const todaysEvents = [
  {
    title: "AI Workshop Series",
    date: "Today, 2:00 PM",
    venue: "CSE Lab 1",
    department: "CSE",
    type: "technical" as const,
  },
  {
    title: "Cultural Fest Auditions",
    date: "Today, 4:00 PM",
    venue: "Main Auditorium",
    department: "Cultural Committee",
    type: "cultural" as const,
  },
  {
    title: "Basketball Tournament",
    date: "Today, 5:00 PM",
    venue: "Sports Complex",
    department: "Sports Committee",
    type: "sports" as const,
  },
];

const upcomingEvents = [
  {
    title: "Hackathon 2025",
    date: "Jan 25, 2025",
    venue: "Innovation Lab",
    department: "IT",
    type: "technical" as const,
  },
  {
    title: "Annual Day Celebrations",
    date: "Jan 28, 2025",
    venue: "Main Ground",
    department: "Student Affairs",
    type: "cultural" as const,
  },
  {
    title: "Guest Lecture on Quantum Computing",
    date: "Jan 30, 2025",
    venue: "Seminar Hall",
    department: "ECE",
    type: "technical" as const,
  },
];

const Home = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        {/* Header */}
        <header className="bg-primary text-primary-foreground p-4 lg:p-6 sticky top-0 z-10 shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Welcome to TCE-Connect 👋</h1>
            <p className="text-sm opacity-90">Discover your campus events</p>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-light transition-colors"
          >
            <Bell className="h-5 w-5" />
          </Button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
        {/* Today's Events */}
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full"></span>
            Today's Events
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {todaysEvents.map((event, index) => (
              <EventCard key={index} {...event} horizontal />
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full"></span>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
