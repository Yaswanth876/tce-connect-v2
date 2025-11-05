import { useState } from "react";
import { ClubCard } from "@/components/ClubCard";
import { BottomNav } from "@/components/BottomNav";
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
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border p-4 sticky top-0 z-10">
        <div className="max-w-lg mx-auto space-y-3">
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
      <div className="max-w-lg mx-auto px-4 py-6 space-y-3">
        {clubs.length > 0 ? (
          clubs.map((club, index) => <ClubCard key={index} {...club} />)
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>You haven't joined any clubs yet</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Community;
