
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { SidebarProvider } from '@/components/ui/sidebar';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
