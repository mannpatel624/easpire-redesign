import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users2, Target, Lightbulb, Heart, Handshake, Award, UserCheck, HeartHandshake } from "lucide-react";
import { useLocation } from "react-router"
import { useEffect } from "react";
import Sanjay from "../../public/about/sanjay-patel.png";
import Pravin from "../../public/about/Pravin-Parmar.jpg";
import Bhadresh from "../../public/about/Bhadresh.png";
import Anirudh from "../../public/about/Anirudh-dayal.jpg";
import techMahindra from "@/assets/companies/techMahindra.png";
import zensar from "@/assets/companies/zensar.png";
import ajantaPharma from "@/assets/companies/ajantaPharma.png";
import tcs from "@/assets/companies/tcs.png";
import virtusa from "@/assets/companies/virtusa.png";
import mobiquity from "@/assets/companies/mobiquity.png";
import voltas from "@/assets/companies/voltas.png";
import intas from "@/assets/companies/intas.png";
import hikal from "@/assets/companies/hikal.png";
import agl from "@/assets/companies/agl.png";
import britannia from "@/assets/companies/britannia.png";
import posco from "@/assets/companies/posco.png";

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

export default function About() {
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Driving Innovation & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Business Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              eAspire Technolabs is a leading IT Outsourcing & Business Consulting Company, steering customers through the next generation of business innovation.
            </p>
          </motion.div>
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

      {/* Company Overview */}
      <section id="company-overview" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  eAspire Technolabs is proudly recognized as a <strong className="text-foreground">DPIIT recognized Startup</strong>. Established a decade ago, we steer customers through the next generation of business innovation powered by technology with state-of-the-art business automation, software development, and Business Process Management Services.
                </p>
                <p>
                  We are a 100% subsidiary of <strong className="text-foreground">Evoke HR Solutions Pvt. Ltd.</strong>, which has over a decade of rich experience in HR Consulting & Outsourcing. Evoke HR has been retained by Fortune 500, MNC, and Indian Companies for all their HR needs such as RPO, Staffing & Payroll, Outsourcing, and Taxation Management.
                </p>
                <p>
                  Our mission is to leverage new technologies to gain a competitive advantage. We deliver high-value innovative solutions by bridging the gap between business and technology.
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
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission, Staff & Vision</h2>
            <p className="text-lg text-muted-foreground">
              Committed to excellence, innovation, and delivering value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description: "We are committed to providing our valuable customers with unmatched IT outsourcing and business automation consulting and turnkey solutions, as well as unparalleled technical support.",
                icon: Target
              },
              {
                title: "Our Staff",
                description: "eAspire is made up of highly skilled consultants, engineers, developers, and executives equipped with the latest management and IT tools, working around the clock to ensure timely delivery at the highest quality.",
                icon: Users2
              },
              {
                title: "Our Vision",
                description: "To become a world-class software development and technology provider and to provide clients with innovative technical and business solutions by utilizing industry standards and technology.",
                icon: Lightbulb
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                      <item.icon size={24} />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              eAspire shares a set of Core Values that are reinforced at every level, promoting a consistent culture of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Passion For Customers", icon: Heart },
              { name: "Honesty", icon: UserCheck },
              { name: "Teamwork", icon: Users2 },
              { name: "Commitment", icon: Handshake },
              { name: "Respect", icon: HeartHandshake },
              { name: "Excellence", icon: Award },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg text-center group cursor-default flex flex-col items-center justify-center aspect-square"
              >
                <div className="mb-4 text-primary group-hover:text-primary-foreground transition-colors stroke-[1.5]">
                  <value.icon size={24} />
                </div>
                <h3 className="font-medium text-sm md:text-base">{value.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section id="team" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Management Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the leaders driving our vision forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sanjay Patel",
                role: "Founder CEO & Director",
                image: Sanjay,
                bio: "An entrepreneurial leader with passion, perseverance, and determination. Sanjay oversees all aspects of eAspire business operations and governance."
              },
              {
                name: "Dr. Pravin Parmar",
                role: "Consultant Partner",
                image: Pravin,
                bio: "Brings over a decade of multifaceted experience. Specializes in guiding organizations towards realizing their objectives and optimizing efficiency."
              },
              {
                name: "Bhadresh Mevada",
                role: "KPO Division",
                image: Bhadresh,
                bio: "Holds an MBA in finance and brings over a decade of accounting and finance expertise to the team."
              },
              {
                name: "Anirudh Dayal",
                role: "RPO Division",
                image: Anirudh,
                bio: "Holds an MBA in HR and brings over 12 years of extensive experience. Drives the company's HR initiatives forward."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-border/50 hover:shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valued Customers */}
      <section id="customers" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Valued Customers</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading companies across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using a subset of logos for display */}
             {[
               techMahindra,zensar,ajantaPharma,tcs,virtusa,mobiquity,
               voltas,intas,hikal,agl,britannia,posco
             ].map((logo, i) => (
               <div key={i} className="flex items-center justify-center p-4 h-20">
                 <img src={logo} alt="Client Logo" className="max-h-full max-w-full object-contain" />
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}