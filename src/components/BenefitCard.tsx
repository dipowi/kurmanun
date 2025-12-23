import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const BenefitCard = ({ icon, title, description, className }: BenefitCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-golden-xl border border-border/50 shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-1 text-left",
      className
    )}>
      <div className="text-primary mb-golden-md">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-golden-sm">
        {title}
      </h3>
      <p className="text-muted-foreground font-body leading-relaxed text-base">
        {description}
      </p>
    </div>
  );
};
