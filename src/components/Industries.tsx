import { motion } from "framer-motion";
import { 
  Landmark, 
  Truck, 
  HeartPulse, 
  Factory, 
  BadgeDollarSign, 
  ConciergeBell,
  Plane, 
  ShoppingBag, 
  GraduationCap, 
  ShieldCheck 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const industries = [
  { name: "Public Sector", icon: Landmark },
  { name: "Transportation", icon: Truck },
  { name: "Health Care", icon: HeartPulse },
  { name: "Manufacturing", icon: Factory },
  { name: "Financial Services", icon: BadgeDollarSign },
  { name: "Hospitality", icon: ConciergeBell },
  { name: "Tour & Travel", icon: Plane },
  { name: "Retail", icon: ShoppingBag },
  { name: "Education", icon: GraduationCap },
  { name: "Insurance", icon: ShieldCheck }
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Sectors</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground">
            Delivering specialized solutions across diverse sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg text-center group cursor-default flex flex-col items-center justify-center aspect-square"
            >
              <item.icon className="w-10 h-10 mb-4 text-primary group-hover:text-primary-foreground transition-colors stroke-[1.5]" />
              <h3 className="font-medium text-sm md:text-base">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
