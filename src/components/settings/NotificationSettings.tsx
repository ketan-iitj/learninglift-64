
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Bell } from 'lucide-react';

interface NotificationSettingsProps {
  notifications: {
    dailySummary: boolean;
    weeklyReports: boolean;
    urgentAlerts: boolean;
    newFeedback: boolean;
    aiInsights: boolean;
    sessionReminders: boolean;
  };
  onNotificationChange: (notifications: any) => void;
  onSave: () => void;
}

export function NotificationSettings({ notifications, onNotificationChange, onSave }: NotificationSettingsProps) {
  const handleToggle = (key: string, value: boolean) => {
    onNotificationChange({
      ...notifications,
      [key]: value
    });
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-blue-500" />
          <span>Notification Preferences</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-semibold text-slate-800">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Daily Summary</p>
                  <p className="text-sm text-slate-600">Daily digest of team activities</p>
                </div>
                <Switch 
                  checked={notifications.dailySummary}
                  onCheckedChange={(checked) => handleToggle('dailySummary', checked)}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Weekly Reports</p>
                  <p className="text-sm text-slate-600">Comprehensive weekly insights</p>
                </div>
                <Switch 
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => handleToggle('weeklyReports', checked)}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Urgent Alerts</p>
                  <p className="text-sm text-slate-600">Critical issues requiring attention</p>
                </div>
                <Switch 
                  checked={notifications.urgentAlerts}
                  onCheckedChange={(checked) => handleToggle('urgentAlerts', checked)}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-semibold text-slate-800">In-App Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">New Feedback</p>
                  <p className="text-sm text-slate-600">When team members submit feedback</p>
                </div>
                <Switch 
                  checked={notifications.newFeedback}
                  onCheckedChange={(checked) => handleToggle('newFeedback', checked)}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">AI Insights</p>
                  <p className="text-sm text-slate-600">New AI-generated insights</p>
                </div>
                <Switch 
                  checked={notifications.aiInsights}
                  onCheckedChange={(checked) => handleToggle('aiInsights', checked)}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Session Reminders</p>
                  <p className="text-sm text-slate-600">1:1 meeting reminders</p>
                </div>
                <Switch 
                  checked={notifications.sessionReminders}
                  onCheckedChange={(checked) => handleToggle('sessionReminders', checked)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t">
          <Button 
            onClick={onSave} 
            className="w-full md:w-auto px-8 transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            Apply Notification Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
