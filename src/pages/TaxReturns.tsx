import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  FileText, 
  Landmark, 
  ShieldCheck, 
  Users2,
  Building2,
  Briefcase,
  DollarSign,
  Calendar
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function TaxReturns() {
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
              Tax Return Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Simple. Accurate. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Compliant.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Tax season doesn’t have to be stressful. At eAspire, we simplify tax preparation and filing with a personalized, expert-driven approach. Whether you’re an individual, a corporation, or a nonprofit, our team ensures every return is accurate, timely, and fully compliant.
            </p>
            <Button
            onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  }
            size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Get Tax Help <ArrowRight className="ml-2 h-5 w-5" />
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
              Comprehensive tax solutions tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Individual Tax Returns", 
                desc: "Comprehensive tax preparation including income reporting, deductions, credits, and planning for salaried professionals, freelancers, and high-net-worth individuals.",
                icon: Users2 
              },
              { 
                title: "Corporate Tax Returns", 
                desc: "We work with businesses of all sizes to prepare and file corporate taxes, aligning with your financial strategy while ensuring compliance to reduce liabilities.",
                icon: Building2 
              },
              { 
                title: "Partnership Tax Returns", 
                desc: "From income allocations to partner distributions, we manage all aspects of partnership returns, ensuring everything is properly reported and easy to understand.",
                icon: Briefcase 
              },
              { 
                title: "Estate Tax Returns", 
                desc: "Designed with care and clarity, we support executors and families with accurate reporting, helping you navigate the complexities of estate taxation.",
                icon: Landmark 
              },
              { 
                title: "Nonprofit Tax Returns", 
                desc: "Stay compliant with transparent and timely tax filings. Our services highlight your commitment to governance and accountability.",
                icon: ShieldCheck 
              },
              { 
                title: "Payroll Tax Returns", 
                desc: "Covering all employer obligations — from regular reporting to year-end filings. We help you manage filings across states and avoid penalties.",
                icon: DollarSign 
              },
              { 
                title: "Sales Tax Returns", 
                desc: "Managing sales tax filings across multiple locations? We handle calculations, submissions, and compliance tracking accurately and on time.",
                icon: Calculator 
              },
              { 
                title: "Year-End Tax Returns", 
                desc: "We reconcile all records, close the books cleanly, and file your final returns — setting the stage for a smooth start to the next year.",
                icon: Calendar 
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

      {/* Why Choose eAspire */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose eAspire?</h2>
              <div className="space-y-6">
                {[
                  { text: "Trusted professionals with deep tax expertise", icon: ShieldCheck },
                  { text: "Personalized support for individuals and businesses", icon: Users2 },
                  { text: "Local, state, and multi-jurisdiction compliance", icon: Landmark },
                  { text: "Seamless, secure document handling", icon: FileText },
                  { text: "Transparent pricing and proactive communication", icon: CheckCircle2 }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1">
                      <item.icon size={20} />
                    </div>
                    <p className="text-lg font-medium text-foreground/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-background p-2">
                <img 
                  src="https://img.freepik.com/premium-photo/man-is-sitting-desk-with-graph-that-says-tax-it_1336851-6607.jpg?uid=R170017745&ga=GA1.1.1768688349.1757583259&semt=ais_hybrid&w=740&q=80" 
                  alt="Tax Expertise" 
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
