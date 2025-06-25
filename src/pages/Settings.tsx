import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, Palette, Bot, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    // Here you would typically apply the theme change
    toast({
      title: "Theme Updated",
      description: `Theme changed to ${newTheme}`,
    });
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input type="text" defaultValue="Sarah Chen" className="w-full p-3 border rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" defaultValue="sarah.chen@company.com" className="w-full p-3 border rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Role</label>
                  <input type="text" defaultValue="Engineering Manager" className="w-full p-3 border rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Engineering</option>
                    <option>Product</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <Button className="w-full">Update Profile</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Theme</label>
                  <div className="flex space-x-2">
                    {['light', 'dark', 'system'].map((themeOption) => (
                      <Button
                        key={themeOption}
                        variant={theme === themeOption ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handleThemeChange(themeOption)}
                        className="capitalize"
                      >
                        {themeOption}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Zone</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Pacific Time (PT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Central Time (CT)</option>
                    <option>Eastern Time (ET)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date Format</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Show Onboarding Tips</p>
                    <p className="text-sm text-slate-600">Display helpful tips throughout the app</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
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
                        onChange={(e) => setNotifications({...notifications, dailySummary: e.target.checked})}
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
                        onChange={(e) => setNotifications({...notifications, weeklyReports: e.target.checked})}
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
                        onChange={(e) => setNotifications({...notifications, urgentAlerts: e.target.checked})}
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
                        onChange={(e) => setNotifications({...notifications, newFeedback: e.target.checked})}
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
                        onChange={(e) => setNotifications({...notifications, aiInsights: e.target.checked})}
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
                        onChange={(e) => setNotifications({...notifications, sessionReminders: e.target.checked})}
                        className="w-4 h-4" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <Button onClick={handleNotificationSave} className="w-full">
                  Apply Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span>AI Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="font-semibold">Analysis Settings</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Feedback Analysis Frequency</label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>Real-time</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Insight Sensitivity</label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>High (More insights)</option>
                        <option>Medium (Balanced)</option>
                        <option>Low (Key insights only)</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Auto-generate Action Items</p>
                        <p className="text-sm text-slate-600">AI creates suggested actions from feedback</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="font-semibold">Reporting Preferences</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Report Detail Level</label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>Comprehensive</option>
                        <option>Executive Summary</option>
                        <option>Key Metrics Only</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Include Trend Analysis</p>
                        <p className="text-sm text-slate-600">Historical comparison in reports</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Predictive Insights</p>
                        <p className="text-sm text-slate-600">AI predictions about team performance</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Team Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Team Members</h3>
                  <Button>Add Team Member</Button>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Alex Chen", role: "Senior Engineer", status: "Active", lastFeedback: "2 days ago" },
                    { name: "Sarah Johnson", role: "UX Designer", status: "Active", lastFeedback: "1 day ago" },
                    { name: "Mike Torres", role: "Product Manager", status: "Active", lastFeedback: "3 days ago" },
                    { name: "Lisa Wang", role: "Marketing Specialist", status: "Active", lastFeedback: "1 week ago" },
                  ].map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                          <span className="font-medium text-slate-600">{member.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-slate-600">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                          {member.status}
                        </span>
                        <p className="text-xs text-slate-500 mt-1">Last feedback: {member.lastFeedback}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Password & Authentication</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Password</label>
                  <input type="password" className="w-full p-3 border rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Password</label>
                  <input type="password" className="w-full p-3 border rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm New Password</label>
                  <input type="password" className="w-full p-3 border rounded-lg" />
                </div>
                <Button className="w-full" onClick={handlePasswordUpdate}>Update Password</Button>
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-slate-600">Add extra security to your account</p>
                    </div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Login Notifications</p>
                      <p className="text-sm text-slate-600">Get notified of new login attempts</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Privacy & Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Data Sharing</p>
                    <p className="text-sm text-slate-600">Share anonymized data for AI improvements</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Analytics Tracking</p>
                    <p className="text-sm text-slate-600">Help improve the app with usage analytics</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-slate-600">Auto-logout after inactivity</p>
                  </div>
                  <select className="p-2 border rounded text-sm">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option>Never</option>
                  </select>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <Button variant="outline" className="w-full">Download My Data</Button>
                  <Button variant="outline" className="w-full">Export Account Settings</Button>
                  <Button variant="destructive" className="w-full">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
