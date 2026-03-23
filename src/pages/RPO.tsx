import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Users2, Target, Lightbulb, Handshake, Award, UserCheck, Briefcase, BarChart3, Zap } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function RPO() {
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
              Recruitment Process Outsourcing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Streamlining Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Talent Acquisition</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              eAspire is a turnkey software and RPO business solution provider, steering customers through the next generation of business innovation powered by technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Our RPO Services</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  eAspire Software, well known as eAspire, is a turnkey software and RPO business solution provider. Established a decade ago, we steer customers through the next generation of business innovation powered by technology with state-of-the-art business automation, software development, and consultation services.
                </p>
                <p>
                  eAspire specializes in multiple business industries, providing automation and solution products in the field. We are dedicated to understanding and addressing our client's requirements within minimal time-to-market.
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
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                  alt="RPO Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RPO Strengths */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RPO Strengths</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core strengths that drive value for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Gain client's satisfaction by fully understanding and addressing requirements within minimal time-to-market.",
              "Assure a steady quality by guaranteeing high quality of our deliverables.",
              "Maintain continuous improvement by promoting a learning environment and training on state-of-the-art technologies.",
              "Understand In-depth clients' business requirements.",
              "Guarantees high quality of our deliverables.",
              "Seeking continuous improvement.",
              "Adopting International & best practice standards."
            ].map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-md transition-all">
                  <CardContent className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{strength}</p>
                  </CardContent>
                </Card> */}
                <Card className="h-full border border-border/50 
  transition-all duration-300 ease-in-out 
  hover:bg-primary hover:text-white 
  hover:scale-105 hover:shadow-xl 
  cursor-pointer group"
                >
                  <CardContent className="flex gap-4 items-start">

                    <div className="flex-shrink-0 w-8 h-8 rounded-full 
      bg-primary/10 text-primary 
      flex items-center justify-center font-bold
      transition-all duration-300
      group-hover:bg-white/20 group-hover:text-white"
                    >
                      {index + 1}
                    </div>

                    <p className="text-muted-foreground transition-all duration-300 group-hover:text-white">
                      {strength}
                    </p>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Factors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Competitive Factors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Specialize", desc: "in business automation", icon: Zap },
              { title: "Understand", desc: "client requirements", icon: Lightbulb },
              { title: "Bridge", desc: "business & technology", icon: Handshake },
              { title: "Steer", desc: "through technology", icon: Target },
              { title: "Innovate", desc: "turnkey solutions", icon: Lightbulb },
              { title: "Create", desc: "long-term relationships", icon: Users2 },
              { title: "Guarantee", desc: "high quality", icon: Award },
              { title: "Adopt", desc: "international standards", icon: CheckCircle2 },
              { title: "Continuous", desc: "improvement", icon: BarChart3 },
            ].map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg text-center group cursor-default flex flex-col items-center justify-center aspect-square"
              >
                <div className="mb-4 text-primary group-hover:text-primary-foreground transition-colors stroke-[1.5]">
                  <factor.icon size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base">{factor.title}</h3>
                  <p className="text-xs md:text-base">{factor.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RPO Services */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RPO Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive recruitment solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Recruitment Services",
              "Counselling Services",
              "Recruitment Forecasting",
              "Candidate Sourcing",
              "Application Handling",
              "Scheduling & Conducting Interview",
              "Psychometric & Behavioral Assessments",
              "Technology Selection & Implementation",
              "Setting Recruitment processes",
              "Management Reporting"
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background p-4 rounded-xl border border-border/50 flex items-center gap-3 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RPO Engagement Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible engagement models designed to fit your specific hiring requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "End-to-End RPO",
                desc: "In this model, all recruitment processes and other talent acquisition strategies will be handled by our talented team. This is a long-term engagement model that can cover services like candidate attraction, screening, assessment, interview, onboarding, or compliance monitoring. Ideal for continuous hiring needs.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Project RPO",
                desc: "All recruitment processes are handled on a short-term basis, typically for specific projects. It serves as an ideal solution for companies requiring talent for a defined project duration or as a trial to evaluate long-term RPO suitability.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Selective RPO",
                desc: "Tailored to meet specific requirements, this model allows outsourcing of particular recruitment functions such as candidate sourcing or recruitment marketing. It enhances employee branding and recruitment strategies based on organizational needs.",
                image: "https://images.unsplash.com/photo-1696960181433-68ca79ac8149?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Recruiter on Demand",
                desc: "Providing flexibility for projects with tight timelines, this model addresses sudden spikes in hiring needs or rapid organizational changes. It grants immediate access to skilled recruiters well-versed in company processes.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              }
            ].map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-border/50 hover:shadow-lg transition-all group">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={model.image}
                      alt={model.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{model.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {model.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strengths */}
      <section className="py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Team Strengths & Skills
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our team is composed of dedicated professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Professional", icon: Briefcase },
              { name: "HR Executives", icon: UserCheck },
              { name: "Talent Acquisition", icon: Target },
              { name: "HR Manager", icon: Users2 },
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center border shadow-sm">
                  <role.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{role.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}