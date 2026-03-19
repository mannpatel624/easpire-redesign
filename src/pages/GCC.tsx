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
  Clock,
  Cpu,
  Database,
  Cloud,
  Lock,
  Settings,
  Rocket,
  TrendingUp,
  Target
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const roadmap = [
  { phase: "Phase 1", title: "Strategy & Design", desc: "Define GCC vision, capabilities, and operating model." },
  { phase: "Phase 2", title: "Leadership Hiring", desc: "Build core leadership and management teams." },
  { phase: "Phase 3", title: "Team Setup", desc: "Establish engineering and operational teams." },
  { phase: "Phase 4", title: "Workforce Scaling", desc: "Expand talent and operational capabilities." },
  { phase: "Phase 5", title: "Innovation Hub", desc: "Transform the GCC into a global innovation center." },
];

const services = [
  {
    title: "GCC Strategy & Advisory",
    items: ["GCC market entry strategy", "Capability roadmap development", "Workforce planning", "Operating model design"],
    icon: <Target />
  },
  {
    title: "Talent Acquisition",
    items: ["Software Engineering", "Data Science & AI", "Cloud & DevOps", "Cybersecurity", "Product Management"],
    icon: <Users2 />
  },
  {
    title: "Offshore Development",
    items: ["Rapid team setup", "Specialized tech talent", "Flexible scaling", "Cost-optimized operations"],
    icon: <Cpu />
  },
  {
    title: "Workforce Scaling",
    items: ["Continuous recruitment", "Contract & permanent staffing", "Vendor management", "Talent pipeline"],
    icon: <TrendingUp />
  }
];

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
              Build Your GCC in India
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Global Capability Centers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">(GCC) in India</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Build High-Impact Global Teams with Easpire Technolabs. We partner with organizations to design, build, and scale GCCs in India, providing expertise across talent acquisition and offshore setup.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Consult with Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Is C2C Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The Global Shift Toward GCCs</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Global enterprises are no longer building GCCs purely for cost efficiency. Modern GCCs function as strategic innovation hubs that support critical business functions.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 mt-4 gap-4">
                {[
                  { icon: <Cpu className="w-5 h-5" />, text: "Software Engineering" },
                  { icon: <Database className="w-5 h-5" />, text: "AI & Data Analytics" },
                  { icon: <Cloud className="w-5 h-5" />, text: "Cloud Transformation" },
                  { icon: <Lock className="w-5 h-5" />, text: "Cybersecurity" },
                  { icon: <Settings className="w-5 h-5" />, text: "Finance & Operations" },
                  { icon: <Rocket className="w-5 h-5" />, text: "Product Development" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
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
                  src="https://media.istockphoto.com/id/2197230938/photo/asian-gen-z-business-woman-white-man-handshake-together-at-work-corporate-office-workplace.webp?a=1&b=1&s=612x612&w=0&k=20&c=TZ7KxmjMftOhE4jNPXm_fOWooswNLoBMPWRk5eSD2k0="
                  alt="Business Meeting"
                  className="w-full h-full object-cover"
                />
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
              Easpire GCC Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              End-to-end support for establishing and scaling Global Capability Centers in India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
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
                      {service.icon}
                    </div>

                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, j) => (
                        <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          {item}
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

      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              GCC Operating Models
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Flexible engagement models tailored to your strategic objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Captive GCC", desc: "A fully owned offshore center operated by the enterprise.", icon: Building2 },
              { title: "Build-Operate-Transfer", desc: "A partner builds and operates the GCC before transferring ownership.", icon: Rocket },
              { title: "Managed GCC", desc: "Operational management and workforce scaling handled by Easpire.", icon: Settings },
              { title: "Offshore Team Model", desc: "Dedicated teams built in India supporting global initiatives.", icon: Users2 },
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


      <section className="py-24 bg-white text-slate-900 overflow-hidden relative">

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">
              GCC Implementation Roadmap
            </h2>
            <p className="text-slate-500">
              Your journey to building a successful global innovation hub.
            </p>
          </div>

          {/* Roadmap Grid */}
          <div className="grid md:grid-cols-5 gap-8">
            {roadmap.map((step, i) => (
              <div
                key={i}
                className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 font-semibold text-sm mb-4">
                  {step.phase}
                </div>

                <h4 className="text-xl font-bold mb-3 text-slate-900">
                  {step.title}
                </h4>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {i < roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Partner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass p-12 rounded-[2.5rem] bg-white border-slate-200 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-display font-bold mb-8 text-slate-900">Why Partner with Easpire</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Global recruitment expertise",
                  "Strong technology talent network",
                  "Flexible offshore workforce models",
                  "International client engagement",
                  "Scalable hiring support",
                  "Operational excellence"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Build Your GCC Today</h3>
                <p className="text-slate-600 mb-8">Unlock the full potential of India’s global talent ecosystem with Easpire Technolabs.</p>
                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
