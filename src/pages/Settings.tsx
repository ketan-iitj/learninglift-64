
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { ProfileSettings } from '@/components/settings/ProfileSettings';
import { NotificationSettings } from '@/components/settings/NotificationSettings';
import { AISettings } from '@/components/settings/AISettings';
import { TeamManagement } from '@/components/settings/TeamManagement';
import { SecuritySettings } from '@/components/settings/SecuritySettings';

export default function Settings() {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState({
    dailySummary: true,
    weeklyReports: true,
    urgentAlerts: true,
    newFeedback: true,
    aiInsights: true,
    sessionReminders: true
  });
  const { toast } = useToast();

  const handleNotificationSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const handlePasswordUpdate = () => {
    toast({
      title: "Password Updated",
      description: "Your password has been successfully changed.",
    });
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-600">Customize your FeedbackManager experience and manage team configurations.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <ProfileSettings theme={theme} onThemeChange={setTheme} />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettings 
            notifications={notifications}
            onNotificationChange={setNotifications}
            onSave={handleNotificationSave}
          />
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <AISettings />
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <TeamManagement />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecuritySettings onPasswordUpdate={handlePasswordUpdate} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
