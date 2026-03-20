import { Toaster } from "@/components/ui/sonner";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect, lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import "./types/global.d.ts";

// Lazy load route components for better code splitting
const Landing = lazy(() => import("./pages/Landing.tsx"));
const AuthPage = lazy(() => import("./pages/Auth.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const RPO = lazy(() => import("./pages/RPO.tsx"));
const C2C = lazy(() => import("./pages/C2C.tsx"));
const GCC = lazy(() => import("./pages/GCC.tsx"));
const DirectStaffing = lazy(() => import("./pages/DirectStaffing.tsx"));
const ExecutiveSearch = lazy(() => import("./pages/ExecutiveSearch.tsx"));
const KPO = lazy(() => import("./pages/KPO.tsx"));
const AccountingServices = lazy(() => import("./pages/AccountingServices.tsx"));
const CFOControllerServices = lazy(() => import("./pages/CFOControllerServices.tsx"));
const TaxReturns = lazy(() => import("./pages/TaxReturns.tsx"));
const SpecialProjects = lazy(() => import("./pages/SpecialProjects.tsx"));
const Consulting = lazy(() => import("./pages/Consulting.tsx"));
const TechnologySolutions = lazy(() => import("./pages/TechnologySolutions.tsx"));
const BusinessPlatforms = lazy(() => import("./pages/BusinessPlatforms.tsx"));
const Outsourcing = lazy(() => import("./pages/Outsourcing.tsx"));
const CreativeDigitalServices = lazy(() => import("./pages/CreativeDigitalServices.tsx"));
const ITStaffAugmentation = lazy(() => import("./pages/ITStaffAugmentation.tsx"));
const CampusJobs = lazy(() => import("./pages/CampusJobs.tsx"));
const SuccessStories = lazy(() => import("./pages/SuccessStories.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Certificate = lazy(() => import("./pages/Certificate.tsx"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs.tsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.tsx"));
const Career = lazy(() => import("./pages/Career.tsx"));
const TermsConditions = lazy(() => import("./pages/TermsConditions.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));

// Simple loading fallback for route transitions
function RouteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);


function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <ScrollToTop />
          <RouteSyncer />
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/career" element={<Career />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/rpo" element={<RPO />} />
              <Route path="/c2c" element={<C2C />} />
              <Route path="/GCC" element={<GCC />} />
              <Route path="/direct-staffing" element={<DirectStaffing />} />
              <Route path="/executive-search" element={<ExecutiveSearch />} />
              <Route path="/kpo" element={<KPO />} />
              <Route path="/accounting-services" element={<AccountingServices />} />
              <Route path="/cfo-controller-services" element={<CFOControllerServices />} />
              <Route path="/tax-returns" element={<TaxReturns />} />
              <Route path="/special-projects" element={<SpecialProjects />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/technology-solutions" element={<TechnologySolutions />} />
              <Route path="/business-platforms" element={<BusinessPlatforms />} />
              <Route path="/outsourcing" element={<Outsourcing />} />
              <Route path="/creative-digital-services" element={<CreativeDigitalServices />} />
              <Route path="/it-staff-augmentation" element={<ITStaffAugmentation />} />
              <Route path="/CampusJobs" element={<CampusJobs />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />} /> {/* TODO: change redirect after auth to correct page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);