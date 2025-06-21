
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LoginForm } from "@/components/LoginForm";
import { Header } from "@/components/Header";
import Index from "./pages/Index";
import TeamFeedback from "./pages/TeamFeedback";
import OneOnOneSessions from "./pages/OneOnOneSessions";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar";
import { EmployeeDashboard } from "@/components/EmployeeDashboard";

const queryClient = new QueryClient();

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  // Employee users get limited access with header
  if (user.role === 'employee') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <EmployeeDashboard />
      </div>
    );
  }

  // Manager users get full access with sidebar (no header)
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/feedback" element={<TeamFeedback />} />
            <Route path="/sessions" element={<OneOnOneSessions />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
