import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Layout,
  Monitor,
  Palette,
  PenTool,
  Rocket
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function CreativeDigitalServices() {
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
              Creative & Digital Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Design That Builds Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">and Drives Conversions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              eAspire blends creativity with digital strategy to deliver experiences that are not just visually stunning, but purpose-driven. From logo design to full-scale brand systems and websites, we help businesses stand out.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Creative Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing your vision to life with precision and flair.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Website Designing & Development",
                items: [
                  "Custom WordPress, Webflow, React sites",
                  "Mobile-first, SEO-optimized, fast-loading",
                  "E-commerce and portfolio sites"
                ],
                icon: Monitor
              },
              {
                title: "Logo & Visual Identity Design",
                items: [
                  "Iconic logo concepts with modern appeal",
                  "Brand guidelines including color, typography, and usage"
                ],
                icon: PenTool
              },
              {
                title: "UI/UX Design & Prototyping",
                items: [
                  "Wireframes, mockups, and interactive prototypes",
                  "Focused on usability, accessibility, and engagement"
                ],
                icon: Layout
              },
              {
                title: "Digital Brand Identity Creation",
                items: [
                  "Style kits for social media, digital ads, brochures",
                  "Email signature kits, pitch decks, and icon sets"
                ],
                icon: Palette
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

      {/* Ideal For */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ideal For
              </h2>

              <div className="space-y-6">
                {[
                  "Startups launching new brands",
                  "Enterprises rebranding",
                  "Product teams needing UI/UX support",
                  "Agencies outsourcing creative work",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Rocket size={20} />
                    </div>
                    <p className="text-lg font-medium text-foreground/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border bg-card p-2">
                <img
                  src="https://img.freepik.com/premium-vector/vector-man-working-computer-graphic-designing-with-pen-tool_1272652-757.jpg?uid=R170017745&ga=GA1.1.1768688349.1757583259&semt=ais_hybrid&w=740&q=80"
                  alt="Creative Design"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
