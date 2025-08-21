import { Button } from "@/components/ui/button";

interface TimeFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const TimeFilters = ({ activeFilter, onFilterChange }: TimeFiltersProps) => {
  const filters = ["Today", "This Week", "This Month", "This Year"];

  return (
    <div className="flex flex-wrap gap-2 ">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter)}
          className={
            activeFilter === filter
              ? "bg-primary text-primary-foreground hover:bg-primary/90 !p-2"
              : "border-border hover:bg-muted !p-2"
          }
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};