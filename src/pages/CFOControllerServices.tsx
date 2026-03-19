import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  FileText,
  LineChart,
  PieChart,
  ShieldCheck,
  Users2,
  Briefcase
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function CFOControllerServices() {
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
              CFO & Controller Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Strategic Financial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Leadership</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Accurate Reporting. Regulatory Confidence. We provide mid-sized and growing enterprises with high-level financial oversight without the cost of a full in-house team.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Consult an Expert <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Expert Financial Oversight</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At eAspire, our CFO & Controller Services are built to provide high-level financial oversight, reporting accuracy, and compliance-ready documentation.
                </p>
                <p>
                  Whether you need full-time support or fractional services, we deliver the experience and insight you need to make informed strategic decisions.
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
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
                  alt="CFO Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic services to guide your financial future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "GAAP-Compliant Financials",
                desc: "We prepare financial statements in full accordance with Generally Accepted Accounting Principles (GAAP), ensuring transparency and audit readiness.",
                icon: BookOpen
              },
              {
                title: "External Audit Prep",
                desc: "We compile, organize, and reconcile audit work-papers, creating clear documentation to reduce audit risks and accelerate review cycles.",
                icon: FileText
              },
              {
                title: "Month-End Closing",
                desc: "We design and manage structured month-end close processes to ensure timely, accurate, and actionable financial reporting.",
                icon: BarChart3
              },
              {
                title: "SSARS Compliant",
                desc: "Our team prepares financial statements under the Statements on Standards for Accounting and Review Services (SSARS) issued by the AICPA.",
                icon: ShieldCheck
              },
              {
                title: "Fractional CFO Support",
                desc: "Gain access to executive-level financial leadership on demand for strategic forecasting, budgeting, and cash flow planning.",
                icon: Users2
              },
              {
                title: "Investor Reporting",
                desc: "Professional reporting for investors and boards, ensuring clear communication of financial health and strategic direction.",
                icon: LineChart
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

      {/* Why Choose */}
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
                  { text: "Scalable solutions tailored to your business size", icon: PieChart },
                  { text: "Experienced professionals with domain-specific expertise", icon: Briefcase },
                  { text: "Secure systems ensuring data confidentiality", icon: ShieldCheck },
                  { text: "Cost-effective and error-free processing", icon: CheckCircle2 },
                  { text: "Real-time financial insights and reporting", icon: LineChart },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1">
                      <item.icon size={20} />
                    </div>
                    <p className="text-lg font-medium text-foreground/80">
                      {item.text}
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
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
                  alt="Strategic Leadership"
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
