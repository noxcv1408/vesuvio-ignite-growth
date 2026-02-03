import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Language route wrapper
const LanguageRoutes = () => (
  <Routes>
    {/* Italian routes (default - no prefix) */}
    <Route path="/" element={<Index />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    
    {/* English routes */}
    <Route path="/en" element={<Index />} />
    <Route path="/en/services" element={<Services />} />
    <Route path="/en/about" element={<About />} />
    
    {/* Russian routes */}
    <Route path="/ru" element={<Index />} />
    <Route path="/ru/services" element={<Services />} />
    <Route path="/ru/about" element={<About />} />
    
    {/* Redirect /it to root for consistency */}
    <Route path="/it" element={<Navigate to="/" replace />} />
    <Route path="/it/*" element={<Navigate to="/" replace />} />
    
    {/* Catch-all */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <LanguageRoutes />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
