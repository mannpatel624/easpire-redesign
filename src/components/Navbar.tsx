import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, Twitter, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Logo from "../../public/easpirelogo.png";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";


interface NavItem {
  name: string;
  href: string;
  scrollTo?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "Company Overview", href: "/about", scrollTo: "company-overview" },
      { name: "Mission, Staff & Vision", href: "/about", scrollTo: "mission" },
      { name: "Core Values", href: "/about", scrollTo: "values" },
      { name: "Valued Customers", href: "/about", scrollTo: "customers" },
      { name: "Leadership Team", href: "/about", scrollTo: "team" },
      { name: "Certificate & Awards", href: "/certificate" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Recruitment",
        href: "/services#recruitment",
        children: [
          { name: "Recruitment Process Outsourcing", href: "/rpo" },
          { name: "Corp-to-Corp (C2C)", href: "/c2c" },
          { name: "Direct Staffing", href: "/direct-staffing" },
          { name: "C-Suite & Executive Search", href: "/executive-search" },
        ]
      },
      {
        name: "Accounting & Finance",
        href: "/services#accounting",
        children: [
          { name: "Knowledge Process Outsourcing", href: "/kpo" },
          { name: "Accounting Services", href: "/accounting-services" },
          { name: "CFO & Controller Services", href: "/cfo-controller-services" },
          { name: "Tax Returns", href: "/tax-returns" },
          { name: "Special Projects", href: "/special-projects" },
        ]
      },
      {
        name: "IT Service",
        href: "/services#it-service",
        children: [
          { name: "Consulting", href: "/consulting" },
          { name: "Technology Solutions", href: "/technology-solutions" },
          { name: "Business Platforms", href: "/business-platforms" },
          { name: "Outsourcing", href: "/outsourcing" },
          { name: "Creative & Digital Services", href: "/creative-digital-services" },
          { name: "IT Staff Augmentation", href: "/it-staff-augmentation" },
        ]
      },
      {
        name: "GCC",
        href: "/GCCC",
        children: [
          { name: "GCC", href: "/GCC" }
        ]
      }
    ]
  },
  {
    name: "Product",
    href: "#product",
    children: [
      { name: "JobsKampus", href: "/JobsKampus" },
    ],
  },
  { name: "Success Stories", href: "/success-stories" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [mobileNestedSubmenu, setMobileNestedSubmenu] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>("Recruitment");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar / Subheader */}
      <div className="border-b border-border/10 text-[11px] sm:text-xs py-2 hidden lg:block shadow-sm z-50 relative" style={{ background: '#e5f4fb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6 text-muted-foreground font-medium">
            <a href="mailto:info@easpire.net" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} className="text-primary" />
              <span>info@easpire.net</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <span className="font-bold text-foreground">USA</span>
              <span>+1 6099 345 878</span>
              <span className="text-border">|</span>
              <span>+1 6099 345 879</span>
              <span className="ml-2 font-bold text-foreground">India</span>
              <span>+91 7226 998 859</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <a href="https://www.facebook.com/people/E-Aspire-Technolabs-Pvt-ltd/61553618648525/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
              <a href="https://www.linkedin.com/company/easpire-technolabs-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={14} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Twitter size={14} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground font-medium">
              <span className="flex items-center gap-1"><span className="text-base">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  className="w-[20px] h-auto"
                />
              </span> India</span>
              <span className="flex items-center gap-1"><span className="text-base">
                <img
                  src="https://flagcdn.com/w20/us.png"
                  alt="USA"
                  className="w-[20px] h-auto"
                />
              </span> USA</span>
              <span className="flex items-center gap-1"><span className="text-base">
                <img
                  src="https://flagcdn.com/w20/sg.png"
                  alt="Singapore"
                  className="w-[20px] h-auto"
                />
              </span> Singapore</span>
              <span className="flex items-center gap-1"><span className="text-base">
                <img
                  src="https://flagcdn.com/w20/my.png"
                  alt="Malaysia"
                  className="w-[20px] h-auto"
                />
              </span> Malaysia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-300",
          scrolled ? "shadow-md py-2" : "py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="relative">
                  {/* Logo Graphic */}
                  <div className="flex items-center gap-1">
                    <img width={120} src={Logo} alt="" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger className="bg-transparent text-[15px] font-medium text-foreground/80 hover:text-primary data-[state=open]:text-primary">
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            {item.name === "Services" ? (
                              <div className="flex w-[600px] p-0 bg-popover rounded-lg overflow-hidden">
                                {/* Left Sidebar */}
                                <div className="w-1/3 bg-muted/30 border-r border-border/50 p-2">
                                  {item.children.map((child) => (
                                    <button
                                      key={child.name}
                                      onMouseEnter={() => setActiveServiceCategory(child.name)}
                                      className={cn(
                                        "w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between",
                                        activeServiceCategory === child.name
                                          ? "bg-primary/10 text-primary"
                                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                      )}
                                    >
                                      {child.name}
                                      <ChevronRight size={14} className={cn("transition-transform", activeServiceCategory === child.name ? "opacity-100" : "opacity-50")} />
                                    </button>
                                  ))}
                                </div>
                                {/* Right Content */}
                                <div className="w-2/3 p-4">
                                  {item.children.map((child) => (
                                    <div
                                      key={child.name}
                                      className={cn(
                                        "space-y-1",
                                        activeServiceCategory === child.name ? "block" : "hidden"
                                      )}
                                    >
                                      <div className="mb-3 pb-2 border-b border-border/50">
                                        <h4 className="font-semibold text-foreground">{child.name}</h4>
                                      </div>
                                      <div className="grid grid-cols-1 gap-1">
                                        {child.children?.map((subChild) => (
                                          <NavigationMenuLink asChild key={subChild.name}>
                                            <Link
                                              to={subChild.href}
                                              className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-muted-foreground"
                                            >
                                              {subChild.name}
                                            </Link>
                                          </NavigationMenuLink>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <ul className="grid w-[260px] gap-1 p-2 bg-popover rounded-lg">
                                {item.children.map((child) => (
                                  <li key={child.name}>
                                    <NavigationMenuLink asChild>
                                      <button
                                        onClick={() =>
                                          navigate(child.href, {
                                            state: child.scrollTo ? { scrollTo: child.scrollTo } : undefined,
                                          })
                                        }
                                        className="w-full text-left select-none rounded-md p-3 transition-colors hover:bg-primary/10 hover:text-primary"
                                      >
                                        <div className="text-sm font-medium">{child.name}</div>
                                      </button>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link to={item.href} className={navigationMenuTriggerStyle() + " bg-transparent text-[15px] font-medium text-foreground/80 hover:text-primary"}>
                          {item.name}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuViewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
              </NavigationMenu>

              <div className="ml-4">
                <Link to="/contact">
                  <Button className="rounded-md px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">Contact</Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-border/50 last:border-0">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-3 py-4 text-base font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={cn("transition-transform duration-200", mobileSubmenu === item.name ? "rotate-180" : "")}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-muted/30 rounded-lg mb-2"
                            >
                              <div className="py-2 px-4 space-y-1">
                                {item.children.map((child) => (
                                  <div key={child.name}>
                                    {child.children ? (
                                      <div>
                                        <button
                                          onClick={() => setMobileNestedSubmenu(mobileNestedSubmenu === child.name ? null : child.name)}
                                          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                        >
                                          {child.name}
                                          <ChevronDown
                                            size={14}
                                            className={cn("transition-transform duration-200", mobileNestedSubmenu === child.name ? "rotate-180" : "")}
                                          />
                                        </button>
                                        <AnimatePresence>
                                          {mobileNestedSubmenu === child.name && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: "auto", opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              className="overflow-hidden pl-4 border-l border-border/50 ml-3"
                                            >
                                              {child.children.map((subChild) => (
                                                <Link
                                                  key={subChild.name}
                                                  to={subChild.href}
                                                  className="block px-3 py-2 text-sm text-muted-foreground/80 hover:text-primary transition-colors"
                                                  onClick={() => setIsOpen(false)}
                                                >
                                                  {subChild.name}
                                                </Link>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    ) : (
                                      <button
                                        onClick={() => {
                                          navigate(child.href, {
                                            state: child.scrollTo ? { scrollTo: child.scrollTo } : undefined,
                                          });
                                          setIsOpen(false);
                                        }}
                                        className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                                      >
                                        {child.name}
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-3 py-4 text-base font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 pb-4">
                  <Link to="/contact">
                    <Button className="w-full h-12 text-lg rounded-xl">Contact Us</Button>
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-border space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>info@easpire.net</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span className="font-medium">USA:</span>
                      <span>+1 6099 345 878</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="font-medium">India:</span>
                      <span>+91 7226 998 859</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}