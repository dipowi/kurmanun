import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "default" | "sm" | "lg" | "xl";
}

export const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Halo, saya tertarik dengan kurma Kurmanun!", 
  className,
  children,
  size = "lg"
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      variant="whatsapp" 
      size={size}
      onClick={handleClick}
      className={cn("flex-wrap", className)}
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="text-center">{children || "Pesan Sekarang via WhatsApp"}</span>
    </Button>
  );
};
