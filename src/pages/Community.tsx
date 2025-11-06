import { useState } from "react";
import { ClubCard } from "@/components/ClubCard";
import { BottomNav } from "@/components/BottomNav";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = ["All Clubs", "My Clubs"];

const allClubs = [
  {
    name: "Tech Club",
    description: "Explore the latest in technology and innovation",
    members: 234,
    icon: "💻",
  },
  {
    name: "Cultural Society",
    description: "Celebrate art, music, and cultural diversity",
    members: 189,
    icon: "🎭",
  },
  {
    name: "Sports Committee",
    description: "Stay fit and competitive with various sports",
    members: 312,
    icon: "⚽",
  },
  {
    name: "Entrepreneurship Cell",
    description: "Learn about startups and business ventures",
    members: 156,
    icon: "💡",
  },
  {
    name: "Photography Club",
    description: "Capture moments and master the art of photography",
    members: 98,
    icon: "📸",
  },
  {
    name: "Debate Society",
    description: "Sharpen your public speaking and argumentation skills",
    members: 127,
    icon: "🎤",
  },
];

const myClubs = [
  {
    name: "Tech Club",
    description: "Explore the latest in technology and innovation",
    members: 234,
    icon: "💻",
  },
  {
    name: "Photography Club",
    description: "Capture moments and master the art of photography",
    members: 98,
    icon: "📸",
  },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("All Clubs");

  const clubs = activeTab === "All Clubs" ? allClubs : myClubs;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        {/* Header */}
        <header className="bg-card border-b border-border p-4 lg:p-6 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto space-y-3">
          <h1 className="text-xl font-bold">Community</h1>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                className={cn(
                  "flex-1 rounded-full",
                  activeTab === tab && "bg-primary text-primary-foreground"
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
          </div>
        </header>

        {/* Clubs List */}
        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6">
          {clubs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clubs.map((club, index) => <ClubCard key={index} {...club} />)}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>You haven't joined any clubs yet</p>
            </div>
          )}
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Community;
