import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Globe2,
  Layers,
  LayoutGrid,
  Settings,
  Users2
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function BusinessPlatforms() {
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
              Business Platforms
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Deploy Enterprise Platforms <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">That Drive Performance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              At eAspire, we help businesses implement, customize, and scale powerful ERP and CRM platforms. These systems provide complete visibility into your operations, streamline cross-functional workflows, and unlock data-driven decision-making.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Optimize Your Platforms <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Platform Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge in leading enterprise solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Salesforce Solutions",
                items: [
                  "Custom Development using Lightning Components",
                  "Integration with 3rd-party systems",
                  "Sales & Service Cloud implementation",
                  "Pardot & Marketing Cloud support"
                ],
                icon: Globe2
              },
              {
                title: "ERP/CRM Implementations",
                items: [
                  "SAP: Core modules like FICO, SD, MM, and HCM",
                  "Oracle: E-Business Suite and Oracle Cloud",
                  "Microsoft Dynamics: Business Central, Power Platform",
                  "Zoho/HubSpot: Smart CRM platforms for growing businesses"
                ],
                icon: Database
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

      {/* Services Offered */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end support for your platform journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "End-to-end implementation", icon: LayoutGrid },
              { title: "Data migration & integration", icon: Layers },
              { title: "User training & documentation", icon: Users2 },
              { title: "Post-deployment support", icon: Settings }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-md text-center flex flex-col items-center justify-center gap-4 group transition-all"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose eAspire */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose eAspire?
              </h2>

              <div className="space-y-6">
                {[
                  "Platform-certified experts",
                  "Agile implementation model",
                  "Global support with localization",
                  "High success rate in complex migrations",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 size={20} />
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
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border bg-card p-2">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                  alt="Platform Success"
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
