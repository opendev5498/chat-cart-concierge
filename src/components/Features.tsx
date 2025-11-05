import { ShoppingBag, Zap, Shield, MessageSquare, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import seamlessImage from "@/assets/feature-seamless.jpg";
import instantImage from "@/assets/feature-instant.jpg";
import secureImage from "@/assets/feature-secure.jpg";

const features = [
  {
    icon: ShoppingBag,
    title: "Native Shopping Experience",
    description: "Browse and shop directly within WhatsApp. No app downloads, no switching between apps.",
    image: seamlessImage,
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Real-time order confirmations, delivery tracking, and personalized recommendations via chat.",
    image: instantImage,
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "End-to-end encrypted transactions with multiple payment options, all within your trusted messenger.",
    image: secureImage,
  },
  {
    icon: MessageSquare,
    title: "Conversational Commerce",
    description: "Chat with our AI assistant for product recommendations, order modifications, and instant support.",
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    description: "Complete your grocery shopping in under 2 minutes. The fastest checkout you'll ever experience.",
  },
  {
    icon: Heart,
    title: "Personalized Just For You",
    description: "Smart suggestions based on your preferences and shopping history, delivered through natural conversation.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything you need,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              nothing you don't
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete grocery shopping experience designed for the way you already communicate
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              {feature.image && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:shadow-glow transition-shadow">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
