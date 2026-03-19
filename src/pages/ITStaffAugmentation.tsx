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
  ShieldCheck,
  Users2,
  Zap
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ITStaffAugmentation() {
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
              IT Staff Augmentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Scale Smarter. Hire Faster. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Deliver Better.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              eAspire’s IT Staff Augmentation services bridge the talent gap by giving you instant access to skilled, vetted IT professionals across technologies, platforms, and project scopes.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Find Talent Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible staffing solutions to meet your project demands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "On-Demand IT Talent",
                desc: "We provide skilled professionals across software development, cloud, DevOps, cybersecurity, QA, data engineering, and more.",
                icon: Users2
              },
              {
                title: "Flexible Engagement Models",
                desc: "Choose from contract-based, contract-to-hire, or dedicated remote teams. Our solutions scale with your needs.",
                icon: Clock
              },
              {
                title: "Domain-Specific Expertise",
                desc: "Our candidates bring domain understanding in healthcare, fintech, retail, logistics, and enterprise SaaS.",
                icon: Code2
              },
              {
                title: "Global Talent Reach",
                desc: "From onshore to offshore, we tap into global talent pools to provide IT professionals who align with your time zones.",
                icon: Globe2
              },
              {
                title: "Compliance & IP Protection",
                desc: "All engagements come with strict data security, NDA policies, and IP protection standards.",
                icon: ShieldCheck
              },
              {
                title: "Rapid Turnaround",
                desc: "We deliver quickly—without the overhead of permanent hiring, ensuring you meet your deadlines.",
                icon: Zap
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

      {/* Roles We Staff */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roles We Frequently Staff</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access a wide range of technical expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Full Stack Developers",
              "Cloud Engineers (AWS, Azure)",
              "DevOps & CI/CD Specialists",
              "Data Analysts & Scientists",
              "UI/UX Designers",
              "QA Testers (Manual & Auto)",
              "Cybersecurity Professionals",
              "ERP & CRM Specialists"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why eAspire */}
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
                  "Rapid turnaround and quick onboarding",
                  "Pre-vetted, technically screened talent",
                  "Flexible billing and engagement terms",
                  "Transparent communication and SLA governance",
                  "Proven track record across startups & enterprises",
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                  alt="Staff Augmentation"
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
