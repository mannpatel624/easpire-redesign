import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-slate max-w-none dark:prose-invert"
          >
            <div className="space-y-12">
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Acceptance of Terms</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>By accessing or using any service provided by eAspire Technolabs Pvt.Ltd., including but not limited to our websites, applications, and products, you agree to comply with and be bound by these General Terms and Conditions.</li>
                  <li>If you do not agree with any part of these terms, please do not use our services.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Service Description</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>eAspire provides a variety of services, including IT outsourcing & Business consulting software development and other technology-related solutions.</li>
                  <li>The details and features of each service are outlined in specific agreements or documentation provided for each service.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">User Responsibilities</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Users agree to provide accurate and complete information when using our services.</li>
                  <li>Users are responsible for maintaining the confidentiality of their account information, including usernames and passwords.</li>
                  <li>Users must comply with all applicable laws and regulations while using our services.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Payment Terms</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Payment terms for our services are outlined in specific agreements or invoices provided by eAspire Technolabs Pvt.Ltd.</li>
                  <li>Failure to make timely payments may result in the suspension or termination of services.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>eAspire retains ownership of all intellectual property rights related to its services, including software, designs, and documentation.</li>
                  <li>Users may not reproduce, distribute, or create derivative works based on our intellectual property without explicit permission.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Confidentiality</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Parties in agreement and users using our services agrees to keep confidential any proprietary or sensitive information disclosed during the course of providing or using the services.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>eAspire Technolabs shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of its services.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Governing Law</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>These terms and any disputes arising out of or related to our services shall be governed by and construed in accordance with the laws of the Ahmedabad jurisdiction in which eAspire Technolabs is located.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to Terms</h2>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>eAspire Technolabs reserves the right to update or modify these General Terms and Conditions at any time. Users will be notified of any changes, and continued use of our services implies acceptance of the modified terms.</li>
                </ol>
              </section>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground">
                  By using eAspire Technolabs services, you acknowledge that you have read, understood, and agreed to these General Terms and Conditions. If you have any questions or concerns, please contact us at <a href="mailto:info@easpire.net" className="text-primary hover:underline">info@easpire.net</a>.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
