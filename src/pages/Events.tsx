import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import { BottomNav } from "@/components/BottomNav";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const filters = ["All", "Technical", "Cultural", "Sports"];

const allEvents = [
  {
    title: "AI Workshop Series",
    date: "Jan 20, 2025",
    venue: "CSE Lab 1",
    department: "CSE",
    type: "technical" as const,
  },
  {
    title: "Cultural Fest Auditions",
    date: "Jan 21, 2025",
    venue: "Main Auditorium",
    department: "Cultural Committee",
    type: "cultural" as const,
  },
  {
    title: "Basketball Tournament",
    date: "Jan 22, 2025",
    venue: "Sports Complex",
    department: "Sports Committee",
    type: "sports" as const,
  },
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
    title: "Cricket Championship",
    date: "Feb 1, 2025",
    venue: "Cricket Ground",
    department: "Sports Committee",
    type: "sports" as const,
  },
];

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = allEvents.filter((event) => {
    const matchesFilter =
      selectedFilter === "All" ||
      event.type.toLowerCase() === selectedFilter.toLowerCase();
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        {/* Header */}
        <header className="bg-card border-b border-border p-4 lg:p-6 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto space-y-3">
          <h1 className="text-xl font-bold">Events</h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events or clubs"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {filters.map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant={selectedFilter === filter ? "default" : "outline"}
                className={cn(
                  "rounded-full whitespace-nowrap",
                  selectedFilter === filter &&
                    "bg-primary text-primary-foreground"
                )}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
          </div>
        </header>

        {/* Events List */}
        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No events found</p>
            </div>
          )}
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Events;
