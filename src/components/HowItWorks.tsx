import { MessageCircle, ShoppingCart, Package, Check } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Open WhatsApp",
    description: "Simply message our WhatsApp number to get started. No account creation needed.",
    step: "01",
  },
  {
    icon: ShoppingCart,
    title: "Browse & Shop",
    description: "Browse products directly in the chat. Add items to cart with a simple message.",
    step: "02",
  },
  {
    icon: Package,
    title: "Checkout Instantly",
    description: "Secure checkout with your preferred payment method, all within WhatsApp.",
    step: "03",
  },
  {
    icon: Check,
    title: "Track Delivery",
    description: "Get real-time updates and track your order until it arrives at your doorstep.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to revolutionize your grocery shopping
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 shadow-premium">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
