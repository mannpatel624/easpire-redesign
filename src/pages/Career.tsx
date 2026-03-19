import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Lightbulb, Rocket, Users2 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Career() {
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
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Life @ eAspire <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Where Passion Meets Profession</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into a dynamic hub where innovation flourishes, collaboration thrives, and personal growth is a constant journey.
            </p>
            <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Culture Section 1 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
                <Lightbulb size={16} /> Innovation Hub
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Canvas for Innovation</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Step into the dynamic hub that is eAspire, a captivating journey where the fusion of passion and profession defines our vibrant workplace spirit. Beyond the conventional confines of an office, our space emerges as a canvas for innovation, a stage for seamless collaboration, and a playground where continuous learning is not just encouraged but embraced.
              </p>
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
                  src="https://easpire.net/public/assets/images/unsplashfaefwcdokig@2x.png" 
                  alt="Office Culture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section 2 */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted">
                <img 
                  src="https://easpire.net/public/assets/images/unsplashhe9k2vgcu2c@2x.png" 
                  alt="Diversity and Inclusion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <Users2 size={16} /> Diversity & Belonging
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Celebrating Diversity</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Immerse yourself in a culture that goes beyond the ordinary, one that celebrates the richness of diversity, empowers individuals to explore their fullest potential, and cultivates a profound sense of belonging. At eAspire, we recognize that our collective strength lies in the unique talents, perspectives, and experiences of our team members. Here, every voice matters, and every contribution is a vital stroke on the canvas of our shared success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section 3 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <Rocket size={16} /> Growth & Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Journey to Success</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In the bustling hub that is eAspire, each day unfolds as a new opportunity to challenge the status quo, delve into groundbreaking projects, and sculpt your individual journey to success. We believe in providing not just a job but an invigorating experience where innovation flourishes, collaboration thrives, and personal growth is a constant.
              </p>
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
                  src="https://easpire.net/public/assets/images/unsplashj7gmnb12vp0@2x.png" 
                  alt="Growth Opportunities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section 4 */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted">
                <img 
                  src="https://easpire.net/public/assets/images/unsplashv8aesqibak8@2x.png" 
                  alt="Community" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
                <Heart size={16} /> Community
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">More Than a Workplace</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our commitment to cultivating an environment where aspirations are nurtured is evident in every facet of life at eAspire. This is more than a workplace; it's a community of forward-thinkers, change-makers, and dreamers who are collectively shaping the future. Experience the essence of life at eAspire, where your journey is not just about what you do from 9 to 5, but about the opportunities you seize, the connections you make, and the impact you create.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Extraordinary Journey</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              We invite you to be part of this extraordinary journey, where your aspirations find a home, and your professional endeavors reach new heights.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-10 h-14 rounded-full shadow-xl">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
