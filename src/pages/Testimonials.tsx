import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arthit Luangchan",
      role: "Factory Manager",
      company: "Vee Rubber India Private Limited",
      logo: "https://easpire.net/public/assets/images/veerubberlogovector-1@2x.png",
      text: "Our overall experience with The Company has been wonderful. Their professionalism, people connect, and management skills are exceptional. Mr. Sanjay Patel truly understands the client’s need and works with sheer dedication to achieve it. A special mention to his team members for all their efforts and quick turnaround time as well as their flawless services."
    },
    {
      name: "Riddhi K Shah",
      role: "Manager HR",
      company: "SEE Linkages Pvt. Ltd.",
      logo: "https://easpire.net/public/assets/images/logo-2@2x.png",
      text: "Our overall experience with The Company has been wonderful. Their professionalism, people connect and management skills are exceptional. Mr. Sanjay Patel truly understands the client’s need and works with sheer dedication to achieve it. A special mention to his team members for all their efforts and quick turnaround time as well as their flawless services."
    },
    {
      name: "Nilofar Patel",
      role: "TA Manager",
      company: "assa abloy india pvt ltd",
      logo: "https://easpire.net/public/assets/images/Vector-2.png",
      text: "easpire has always been prompt in providing relevant CVs & is giving good support to close profiles within TAT."
    },
    {
      name: "Gayatri Aiyer",
      role: "Human Resources",
      company: "Reliance Jio Infocomm Limited",
      logo: "https://easpire.net/public/assets/images/Reliance_Jio.png",
      text: "Working with Evoke HR team in a first hand experience is similar to being associated with an internal team as their work delivery and credibility is top notch, the team is very prompt and expertise is sourcing across various roles and have a highly service oriented mindset."
    }
  ];

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
              Client Testimonials
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              What Our Clients Say <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Stories of Success</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We take pride in building lasting relationships with our clients. Here's what they have to say about working with eAspire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all relative overflow-hidden group">
                  <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Quote size={64} />
                  </div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 border border-border/50 flex items-center justify-center">
                        <img src={item.logo} alt={item.company} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-sm text-primary font-medium">{item.role}</p>
                        <p className="text-xs text-muted-foreground">{item.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{item.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
