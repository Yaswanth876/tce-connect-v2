import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  venue: string;
  department: string;
  type: "technical" | "cultural" | "sports";
  horizontal?: boolean;
}

export const EventCard = ({
  title,
  date,
  venue,
  department,
  type,
  horizontal = false,
}: EventCardProps) => {
  const typeColors = {
    technical: "bg-primary/10 text-primary border-primary/20",
    cultural: "bg-accent/20 text-accent-foreground border-accent/30",
    sports: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <Card
      className={cn(
        "shadow-card hover:shadow-card-hover transition-shadow",
        horizontal ? "min-w-[280px]" : "w-full"
      )}
    >
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-base leading-tight">{title}</h3>
          <span
            className={cn(
              "text-xs px-2 py-1 rounded-full border font-medium whitespace-nowrap",
              typeColors[type]
            )}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{venue}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-medium text-primary">{department}</span>
          <Button size="sm" className="h-8">
            Register
          </Button>
        </div>
      </div>
    </Card>
  );
};
