import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  Globe2,
  Lightbulb,
  LineChart,
  PieChart,
  ShieldCheck,
  Users2,
  Calculator,
  FileText
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function KPO() {
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
              Knowledge Process Outsourcing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Advanced Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Business Efficiency</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              eAspire stands out in the field of Knowledge Process Outsourcing (KPO), offering specialized expertise and advanced solutions that drive efficiency and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Beyond Traditional Outsourcing</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We go beyond traditional outsourcing models, partnering with your organization to move forward together, ensuring seamless collaboration and mutual growth.
                </p>
                <p>
                  Our KPO services are designed to handle highly specialized tasks that require deep domain knowledge, allowing your core team to focus on strategic decision-making.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="KPO Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPO Strengths */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">KPO Strengths</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence defines our service delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Client Satisfaction", desc: "We excel in fully understanding and addressing our clients' requirements within minimal time-to-market.", icon: Users2 },
              { title: "Quality Assurance", desc: "We guarantee a steady quality of our deliverables, maintaining high standards throughout our processes.", icon: ShieldCheck },
              { title: "Continuous Improvement", desc: "We foster a learning environment and ensure our employees are trained in state-of-the-art technologies.", icon: LineChart },
              { title: "In-depth Understanding", desc: "We possess an in-depth understanding of clients' business requirements to tailor our solutions effectively.", icon: Lightbulb },
              { title: "Adherence to Standards", desc: "We adopt international and best practice standards, ensuring our solutions meet global benchmarks.", icon: Globe2 },
              { title: "Content Research & Management", desc: "We deliver accurate, well-structured, and insight-driven content through in-depth research, validation, and efficient knowledge management practices.", icon: FileText },
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

      {/* Competitive Advantage */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Competitive Advantage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why leading organizations choose eAspire for KPO.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Specialization in Business Automation",
              "Long-term Relationship Building",
              "In-depth Understanding of Requirements",
              "Commitment to Quality",
              "Bridging Business & Technology",
              "Adoption of International Standards",
              "Guiding Clients Through Technology",
              "Innovative Turnkey Solutions",
              "Scalability & Flexibility",
              "Continuous Improvement"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPO Services */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our KPO Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive financial and accounting solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Tax Returns",
                items: [
                  "Individual (Form 1040)",
                  "Corporation (Form 1120; 1120S)",
                  "Partnerships (Form 1065)",
                  "Not for Profit (Form 990)",
                  "Payroll & Sales Tax Returns",
                ],
                icon: FileText,
              },
              {
                title: "CFO & Controller Services",
                items: [
                  "GAAP Financial Statements",
                  "External Audit Work-paper Preparation",
                  "SSARS 21, 22 and 23 Compliant Financial Statements",
                  "Strategic Financial Planning",
                ],
                icon: BarChart3,
              },
              {
                title: "Accounting Services",
                items: [
                  "Full Bookkeeping Process",
                  "Bank Reconciliations",
                  "Payroll Processing",
                  "Accounts Receivable Management",
                  "Accounts Payable Management",
                ],
                icon: Calculator,
              },
              {
                title: "Special Projects",
                items: [
                  "Budgets + Forecasting",
                  "Cash Flow Management",
                  "Key Performance Indicators",
                  "Financial Analysis and Modelling",
                ],
                icon: PieChart,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
