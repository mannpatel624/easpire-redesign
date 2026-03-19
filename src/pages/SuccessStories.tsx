import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Trophy,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SuccessStories() {
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
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Proven Results. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Real Impact.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              See how eAspire has helped organizations navigate talent wars, scale rapidly, and achieve their business goals through strategic partnership and execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story 1: IT Talent War */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted">
                <img
                  src="https://img.freepik.com/free-photo/trans-person-working-office-with-colleagues_23-2149286981.jpg?t=st=1767701540~exp=1767705140~hmac=ca127bf4ba2f80a3b40f657c7034571134240fb1d21ef07b12e06e3e46bcce5a&w=1060"
                  alt="IT Talent Ramp Up"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="text-yellow-500" size={24} />
                  <span className="font-bold text-lg">Key Achievement</span>
                </div>
                <p className="text-muted-foreground text-sm">150 candidates selected in just 2 days.</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                IT Staffing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Winning the IT Talent War</h2>
              <h3 className="text-xl font-semibold mb-4 text-primary">Ramp Up Drive Management</h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-6">
                <p>
                  In a highly competitive market, we managed a massive ramp-up drive, selecting 150 candidates in 2 days and onboarding over 700 candidates yearly.
                </p>
                <p>
                  <strong>The Challenge:</strong> Managing high volumes of interviews while minimizing candidate no-shows during virtual drives.
                </p>
                <p>
                  <strong>Our Solution:</strong>
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Planned drives 7 days in advance with dedicated RPO teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Maintained a 95% interview slot utilization rate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Implemented a robust backup candidate system (1 backup for every 2 interviews).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Rigorous pre-checks and documentation verification.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story 2: Startup Scaling */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                Startup Growth
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Scaling a Data Warehouse Startup</h2>
              <h3 className="text-xl font-semibold mb-4 text-primary">From 100 to 500 Employees</h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-6">
                <p>
                  We partnered with a data warehouse startup to scale their workforce significantly, addressing the unique challenges of a growing brand.
                </p>
                <p>
                  <strong>The Approach:</strong>
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Conducted deep brainstorming sessions to understand and sell the brand vision.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Defined monthly hiring targets aligned with delivery and sales pipelines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Focused ramp-up on critical Data Warehousing skills.</span>
                  </li>
                </ul>
                <p className="mt-4 font-medium text-foreground">
                  <strong>The Result:</strong> Successfully scaled the team from 100 to 500, enabling the company to acquire new projects across Java, .NET, and BFSI verticals.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2 relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-background">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
                  alt="Startup Team Scaling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="text-primary" size={24} />
                  <span className="font-bold text-lg">Growth Metric</span>
                </div>
                <p className="text-muted-foreground text-sm">5x workforce expansion achieved.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Write Your Success Story With Us
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with eAspire to overcome your talent and operational challenges.
            </p>

            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg"
              className="
          text-lg px-10 h-14 rounded-full
          shadow-md hover:shadow-lg
          transition-all duration-300
        "
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
