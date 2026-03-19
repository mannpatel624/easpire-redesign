import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  Globe2, 
  Settings, 
  Target, 
  Users2,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Consulting() {
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
              Strategic IT Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Drive Sustainable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              At eAspire, we partner with organizations to transform their IT strategy into a competitive advantage. Our consulting services focus on aligning your business objectives with the right technology, processes, and people.
            </p>
            <Button
            onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  }
            size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Get Strategic Advice <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Consulting Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Consulting Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategies to navigate the digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "IT Landscape Assessment", 
                desc: "Gain insights into your current technology environment to identify areas of improvement, risk, and innovation.",
                icon: BarChart3 
              },
              { 
                title: "Strategy & Architecture Planning", 
                desc: "Design scalable, secure, and high-performance IT systems that support long-term growth.",
                icon: Target 
              },
              { 
                title: "Business & Digital Transformation", 
                desc: "Accelerate change by rethinking customer experiences, operational workflows, and digital products.",
                icon: Globe2 
              },
              { 
                title: "Enterprise Process Optimization", 
                desc: "Streamline internal processes through automation, workflow redesign, and lean methodologies.",
                icon: Settings 
              },
              { 
                title: "Change Management", 
                desc: "Ensure your team is equipped for success through structured change enablement, training, and adoption programs.",
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
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Consulting Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why eAspire?</h2>
              <div className="space-y-4">
                {[
                  "Deep business and technology alignment",
                  "Domain-led expertise",
                  "Proven frameworks & methodologies",
                  "Measurable ROI on transformation efforts"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-full">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-medium text-foreground/90">{item}</span>
                  </motion.div>
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
