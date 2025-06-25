
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TemplateDetails() {
  const navigate = useNavigate();

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Button variant="ghost" onClick={() => navigate('/sessions')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Sessions
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">High Performer Check-in Template</CardTitle>
            <Badge variant="secondary">Performance-Based</Badge>
          </div>
          <p className="text-slate-600">Designed for team members who are exceeding expectations and ready for growth opportunities.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="text-sm">45-60 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-500" />
              <span className="text-sm">High Performers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-500" />
              <span className="text-sm">Growth Focused</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Discussion Topics</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900">Career Growth Opportunities</h4>
                <p className="text-sm text-blue-700">Explore potential career paths and advancement opportunities within the organization.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900">Leadership Development</h4>
                <p className="text-sm text-green-700">Discuss leadership skills and opportunities to mentor junior team members.</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900">Advanced Project Assignments</h4>
                <p className="text-sm text-purple-700">Consider challenging projects that align with their growth goals.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suggested Questions</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• What aspects of your current role energize you the most?</li>
              <li>• Where do you see yourself in the next 2-3 years?</li>
              <li>• What new skills would you like to develop?</li>
              <li>• How can I better support your professional growth?</li>
              <li>• Are there any leadership opportunities you're interested in?</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Button className="flex-1">Use This Template</Button>
            <Button variant="outline">Customize Template</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
