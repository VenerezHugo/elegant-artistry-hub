import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates soon.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-art-white">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-art-black">
          Stay Updated
        </h2>
        <p className="text-art-gray mb-8">
          Subscribe to receive the latest news about artwork drops and market
          insights.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-art-black text-art-white hover:bg-art-gold">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};