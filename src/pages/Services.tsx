import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLocation } from "react-router"
import { useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Code2, 
  Cpu, 
  Database, 
  Globe2, 
  Layers, 
  Layout, 
  LineChart, 
  Monitor, 
  Smartphone, 
  Users2, 
  Settings,
  Target,
  ShoppingCart,
  Server,
  Terminal,
  Rocket
} from "lucide-react";
import { Link } from "react-router";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Services() {
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
              Comprehensive Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Our Services <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Empowering Your Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From recruitment and staffing to high-end IT consulting and software development, eAspire offers a full spectrum of services designed to help you scale and succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our specialized divisions tailored to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Recruitment",
                desc: "RPO, C2C, Direct Staffing, Executive Search",
                icon: Users2,
                link: "/rpo"
              },
              {
                title: "Accounting & Finance",
                desc: "KPO, Accounting, CFO Services, Tax Returns",
                icon: LineChart,
                link: "/accounting-services"
              },
              {
                title: "IT Services",
                desc: "Consulting, Tech Solutions, Staff Augmentation",
                icon: Monitor,
                link: "/technology-solutions"
              },
              {
                title: "Product",
                desc: "CampusJobs - Connecting Talent & Opportunity",
                icon: Rocket,
                link: "/CampusJobs"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.link}>
                  <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon size={24} />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Sets */}
      <section id="skill" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skill Sets</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team possesses deep expertise across a wide range of technologies and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Architecture", icon: Layers, desc: "Enterprise Architect, Rational Software Architect" },
              { name: "Microsoft .NET", icon: Code2, desc: "C#, ASP.NET, MVC, WCF, Entity Framework" },
              { name: "Web Development", icon: Globe2, desc: "React, Angular, Node.js, PHP, HTML5/CSS3" },
              { name: "Mobile Apps", icon: Smartphone, desc: "iOS, Android, Flutter, React Native" },
              { name: "J2EE / Java", icon: Cpu, desc: "Spring, Hibernate, JSP, Servlets" },
              { name: "LAMP Stack", icon: Terminal, desc: "Linux, Apache, MySQL, PHP" },
              { name: "Analytics & BI", icon: LineChart, desc: "Power BI, Tableau, Google Analytics" },
              { name: "Big Data", icon: Server, desc: "Hadoop, MongoDB, Spark" },
              { name: "Databases", icon: Database, desc: "SQL Server, Oracle, PostgreSQL" },
              { name: "E-Commerce", icon: ShoppingCart, desc: "Magento, Shopify, WooCommerce" },
              { name: "UI/UX Design", icon: Layout, desc: "Figma, Adobe XD, InVision" },
              { name: "Cloud Platforms", icon: Globe2, desc: "AWS, Azure, Google Cloud" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <skill.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="Methodology" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Methodology & Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures transparency, quality, and timely delivery.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Evaluation", desc: "Mapping processes to determine the 'Actual State' and starting point." },
                { step: "02", title: "Optimization", desc: "Suggesting improvements and selecting the right technology mix." },
                { step: "03", title: "Design", desc: "Collaborative application design with client feedback loops." },
                { step: "04", title: "Construction", desc: "Development and implementation with weekly delivery cycles." },
                { step: "05", title: "Monitoring", desc: "Defining KPIs and metrics to ensure process efficiency." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-xl border border-border/50 shadow-sm relative"
                >
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto lg:mx-0">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center lg:text-left">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-center lg:text-left leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Practices */}
      <section id="engagement" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engagement Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible working models designed to fit your business requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Fixed Cost Model", 
                desc: "Ideal for projects with well-defined requirements and timelines. We take full responsibility for delivery within budget.",
                icon: Target
              },
              { 
                title: "Hourly Model", 
                desc: "Pay-as-you-go model suitable for ongoing maintenance or projects with evolving requirements.",
                icon: Clock
              },
              { 
                title: "T&M Model", 
                desc: "Time and Material model where you pay for the resources and time utilized. Offers high flexibility.",
                icon: Settings
              },
              { 
                title: "Partner With Us", 
                desc: "Strategic partnership for long-term collaboration, dedicated teams, and shared growth.",
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
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
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

      {/* Managed Offshore Development */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Managed Offshore Development</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our managed offshore services provide you with a dedicated extension of your team, ensuring high-quality delivery and seamless communication.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Contract", desc: "Clear agreements defining scope, deliverables, and terms." },
                  { title: "Concept", desc: "Detailed work breakdown, schedules, and milestones." },
                  { title: "Working Hours", desc: "Standard 8 hours/day, 5 days/week (approx. 170 hours/month)." },
                  { title: "Discuss / Interact", desc: "Regular scrum meetings and open communication channels." },
                  { title: "Deadlines", desc: "Strict adherence to established milestones and delivery dates." },
                  { title: "Deliver", desc: "Complete work delivery based on tasks, testing, and deployment." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Offshore Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Globe2 className="text-primary" size={24} />
                  <span className="font-bold text-lg">Global Reach</span>
                </div>
                <p className="text-muted-foreground text-sm">Seamless collaboration across time zones.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}