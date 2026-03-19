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
  LineChart,
  PieChart,
  Target,
  TrendingUp,
  Lightbulb,
  Users2,
  ShieldCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function SpecialProjects() {
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
              Special Projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Insightful Strategies. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Smarter Decisions.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              eAspire’s Special Projects services empower businesses with financial clarity and strategic foresight. Whether you're planning for expansion, preparing for investment, or optimizing performance, our experts deliver actionable insights.
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

      {/* What We Deliver */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced modeling, forecasting, and analysis to drive growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Budgets & Forecasting",
                desc: "We help you plan for the future with precision. Our budgeting and forecasting services are built on real data, market trends, and business intelligence — giving you the confidence to allocate resources and manage risks.",
                icon: TrendingUp
              },
              {
                title: "Cash Flow Management",
                desc: "Cash is the heartbeat of any business. We provide clear cash flow visibility, manage inflows and outflows, and implement strategies to maintain liquidity so you're always prepared for opportunities.",
                icon: PieChart
              },
              {
                title: "Key Performance Indicators (KPIs)",
                desc: "We identify and track the metrics that truly matter. From profitability and productivity to customer retention and capital efficiency, our KPI dashboards give you a real-time pulse on performance.",
                icon: Target
              },
              {
                title: "Financial Analysis & Modeling",
                desc: "Our team builds custom financial models to support scenario planning, valuation, investment decisions, and strategic planning. We translate complex data into intuitive visualizations and insights.",
                icon: BarChart3
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

      {/* Who It's For */}
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
                  alt="Strategic Planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Who It's For</h2>
              <div className="space-y-4">
                {[
                  "Growing companies planning capital allocation or fundraising",
                  "Founders and CFOs looking to improve internal decision-making",
                  "Investors and boards seeking financial visibility",
                  "Businesses launching new product lines or markets"
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

      {/* Why eAspire */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why eAspire?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We bring expertise and clarity to your most complex financial challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hands-on Support",
                desc: "From experienced financial professionals who understand your business.",
                icon: Users2,
              },
              {
                title: "Advanced Tools",
                desc: "Leveraging cutting-edge modeling capabilities for accurate insights.",
                icon: LineChart,
              },
              {
                title: "Custom Dashboards",
                desc: "Tailored reporting that highlights the metrics that matter to you.",
                icon: BarChart3,
              },
              {
                title: "Confidential & Secure",
                desc: "Your data is handled with the highest standards of security and privacy.",
                icon: ShieldCheck,
              },
              {
                title: "Results-Focused",
                desc: "Strategy-aligned execution that drives measurable growth.",
                icon: Target,
              },
              {
                title: "Strategic Insight",
                desc: "Moving beyond numbers to provide actionable business intelligence.",
                icon: Lightbulb,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <item.icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      <Footer />
    </div>
  );
}
