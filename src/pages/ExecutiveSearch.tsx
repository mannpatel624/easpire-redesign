import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Users2,
  Target,
  Briefcase,
  Clock,
  Award,
  Lock
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ExecutiveSearch() {
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
              C-Suite & Executive Search
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Leadership That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Drives Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              At eAspire, we specialize in identifying, engaging, and securing world-class executive leaders who align with your organization’s mission, culture, and long-term business strategy.
            </p>
            <Button
              onClick={() =>
                navigate("/contact", {
                  state: { scrollTo: "contactinfo" },
                })
              }
              size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Find Your Leader <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Strategic Leadership Search Matters */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Strategic Leadership Search Matters</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Great companies are built by great leaders. Hiring a C-level executive isn’t just about filling a role—it’s about shaping your company’s future.
                </p>
                <p>
                  We take the time to understand your strategic goals, challenges, and culture to match you with executives who bring immediate value and long-term vision.
                </p>
                <p>
                  Our proven search methodology blends market intelligence, behavioral insights, and leadership assessment to ensure a fit that lasts.
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
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                  alt="Strategic Leadership"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to executive search that guarantees results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Strategic Leadership Alignment",
                desc: "We find leaders who align with your business vision, growth goals, and cultural DNA.",
                icon: Target
              },
              {
                title: "Global Talent Mapping",
                desc: "Access a global pipeline of passive and active executive talent across industries.",
                icon: Globe2
              },
              {
                title: "Confidential Search Process",
                desc: "Discretion is key. Our searches are handled with the utmost confidentiality and professionalism.",
                icon: Lock
              },
              {
                title: "Culture & Vision Fit Assessment",
                desc: "Beyond skills, we assess leadership style, adaptability, and team synergy fit.",
                icon: Users2
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

      {/* Key Roles We Specialize In */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Roles We Specialize In</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have a proven track record of placing leaders in critical positions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "CEO", "COO", "CFO", "CTO",
              "CMO", "CHRO", "VP of Strategy", "General Counsel",
              "BU Heads", "Transformation Leaders", "Board Directors"
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg text-center group cursor-default flex flex-col items-center"
              >
                <div className="mb-4 text-primary group-hover:text-primary-foreground transition-colors stroke-[1.5]">
                  <Briefcase size={20} />
                </div>
                <h3 className="font-medium text-sm md:text-base">{role}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose eAspire */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose eAspire?
              </h2>

              <div className="space-y-6">
                {[
                  { text: "97% Executive Retention Rate after 1 Year", icon: Award },
                  { text: "Average C-Level Search Closure Time: 42 Days", icon: Clock },
                  { text: "Extensive Experience Across USA, Malaysia, Singapore, UAE, APAC & EMEA Regions", icon: Globe2 },
                  { text: "Supported by a Global Team of 100+ HR Experts", icon: Users2 },
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border bg-card p-2">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
                  alt="Executive Success"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to Find the Leader Who Will Define Your Future?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you're planning succession or entering a new market, the right executive can make all the difference. Let’s align your leadership needs with global executive talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
              onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  }
               size="lg" className="text-lg px-10 h-14 rounded-full shadow-xl shadow-primary/20">
                Start Executive Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
