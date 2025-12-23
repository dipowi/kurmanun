import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "default" | "sm" | "lg" | "xl";
}

export const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Halo, saya tertarik dengan kurma Kumanun!", 
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
      className={className}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "Pesan Sekarang via WhatsApp"}
    </Button>
  );
};
