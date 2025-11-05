import { Calendar, Users, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";

const registeredEvents = [
  {
    title: "AI Workshop Series",
    date: "Jan 20, 2025",
  },
  {
    title: "Hackathon 2025",
    date: "Jan 25, 2025",
  },
];

const myClubs = [
  { name: "Tech Club", icon: "💻" },
  { name: "Photography Club", icon: "📸" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-6">
        <div className="max-w-lg mx-auto text-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-accent mx-auto flex items-center justify-center text-4xl">
            👨‍🎓
          </div>
          <div>
            <h1 className="text-xl font-bold">Rajesh Kumar</h1>
            <p className="text-sm opacity-90">Computer Science & Engineering</p>
            <p className="text-xs opacity-75 mt-1">III Year | Roll No: 20CS123</p>
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Registered Events */}
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            My Registered Events
          </h2>
          <div className="space-y-2">
            {registeredEvents.map((event, index) => (
              <Card key={index} className="shadow-card">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* My Clubs */}
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            My Clubs
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {myClubs.map((club, index) => (
              <Card key={index} className="shadow-card">
                <div className="p-4 text-center space-y-2">
                  <div className="text-3xl">{club.icon}</div>
                  <p className="font-medium text-sm">{club.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
