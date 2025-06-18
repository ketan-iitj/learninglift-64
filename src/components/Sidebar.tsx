
import React from 'react';
import { 
  Sidebar as SidebarPrimitive, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Settings, 
  Bell 
} from 'lucide-react';

const menuItems = [
  {
    title: "Dashboard",
    icon: Users,
    url: "#",
    active: true
  },
  {
    title: "Team Feedback",
    icon: MessageSquare,
    url: "#"
  },
  {
    title: "1:1 Sessions",
    icon: Calendar,
    url: "#"
  },
  {
    title: "Notifications",
    icon: Bell,
    url: "#"
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#"
  }
];

export function Sidebar() {
  return (
    <SidebarPrimitive className="border-r border-slate-200 bg-white/80 backdrop-blur-sm">
      <SidebarHeader className="border-b border-slate-200 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FM</span>
          </div>
          <div>
            <h1 className="font-semibold text-slate-900">FeedbackManager</h1>
            <p className="text-xs text-slate-500">AI-Powered Insights</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-slate-500 mb-2">
            MAIN MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`w-full justify-start space-x-3 rounded-lg transition-all ${
                        item.active 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <a href={item.url} className="flex items-center">
                        <IconComponent size={18} />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarPrimitive>
  );
}
