
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

export function TeamManagement() {
  const teamMembers = [
    { name: "Alex Chen", role: "Senior Engineer", status: "Active", lastFeedback: "2 days ago" },
    { name: "Sarah Johnson", role: "UX Designer", status: "Active", lastFeedback: "1 day ago" },
    { name: "Mike Torres", role: "Product Manager", status: "Active", lastFeedback: "3 days ago" },
    { name: "Lisa Wang", role: "Marketing Specialist", status: "Active", lastFeedback: "1 week ago" },
  ];

  return (
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
            {teamMembers.map((member, index) => (
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
  );
}
