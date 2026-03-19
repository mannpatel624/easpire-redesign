import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Layout,
  MessageSquare,
  Smartphone,
  ShieldCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function TechnologySolutions() {
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
              Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Custom-Built Technology for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Modern Enterprises</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              At eAspire, we design and build technology solutions that drive innovation, improve operational agility, and enhance customer experience. From new products to cloud scaling, we deliver end-to-end capabilities.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Robust solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Applications",
                desc: "Build scalable applications tailored to your business processes, with robust backends and clean, user-friendly interfaces.",
                icon: Layout
              },
              {
                title: "Social & Collaboration Tools",
                desc: "Deploy tools that improve real-time communication, document sharing, and employee engagement.",
                icon: MessageSquare
              },
              {
                title: "Enterprise Mobility",
                desc: "Enable secure, device-independent access for your workforce with mobile-first application development.",
                icon: Smartphone
              },
              {
                title: "BI & Analytics",
                desc: "Make smarter decisions using dashboards, reporting tools, and predictive analytics.",
                icon: Database
              },
              {
                title: "Cloud Services & Migration",
                desc: "Transition to the cloud with expert support across AWS, Azure, and GCP. Includes migration, DevOps, and cost optimization.",
                icon: Cloud
              },
              {
                title: "Maintenance & Support",
                desc: "Ensure consistent uptime and performance through 24/7 monitoring, SLA-based support, and performance enhancements.",
                icon: ShieldCheck
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

      {/* Tech Stack */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech Stack Expertise
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We leverage the latest technologies to build future-proof solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Java, Python, .NET, Node.js, PHP",
              "React, Angular, Vue.js",
              "AWS, Azure, Google Cloud",
              "MongoDB, MySQL, PostgreSQL",
              "Jenkins, Docker, Kubernetes",
              "Microservices Architecture",
              "Serverless Computing",
              "AI & Machine Learning Integration",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="flex flex-col items-center justify-center gap-3 text-center">
                    <div className="p-2 rounded-full bg-primary/10 text-primary 
                group-hover:bg-primary group-hover:text-primary-foreground 
                transition-colors">
                      <Code2 size={20} />
                    </div>

                    <span className="font-medium text-sm text-foreground/80">
                      {item}
                    </span>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      <Footer />
    </div>
  );
}
