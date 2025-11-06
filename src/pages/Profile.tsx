import { Calendar, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { Sidebar } from "@/components/Sidebar";

const registeredEvents = [
  {
    title: "AI Workshop Series",
    date: "Jan 20, 2025",
  },
  {
    title: "Hackathon 2025",
    date: "Jan 25, 2025",
  },
  {
    title: "Annual Day Celebrations",
    date: "Jan 28, 2025",
  },
];

const myClubs = [
  { name: "Tech Club", icon: "💻" },
  { name: "Photography Club", icon: "📸" },
];

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        {/* Header */}
        <header className="bg-primary text-primary-foreground p-6 lg:p-8">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-accent mx-auto flex items-center justify-center text-4xl">
              👨‍🎓
            </div>
            <div>
              <h1 className="text-xl font-bold">Student</h1>
              <p className="text-sm opacity-90">Computer Science & Engineering</p>
              <p className="text-xs opacity-75 mt-1">II Year | Roll No: 670329</p>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
          {/* My Registered Events */}
          <section>
            <h2 className="text-lg font-semibold mb-3">My Registered Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {registeredEvents.map((event, index) => (
                <Card key={index} className="p-4 hover:shadow-card-hover transition-all duration-200">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* My Clubs */}
          <section>
            <h2 className="text-lg font-semibold mb-3">My Clubs</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {myClubs.map((club, index) => (
                <Card key={index} className="p-4 hover:shadow-card-hover transition-all duration-200 cursor-pointer">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="text-3xl">{club.icon}</div>
                    <h3 className="font-semibold">{club.name}</h3>
                    <Button variant="ghost" size="sm" className="w-full">
                      Open
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Logout */}
          <Button variant="destructive" className="w-full lg:max-w-xs transition-all duration-200 hover:scale-105">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Profile;
