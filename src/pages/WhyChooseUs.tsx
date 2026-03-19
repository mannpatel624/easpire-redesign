import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Handshake, ShieldCheck, Zap } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function WhyChooseUs() {
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
              Why Choose Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Your Trusted Partner for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Innovation & Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We are committed to delivering excellence through trust, efficiency, and security. Discover what makes eAspire the right choice for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                number: "01",
                title: "Trusted Tech Partner",
                description: "Our organization is based on trust. We do not have managers to manage people, we create rules together. We cultivate relationships with clients in the same transparent and honest way.",
                icon: Handshake
              },
              {
                number: "02",
                title: "No Red Tape",
                description: "Your time is valued, and your business goals are our goals. We are organizationally efficient, well-organized, and have a quick decision-making process based on trust and ownership.",
                icon: Zap
              },
              {
                number: "03",
                title: "Security in Good Hands",
                description: "We build security into every software, none of our work has ever been leaked or hacked. The integrity and confidentiality of your data, as well as the security of the infrastructure is our priority.",
                icon: ShieldCheck
              },
              {
                number: "04",
                title: "Certified Talents",
                description: "We pride ourselves on having a team of highly skilled and certified professionals who are dedicated to delivering top-notch solutions and driving your business success.",
                icon: GraduationCap
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-primary select-none">
                  {item.number}
                </div>
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Partner with us and experience the difference of working with a team
              that truly cares about your success.
            </p>
              <Button
                  size="lg"
                  onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  }
                  className="text-lg px-8 h-14 rounded-full shadow-lg"
                >
                  Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
}