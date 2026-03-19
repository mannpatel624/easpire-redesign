import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Globe2,
  Scale,
  ShieldCheck,
  Users2,
  Zap,
  ArrowRight,
  Clock
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function C2C() {
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
              Corp-To-Corp Contracting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Scale Smarter With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">C2C Contracting</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Tap into elite talent through registered business entities — flexible, compliant, and cost-effective solutions for your growing business.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Is C2C Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What Is Corp-To-Corp (C2C) Contracting?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Corp-to-Corp (C2C) contracting is a business engagement model where companies work with independent consultants or service providers operating through legally registered entities.
                </p>
                <p>
                  It's ideal for organizations looking to engage highly skilled professionals without traditional employment constraints, offering a streamlined approach to talent acquisition and project execution.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                  alt="Business Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With eAspire?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a robust framework for C2C contracting that ensures success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vetted Talent Pool",
                desc: "Global access to qualified consultants ready to deploy.",
                icon: Users2
              },
              {
                title: "Compliance Assurance",
                desc: "Fully aligned with U.S., India, and APAC labor laws and regulations.",
                icon: ShieldCheck
              },
              {
                title: "Scalability",
                desc: "Scale your teams up or down quickly based on project needs.",
                icon: Scale
              },
              {
                title: "Cost Efficiency",
                desc: "Pay only for what you need, optimizing your operational budget.",
                icon: Zap
              },
              {
                title: "24x7 Support",
                desc: "Global delivery centers providing round-the-clock support.",
                icon: Clock
              },
              {
                title: "Global Reach",
                desc: "Access talent and support across multiple time zones.",
                icon: Globe2
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

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                  alt="C2C Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-2xl font-bold mb-2">Tailored Solutions</div>
                  <p className="text-white/80">Designed for your specific business needs</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">C2C Solutions That Fit Your Business</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer a comprehensive range of C2C engagement models to suit various business requirements.
              </p>
              <div className="space-y-4">
                {[
                  "Short-Term & Long-Term Consulting",
                  "IT, Non-IT & Tech Resource Augmentation",
                  "Domain-Specific Project Staffing",
                  "Offshore Development Teams",
                  "Payroll, Compliance & Onboarding Support"
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-full">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-medium">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Is C2C Right For You */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is C2C Right For You?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Consider Corp-to-Corp contracting if your organization meets these criteria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Specialized Talent", desc: "You require highly specialized skills not available in-house.", icon: Zap },
              { title: "Flexible Scaling", desc: "You need the flexibility to scale teams up or down rapidly.", icon: Scale },
              { title: "Global Operations", desc: "You operate globally across multiple time zones.", icon: Globe2 },
              { title: "Reduced Overhead", desc: "You want to reduce legal, HR, and administrative overhead.", icon: Building2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-border/60 bg-background hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
        bg-primary/10 text-primary
        group-hover:bg-primary group-hover:text-primary-foreground
        transition-all duration-300"
                    >
                      <item.icon size={22} />
                    </div>

                    <CardTitle className="text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Engagement Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to getting you the talent you need.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Consultation", desc: "We understand your requirements and business goals." },
                { step: "02", title: "Sourcing", desc: "We identify and vet the best candidates for your needs." },
                { step: "03", title: "Selection", desc: "You interview and select the ideal professionals." },
                { step: "04", title: "Onboarding", desc: "Seamless integration into your team and workflows." }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-2xl border border-border/50 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg shadow-primary/25">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
