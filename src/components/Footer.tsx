import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Globe } from "lucide-react";
import Logo from "../../public/easpirelightlogo.png";
import StartupIndialogo from "../../public/StartupIndialogo.png";
import { useNavigate } from "react-router";

export function Footer() {
  const navigate = useNavigate();
  const footerLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Product", path: "/CampusJobs" },
    { name: "Industries", path: "/", scrollTo: "industries" },
    { name: "Certificate", path: "/certificate" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Skill Sets", path: "/services", scrollTo: "skill" },
    { name: "Team Strengths", path: "/about", scrollTo: "team" },
    { name: "Methodology & Framework", path: "/services", scrollTo: "Methodology" },
    { name: "Engagement Practices", path: "/services", scrollTo: "engagement" },
    { name: "Career", path: "/career" },
    { name: "Testimonials", path: "/testimonials" },
  ];


  return (
    // <footer className="relative bg-[#0f172a] text-slate-200 overflow-hidden font-sans">
    //   {/* Decorative Background Elements */}
    //   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    //   <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    //   <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
    //     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

    //       {/* Brand Column */}
    //       <div className="lg:col-span-4 space-y-8">
    //         <div className="space-y-4">
    //           <div className="flex items-center gap-3">
    //             <div>
    //               <img width={175} src={Logo} alt="" />
    //               <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">eAspire Technolabs Pvt. Ltd.</p>
    //             </div>
    //           </div>
    //           <p className="text-slate-400 leading-relaxed max-w-sm text-sm">
    //             Subsidiary of <span className="text-white font-medium">Evoke HR Solutions Pvt. Ltd.</span><br />
    //             Empowering businesses globally with next-gen RPO, KPO, and IT Staff Augmentation solutions.
    //           </p>
    //         </div>

    //         <div className="flex gap-3">
    //           {[
    //             {
    //               Icon: Facebook,
    //               url: "https://www.facebook.com/people/E-Aspire-Technolabs-Pvt-ltd/61553618648525/",
    //               label: "Facebook",
    //             },
    //             {
    //               Icon: Linkedin,
    //               url: "https://www.linkedin.com/company/easpire-technolabs-pvt-ltd/",
    //               label: "LinkedIn",
    //             },
    //             {
    //               Icon: Twitter,
    //               url: "https://twitter.com/yourhandle",
    //               label: "Twitter",
    //             },
    //             {
    //               Icon: Instagram,
    //               url: "https://instagram.com/yourhandle",
    //               label: "Instagram",
    //             },
    //           ].map(({ Icon, url, label }, i) => (
    //             <a
    //               key={i}
    //               href={url}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               aria-label={label}
    //               className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-primary hover:-translate-y-1 group"
    //             >
    //               <Icon size={18} className="group-hover:scale-110 transition-transform" />
    //             </a>
    //           ))}
    //         </div>


    //         <div className="p-5 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm">
    //           <div className="flex items-center gap-3 mb-3">
    //             <div>
    //               <img src={StartupIndialogo} alt="" width={180} />
    //             </div>
    //           </div>
    //           <p className="text-[11px] text-slate-500 leading-relaxed">
    //             Recognized by the Department for Promotion of Industry and Internal Trade, Govt. of India.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Links Column */}
    //       <div className="lg:col-span-3 lg:col-start-6 space-y-8">
    //         <h3 className="text-lg font-semibold text-white flex items-center gap-3">
    //           <span className="w-1 h-6 bg-primary rounded-full"></span>
    //           Quick Links
    //         </h3>
    //         <div className="grid grid-cols-1 gap-3">
    //           {footerLinks.map((link) => (
    //             <button
    //               key={link.name}
    //               onClick={() =>
    //                 navigate(link.path, {
    //                   state: link.scrollTo ? { scrollTo: link.scrollTo } : undefined,
    //                 })
    //               }
    //               className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm text-left"
    //             >
    //               <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors"></span>
    //               {link.name}
    //             </button>
    //           ))}
    //         </div>

    //       </div>

    //       {/* Contact Column */}
    //       <div className="lg:col-span-4 space-y-8">
    //         <h3 className="text-lg font-semibold text-white flex items-center gap-3">
    //           <span className="w-1 h-6 bg-primary rounded-full"></span>
    //           Global Presence
    //         </h3>

    //         <div className="space-y-6">
    //           {/* Email & Phone */}
    //           <div className="grid grid-cols-1 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
    //             <a href="mailto:info@easpire.net" className="flex items-center gap-3 group">
    //               <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
    //                 <Mail size={16} />
    //               </div>
    //               <span className="text-sm text-slate-300 group-hover:text-white transition-colors">info@easpire.net</span>
    //             </a>
    //             <div className="flex items-center gap-3">
    //               <div className="p-2 bg-primary/10 text-primary rounded-lg">
    //                 <Phone size={16} />
    //               </div>
    //               <div className="text-sm text-slate-300">
    //                 <span className="mr-3">🇮🇳 +91 7226 998 859</span>
    //                 <span>🇺🇸 +1 6099 345 878</span>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Addresses */}
    //           <div className="relative pl-6 border-l border-white/10 space-y-6">
    //             <div className="relative">
    //               <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-[#0f172a]"></span>
    //               <h4 className="text-white font-medium text-sm mb-1">Headquarters</h4>
    //               <p className="text-xs text-slate-400 leading-relaxed">
    //                 D-1107 to 1111, Ganesh Glory 11, Godrej City Garden Road, Jagatpur, Gota, Ahmedabad, Gujarat, 382481
    //               </p>
    //             </div>

    //             <div className="relative">
    //               <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700 border-2 border-[#0f172a]"></span>
    //               <h4 className="text-white font-medium text-sm mb-1">Pune Branch</h4>
    //               <p className="text-xs text-slate-400 leading-relaxed">
    //                 333, 3rd Floor, Marisoft-3, West Wing, Marigold Premises, Vadgaon Sheri, Pune - 411014
    //               </p>
    //             </div>

    //             <div className="relative">
    //               <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-700 border-2 border-[#0f172a]"></span>
    //               <h4 className="text-white font-medium text-sm mb-1">International Offices</h4>
    //               <div className="space-y-2 mt-2">
    //                 <div className="flex gap-2">
    //                   <span className="text-xs font-bold text-slate-500 w-15">USA</span>
    //                   <p className="text-xs text-slate-400 leading-relaxed">
    //                     5900 Balcones Dr Ste 100 Austin, Texas 78731-4298
    //                   </p>
    //                 </div>
    //                 <div className="flex gap-2">
    //                   <span className="text-xs font-bold text-slate-500 w-18">Malaysia</span>
    //                   <p className="text-xs text-slate-400 leading-relaxed">
    //                     Level 23A, NAZA Towers, 10, Persiaran KLCC, 50088, Kuala Lumpur
    //                   </p>
    //                 </div>
    //                 <div className="flex gap-2">
    //                   <span className="text-xs font-bold text-slate-500 w-15">Singapore</span>
    //                   <p className="text-xs text-slate-400 leading-relaxed">
    //                     7 Temasek Boulevard, Singapore
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>

    //     {/* Bottom Bar */}
    //     <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
    //       <p className="text-slate-500 text-xs">
    //         © {new Date().getFullYear()} e-Aspire Technolabs Pvt. Ltd. All rights reserved.
    //       </p>
    //       <div className="flex items-center gap-6 text-xs text-slate-500">
    //         <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
    //         <a href="/terms-conditions" className="hover:text-primary transition-colors">Terms of Service</a>
    //         <span className="flex items-center gap-1 text-slate-600">
    //           <Globe size={12} />
    //           Design by eAspire Team
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="relative bg-[#0f172a] text-slate-200 overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <img width={175} src={Logo} alt="" />
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">eAspire Technolabs Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm text-sm">
                Subsidiary of <span className="text-white font-medium">Evoke HR Solutions Pvt. Ltd.</span><br />
                Empowering businesses globally with next-gen RPO, KPO, and IT Staff Augmentation solutions.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <img src={StartupIndialogo} alt="" width={180} />
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Recognized by the Department for Promotion of Industry and Internal Trade, Govt. of India.
              </p>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-4 lg:col-start-5 space-y-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Quick Links
            </h3>

            {/* 2 Column Grid */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    navigate(link.path, {
                      state: link.scrollTo ? { scrollTo: link.scrollTo } : undefined,
                    })
                  }
                  className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors"></span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Let’s Talk
            </h3>

            <div className="space-y-6">
              {/* Email & Phone */}
              <div className="grid grid-cols-1 gap-4">
                <a href="mailto:info@easpire.net" className="flex items-center gap-3 group">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">info@easpire.net</span>
                </a>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={16} />
                  </div>
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    <span className="mr-3">IN +91 7226 998 859</span>
                    <span>US +1 6099 345 878</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  {
                    Icon: Facebook,
                    url: "https://www.facebook.com/people/E-Aspire-Technolabs-Pvt-ltd/61553618648525/",
                    label: "Facebook",
                  },
                  {
                    Icon: Linkedin,
                    url: "https://www.linkedin.com/company/easpire-technolabs-pvt-ltd/",
                    label: "LinkedIn",
                  },
                  {
                    Icon: Twitter,
                    url: "https://twitter.com/yourhandle",
                    label: "Twitter",
                  },
                  {
                    Icon: Instagram,
                    url: "https://instagram.com/yourhandle",
                    label: "Instagram",
                  },
                ].map(({ Icon, url, label }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-primary hover:-translate-y-1 group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Addresses */}
              <div className="relative pl-6 border-l border-white/10 space-y-6">
                <div className="relative">
                  <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-[#0f172a]"></span>
                  <h4 className="text-white font-medium text-sm mb-1">Headquarters</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    D-1107 to 1111, Ganesh Glory 11, Godrej City Garden Road, Jagatpur, Gota, Ahmedabad, Gujarat, 382481
                  </p>
                </div>

              </div>

              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-2 pt-2 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} e-Aspire Technolabs Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-400">
              {/* <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> */}
              <a href="/terms-conditions" className="hover:text-primary transition-colors">Terms of Service</a>
              <span className="flex items-center gap-1 text-slate-400">
                <Globe size={12} />
                Design by eAspire Team
              </span>
            </div>
          </div>
        </div>
    </footer>
  );
}