import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { TopBar } from "./components/TopBar";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Reviews } from "./components/Reviews";
// ❌ Achievements waala import yahan se hata diya hai
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingElements } from "./components/FloatingElements";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <main className="-h-[100dvh] text-[#111827] overflow-x-hidden">
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
            <TopBar />
            <NavBar />
          </div>
          <div style={{ height: '102px' }} />
          
          <Hero />
          <About />
          <Services />
          <Products />
          <Reviews /> {/* Iske andar hi ab 3-cards aur blue strip dono hain */}
          {/* ❌ <Achievements /> ko yahan se poora hata diya */}
          <Contact />
          <Footer />
          <FloatingElements />
        </main>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;