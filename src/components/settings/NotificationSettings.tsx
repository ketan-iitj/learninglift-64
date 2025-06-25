
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Notification Preferences</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-semibold">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Daily Summary</p>
                  <p className="text-sm text-slate-600">Daily digest of team activities</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={notifications.dailySummary}
                  onChange={(e) => onNotificationChange({...notifications, dailySummary: e.target.checked})}
                  className="w-4 h-4" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Reports</p>
                  <p className="text-sm text-slate-600">Comprehensive weekly insights</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={notifications.weeklyReports}
                  onChange={(e) => onNotificationChange({...notifications, weeklyReports: e.target.checked})}
                  className="w-4 h-4" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Urgent Alerts</p>
                  <p className="text-sm text-slate-600">Critical issues requiring attention</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={notifications.urgentAlerts}
                  onChange={(e) => onNotificationChange({...notifications, urgentAlerts: e.target.checked})}
                  className="w-4 h-4" 
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-semibold">In-App Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Feedback</p>
                  <p className="text-sm text-slate-600">When team members submit feedback</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={notifications.newFeedback}
                  onChange={(e) => onNotificationChange({...notifications, newFeedback: e.target.checked})}
                  className="w-4 h-4" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">AI Insights</p>
                  <p className="text-sm text-slate-600">New AI-generated insights</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={notifications.aiInsights}
                  onChange={(e) => onNotificationChange({...notifications, aiInsights: e.target.checked})}
                  className="w-4 h-4" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session Reminders</p>
                  <p className="text-sm text-slate-600">1:1 meeting reminders</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={notifications.sessionReminders}
                  onChange={(e) => onNotificationChange({...notifications, sessionReminders: e.target.checked})}
                  className="w-4 h-4" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t">
          <Button onClick={onSave} className="w-full">
            Apply Notification Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
