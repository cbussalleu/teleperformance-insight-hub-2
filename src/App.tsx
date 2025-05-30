import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Expectativas from "./pages/Expectativas";
import Percepcion from "./pages/Percepcion";
import CicloVida from "./pages/CicloVida";
import Inclusion from "./pages/Inclusion";
import Competencia from "./pages/Competencia";
import Reposicionamiento from "./pages/Reposicionamiento";
import Conclusiones from "./pages/Conclusiones";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/expectativas" element={<Expectativas />} />
          <Route path="/percepcion" element={<Percepcion />} />
          <Route path="/ciclo-vida" element={<CicloVida />} />
          <Route path="/inclusion" element={<Inclusion />} />
          <Route path="/competencia" element={<Competencia />} />
          <Route path="/reposicionamiento" element={<Reposicionamiento />} />
          <Route path="/conclusiones" element={<Conclusiones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;