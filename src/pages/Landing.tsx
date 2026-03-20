import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Industries } from "@/components/Industries";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router"
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Code2, Users2, TrendingUp } from "lucide-react";
import { LogosCarousel } from "@/components/LogosCarousel";
import CampusJobslogo from "../../public/CampusJobslogo.png";
import CampusJobsicon from "../../public/CampusJobsIcon.png";
import { useLocation } from "react-router"
import { useEffect } from "react";

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


export default function Landing() {
  const navigate = useNavigate();
  const location = useLocation()
  

  useEffect(() => {
      const id = location.state?.scrollTo
      if (id) {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        }, 0)
      }
    }, [location])


  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="absolute top-1/4 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Innovating Business Solutions
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Empowering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Global Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                We specialize in RPO, KPO, and IT Staff Augmentation to drive your business forward with unmatched precision and automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  }
                  className="text-lg px-8 h-14 rounded-full shadow-lg"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a href="/services">
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-2 hover:bg-muted/50">
                    View Services
                  </Button>
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 text-muted-foreground">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <img src={src} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-foreground">1000+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-3xl p-2">
                <div className="bg-background rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                    alt="Business Collaboration"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-card p-4 rounded-xl shadow-xl border border-border z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Fast Growth</div>
                    <div className="text-xs text-muted-foreground">+125% this month</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20"
          >
            {[
              { label: "Years Experience", value: "16+" },
              { label: "Projects Done", value: "100+" },
              { label: "Happy Clients", value: "98%" },
              { label: "Global Reach", value: "878+" },
            ].map((stat, index) => (
              <motion.div key={index} variants={item} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Welcome To eAspire</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Specializing in <strong className="text-foreground">RPO, KPO, and IT Staff Augmentation</strong>, eAspire Technolabs is a trusted partner for businesses seeking agile, scalable, and talent-driven solutions.
                </p>
                <p>
                  Proudly recognized as a <strong className="text-foreground">DPIIT</strong> acknowledged startup, we are a leading name in Recruitment, Account And Finance, IT Outsourcing and Business Consulting.
                </p>
                <p>
                  As a wholly owned subsidiary of <strong className="text-foreground">Evoke HR Solutions Pvt. Ltd.</strong>, we bring a strong legacy of expertise. Our mission is to guide clients through next-generation business innovation powered by advanced technology.
                </p>
              </div>
              <a href="/about">
                <Button variant="link" className="mt-6 p-0 h-auto text-primary font-bold text-lg group">
                  Learn more about us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl relative border border-border/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">DPIIT Recognized</div>
                    <div className="text-sm text-muted-foreground">Startup India</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Expertise</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive end-to-end workforce and business support solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Recruitment Process Outsourcing",
                description: "Turnkey software and RPO business solution provider. We steer customers through the next generation of business innovation.",
                icon: <Users2 className="w-8 h-8 text-white" />,
                stats: "48,750+ Placements",
                color: "bg-blue-500"
              },
              {
                title: "Knowledge Process Outsourcing",
                description: "Specialized expertise and advanced solutions that drive efficiency. We go beyond traditional outsourcing models.",
                icon: <BarChart3 className="w-8 h-8 text-white" />,
                stats: "19,400+ Man-Hours",
                color: "bg-primary"
              },
              {
                title: "IT Staff Augmentation",
                description: "Our Product & Software Development Team is trained on state-of-the-art technologies to maximize productivity.",
                icon: <Code2 className="w-8 h-8 text-white" />,
                stats: "100+ Team Members",
                color: "bg-orange-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 ${service.color}`}></div>
                  <CardHeader>
                    <div className={`mb-6 p-4 ${service.color} w-fit rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="pt-4 border-t border-border/50 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${service.color}`}></div>
                      <p className="font-semibold text-foreground">{service.stats}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-card rounded-[2.5rem] overflow-hidden shadow-xl border border-border/50">
            <div className="grid md:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <motion.div {...fadeIn}>
                <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
                  Featured Product
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">CampusJobs</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  A digital platform that connects fresh graduates with corporate India. It provides a unique and customized process for corporates to connect with the best talent from all over India.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-600"><CheckCircle2 className="w-4 h-4" /></div>
                    <span className="font-medium">Access to college talent pools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-600"><CheckCircle2 className="w-4 h-4" /></div>
                    <span className="font-medium">AI-based Assessment & Interview process</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-600"><CheckCircle2 className="w-4 h-4" /></div>
                    <span className="font-medium">Advanced filtering by skills & location</span>
                  </li>
                </ul>
                <a href="https://CampusJobs.ai" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    Visit CampusJobs.ai
                  </Button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex justify-center"
              >
                <div className="relative z-10 bg-gradient-to-br from-primary to-blue-600 p-1 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-background p-8 rounded-[1.8rem] max-w-sm w-full text-center h-[400px] flex flex-col justify-center">
                    <div className="w-12 mx-auto mb-6 flex items-center justify-center">
                      <img src={CampusJobsicon} alt="" />
                    </div>
                    <img src={CampusJobslogo} alt="" width={170} style={{ alignSelf: "center", margin: "0 30px" }} />
                    <p className="text-muted-foreground text-sm mb-8">AI-Powered Talent Platform</p>
                    <div className="space-y-3">
                      <div className="h-2 bg-muted rounded-full w-3/4 mx-auto"></div>
                      <div className="h-2 bg-muted rounded-full w-1/2 mx-auto"></div>
                    </div>
                    <div className="mt-auto">
                      <a href="https://CampusJobs.ai" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full rounded-xl">View Demo</Button>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-3xl -z-10 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <Industries />

      {/* Logo Section */}
      <LogosCarousel />


      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to Transform Your Business?</h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto ">
              Join hundreds of satisfied clients who have elevated their operations with eAspire expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                  size="lg"
                  onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  }
                  className="text-lg px-8 h-14 rounded-full shadow-lg"
                >
                  Contact Us Today
                </Button>
              <Button onClick={() =>
                    navigate("/contact", {
                      state: { scrollTo: "contactinfo" },
                    })
                  } size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-2 hover:bg-muted/50">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}