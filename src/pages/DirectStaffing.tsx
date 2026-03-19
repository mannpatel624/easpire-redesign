import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Briefcase,
  Building2,
  Users2,
  Target,
  Rocket
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function DirectStaffing() {
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
              Direct Staffing Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Hire with Confidence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Scale with Certainty.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              At eAspire, we don’t just fill positions—we help you build your future-ready workforce. Connect with permanent, high-performing professionals aligned with your goals.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Start Hiring Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Is Direct Staffing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What is Direct Staffing?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Direct staffing is about long-term talent investment. We help you hire full-time employees who join your organization directly—no intermediaries, no delays, no compromises.
                </p>
                <p>
                  Whether you're scaling across USA, EMEA Regions, APAC, Middle East & India, we ensure that the right talent meets the right opportunity—every time.
                </p>
                <div className="pt-4">
                  <h3 className="font-semibold text-foreground mb-3">Ideal for businesses that value:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Stability and continuity",
                      "Cultural alignment",
                      "Domain expertise",
                      "Reduced long-term hiring costs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                  alt="Direct Staffing Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why eAspire Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why eAspire?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Because We Deliver More Than Resumes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Talent Reach",
                desc: "From Tier-1 cities to emerging hubs, our team understands regional hiring trends and global workforce dynamics.",
                icon: Globe2
              },
              {
                title: "Speed Meets Precision",
                desc: "Need someone yesterday? Our curated talent pool and AI-powered sourcing deliver quick turnarounds—without sacrificing quality.",
                icon: Rocket
              },
              {
                title: "Vetted Talent",
                desc: "Every candidate goes through a multi-level screening process, including skill tests, behavioral interviews, and background verification.",
                icon: ShieldCheck
              },
              {
                title: "End-to-End Ownership",
                desc: "From job brief to offer negotiation to onboarding—we manage it all so you can stay focused on what matters most: growth.",
                icon: Target
              },
              {
                title: "Diverse Industry Expertise",
                desc: "We’ve placed professionals in IT, Oil & Gas, BFSI, Pharma, Automotive, Construction, and more.",
                icon: Briefcase
              },
              {
                title: "Zero Guesswork",
                desc: "We ensure transparency and clarity throughout the hiring process, giving you confidence in every decision.",
                icon: CheckCircle2
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

      {/* Who We Work With Section */}
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
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200"
                  alt="Collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-2xl font-bold mb-2">Trusted Partners</div>
                  <p className="text-white/80">Building teams for global leaders</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Who We Work With</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We partner with organizations of all sizes to deliver tailored staffing solutions.
              </p>
              <div className="space-y-4">
                {[
                  { text: "MNCs looking to build their team across the region", icon: Globe2 },
                  { text: "Startups scaling rapidly and hiring on tight timelines", icon: Rocket },
                  { text: "Enterprises entering new markets or launching new verticals", icon: Building2 },
                  { text: "Government, NGO & R&D entities seeking niche, certified professionals", icon: Users2 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-full">
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Process Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to finding your perfect match.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", desc: "We understand your culture, goals, and requirements." },
                { step: "02", title: "Sourcing", desc: "AI-powered search across our global talent network." },
                { step: "03", title: "Screening", desc: "Rigorous vetting, skills testing, and interviews." },
                { step: "04", title: "Placement", desc: "Seamless onboarding and post-placement support." }
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
