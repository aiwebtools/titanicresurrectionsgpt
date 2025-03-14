
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-deep p-6">
      <div className="glass-panel rounded-xl p-10 max-w-lg w-full text-center">
        <div className="bg-ocean-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Anchor className="h-8 w-8 text-gold" />
        </div>
        
        <h1 className="text-4xl font-playfair font-bold title-gradient mb-4">404</h1>
        <p className="text-xl text-ice-light mb-8">The page you're looking for has been lost at sea</p>
        
        <Button 
          className="gold-button"
          onClick={() => window.location.href = "/"}
        >
          Return to Shore
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
