
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle, Plus, User, Calendar } from 'lucide-react';

export default function ActionItemsPage() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Action Items</h1>
          <p className="text-slate-600">Track and manage action items from feedback and 1:1 sessions.</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Action Item</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">Completed</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">In Progress</p>
                <p className="text-2xl font-bold">7</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">Overdue</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">This Week</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Action Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Improve presentation skills",
                assignee: "Alex Chen",
                dueDate: "Dec 30, 2024",
                priority: "High",
                status: "In Progress",
                source: "Performance Review"
              },
              {
                title: "Complete React training course",
                assignee: "Sarah Johnson",
                dueDate: "Jan 15, 2025",
                priority: "Medium",
                status: "Not Started",
                source: "1:1 Session"
              },
              {
                title: "Lead team standup meetings",
                assignee: "Mike Torres",
                dueDate: "Dec 25, 2024",
                priority: "High",
                status: "Overdue",
                source: "Feedback Session"
              },
              {
                title: "Mentor junior developers",
                assignee: "Lisa Wang",
                dueDate: "Jan 10, 2025",
                priority: "Medium",
                status: "In Progress",
                source: "Career Development"
              },
              {
                title: "Attend communication workshop",
                assignee: "John Smith",
                dueDate: "Dec 28, 2024",
                priority: "Low",
                status: "Not Started",
                source: "Peer Feedback"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-slate-50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-slate-900">{item.title}</h3>
                  <Badge variant={
                    item.status === 'Completed' ? 'default' :
                    item.status === 'In Progress' ? 'secondary' :
                    item.status === 'Overdue' ? 'destructive' : 'outline'
                  }>
                    {item.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-6 text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{item.assignee}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Due: {item.dueDate}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.priority}
                  </Badge>
                  <span className="text-slate-500">From: {item.source}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
