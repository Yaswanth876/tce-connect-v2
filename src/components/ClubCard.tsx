import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ClubCardProps {
  name: string;
  description: string;
  members: number;
  icon: string;
}

export const ClubCard = ({ name, description, members, icon }: ClubCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-shadow">
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base leading-tight">{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{members} members</span>
          </div>
          <Button size="sm" variant="outline" className="h-8">
            Join Discussion
          </Button>
        </div>
      </div>
    </Card>
  );
};
