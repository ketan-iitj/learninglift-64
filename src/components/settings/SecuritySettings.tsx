
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

interface SecuritySettingsProps {
  onPasswordUpdate: () => void;
}

export function SecuritySettings({ onPasswordUpdate }: SecuritySettingsProps) {
  return (
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
          <Button className="w-full" onClick={onPasswordUpdate}>Update Password</Button>
          
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
  );
}
