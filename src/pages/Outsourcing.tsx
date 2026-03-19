import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Code2, 
  Globe2, 
  Users2,
  Briefcase,
  ShieldCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Outsourcing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Outsourcing Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Flexible Talent and Delivery <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Models to Fuel Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              eAspire Outsourcing delivers the agility, expertise, and cost efficiency your business needs — without compromising on quality. Whether you need on-demand talent or project-based delivery, we offer scalable outsourcing models backed by accountability and transparency.
            </p>
            <Button
            onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  }
            size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Start Outsourcing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Outsourcing Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for every business requirement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Application Development & Management", 
                items: [
                  "Full-cycle software development",
                  "DevOps & CI/CD integration",
                  "Post-launch maintenance & optimization"
                ],
                icon: Code2 
              },
              { 
                title: "Resource & Staffing Solutions", 
                items: [
                  "Permanent Staffing for long-term roles",
                  "Contract & C2H Staffing for project needs",
                  "Remote/Offshore talent delivery across multiple time zones",
                  "Dedicated Teams for managed service delivery"
                ],
                icon: Users2 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon size={24} />
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mt-2">
                      {item.items.map((subItem, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why eAspire */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-background">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Outsourcing Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why eAspire for Outsourcing?</h2>
              <div className="space-y-6">
                {[
                  { text: "Domain-specific hiring", icon: Briefcase },
                  { text: "Strict SLA adherence", icon: ShieldCheck },
                  { text: "Transparent engagement models", icon: Globe2 },
                  { text: "24/7 support and communication", icon: Clock }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <item.icon size={20} />
                    </div>
                    <p className="text-lg font-medium text-foreground/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
