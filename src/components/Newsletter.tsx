import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing",
      description: "You'll receive our latest updates soon.",
    });
    setEmail("");
  };

  return (
    <section className="py-32 bg-gradient-to-b from-art-black to-black text-art-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-4xl font-light mb-6 tracking-wide">
          Stay Informed
        </h2>
        <p className="text-art-white/70 mb-12 font-light">
          Subscribe to receive exclusive updates about new artwork releases and market insights.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border-art-white/20 text-art-white placeholder:text-art-white/50 focus:border-art-gold"
            required
          />
          <Button 
            type="submit" 
            className="bg-art-white text-art-black hover:bg-art-gold transition-colors duration-300 px-8"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};