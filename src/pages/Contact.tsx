import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Building2, Globe2 } from "lucide-react";
import { useLocation } from "react-router"
import { useEffect, useState } from "react";
import { toast } from "sonner";



export default function Contact() {
  const location = useLocation()
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const id = location.state?.scrollTo
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 0)
    }
  }, [location])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const offices = [
    {
      title: "Head Office",
      address: "D-1111, 11th Floor, Ganesh Glory-11, Godrej City Road, Jagatpur, Gota, Ahmedabad - 382770",
      icon: Building2,
      country: "India"
    },
    {
      title: "Branch Office",
      address: "333, 3rd Floor, Marisoft-3, West Wing, Marigold Premises, Vadgaon sheri, Kalyani Nagar, Pune, Maharashtra - 411014",
      icon: Building2,
      country: "India"
    },
    {
      title: "USA Office",
      address: "35900 Balcones Dr Ste 100 Austin, Texas 78731-4298",
      icon: Globe2,
      country: "USA"
    },
    {
      title: "Malaysia Office",
      address: "NAZA Towers, 10, Persiaran KLCC, 50088, Kuala Lumpur, Malaysia",
      icon: Globe2,
      country: "Malaysia"
    },
    {
      title: "Singapore Office",
      address: "7 Temasek Boulevard, Singapore",
      icon: Globe2,
      country: "Singapore"
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
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Let's Start a Conversation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">We're Here to Help</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to discuss a project? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section id="contactinfo" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Reach out to us through any of these channels or visit our offices.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <a href="mailto:info@easpire.net" className="text-muted-foreground hover:text-primary transition-colors">
                        info@easpire.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>🇮🇳 +91 7226 998 859</p>
                        <p>🇺🇸 +1 6099 345 878</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors p-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <office.icon className="text-primary" size={20} />
                          <h3 className="font-semibold">{office.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {office.address}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border/50 shadow-lg">
                <CardContent>
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your project or inquiry..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map Section */}
              <section className="h-[400px] w-full bg-muted relative mt-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120851.32705739954!2d72.53552720456602!3d23.130333744833752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82e1325184e1%3A0x6909eb5a39f2bc9b!2seAspire%20Technolabs%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1773997129868!5m2!1sen!2sin"                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy">
                </iframe>
              </section>
            </motion.div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
