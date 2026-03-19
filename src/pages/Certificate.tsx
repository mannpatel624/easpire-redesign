import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import Certificateimg from "../../public/about/Certificateimg.png";

export default function Certificate() {
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
              Recognition & Achievements
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Certificates & Awards <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Our Commitment to Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We are proud to be recognized for our dedication to quality, innovation, and industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">DPIIT Recognition</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                eAspire Technolabs Pvt. Ltd. is recognized as a startup by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. This recognition stands as a testament to our innovation, scalability, and contribution to the economy.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Startup India Recognized</h4>
                    <p className="text-muted-foreground">Officially recognized for innovation and growth potential.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Quality Assurance</h4>
                    <p className="text-muted-foreground">Committed to delivering high-quality services and solutions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="p-4 bg-white rounded-xl shadow-2xl border border-border/50">
                <div className="relative overflow-hidden rounded-lg border border-slate-200">
                  <img 
                    src= {Certificateimg}
                    alt="DPIIT Certificate of Recognition" 
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
              </div>
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-3xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
