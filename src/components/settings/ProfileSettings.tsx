
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProfileSettingsProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export function ProfileSettings({ theme, onThemeChange }: ProfileSettingsProps) {
  const { toast } = useToast();

  const handleThemeChange = (newTheme: string) => {
    onThemeChange(newTheme);
    toast({
      title: "Theme Updated",
      description: `Theme changed to ${newTheme}`,
    });
  };

  return (
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
  );
}
