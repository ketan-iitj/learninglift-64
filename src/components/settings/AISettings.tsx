
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export function AISettings() {
  return (
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
  );
}
