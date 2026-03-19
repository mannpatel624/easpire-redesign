import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Jobskampuspage from "../../public/jobskampuspage.png";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Filter,
  GraduationCap,
  LayoutDashboard,
  Search,
  Users2,
  Zap
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function JobsKampus() {
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
              Featured Product
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              JobsKampus <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Connecting Talent & Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A premier digital platform connecting fresh graduates with corporates across India.
              Streamline your hiring with AI-based assessments, advanced filtering, and a massive talent pool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://jobskampus.ai/corporateLanding" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                For Corporates <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
              <a href="https://jobskampus.ai/candidateLanding" target="_blank" rel="noopener noreferrer">
              <Button 
              size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full">
                For Candidates
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted p-4">
                <img
                  src={Jobskampuspage}
                  alt="JobsKampus Platform"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Bridging the Gap</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  JobsKampus provides a unique and customized process for corporates to connect with the best talent from all over India.
                </p>
                <p>
                  For corporates, it offers access to a vast pool of college talent with filters for location, skills, and project experience. The platform is equipped with an ATS, AI-based assessments, and interview processes to facilitate seamless hiring.
                </p>
                <p>
                  For fresh graduates, it serves as a launchpad to showcase skills, prepare for interviews, and land dream jobs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose JobsKampus?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, effective, and affordable way to connect the best talent with the best companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pan-India Talent Pool",
                desc: "Access millions of fresh graduates from across the country, regardless of location.",
                icon: Users2
              },
              {
                title: "AI-Based Selection",
                desc: "Automate hiring with AI-driven interviews, assessments, and MIS reporting.",
                icon: Bot
              },
              {
                title: "Customized Search",
                desc: "Filter candidates by specific skills, experience, and criteria tailored to your needs.",
                icon: Filter
              },
              {
                title: "Fully Digital Process",
                desc: "End-to-end digitization from sourcing to final selection.",
                icon: LayoutDashboard
              },
              {
                title: "Cost Effective",
                desc: "An affordable solution that saves time, money, and process overhead.",
                icon: Zap
              },
              {
                title: "User Friendly",
                desc: "Easy-to-navigate interface for both recruiters and job seekers.",
                icon: Search
              },
              {
                title: "Reduced Hiring Gap",
                desc: "Efficiently bridges the divide between corporate requirements and graduate aspirations.",
                icon: CheckCircle2
              },
              {
                title: "Career Preparation",
                desc: "Resources to help graduates prepare for interviews and succeed.",
                icon: GraduationCap
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Join thousands of corporates and graduates on JobsKampus today.
            </p>
            <a
              href="https://jobskampus.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="text-lg px-10 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Visit JobsKampus.ai
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
