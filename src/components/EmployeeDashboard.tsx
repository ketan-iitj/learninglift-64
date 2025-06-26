import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Users, Clock, CheckCircle, Star, TrendingUp, Target, BookOpen, Briefcase } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function EmployeeDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("feedback-requests");

  const handleProvideFeedback = (requestId: string) => {
    navigate(`/provide-feedback/${requestId}`);
  };

  const handleSelfAssessment = (type: string) => {
    navigate(`/self-assessment/${type}`);
  };

  const handlePeerFeedback = (peerId: string) => {
    navigate(`/peer-feedback/${peerId}`);
  };

  const handleTileClick = (tileType: string) => {
    switch (tileType) {
      case 'feedback-given':
        setActiveTab("feedback-requests");
        break;
      case 'pending-requests':
        setActiveTab("feedback-requests");
        break;
      case 'peer-reviews':
        setActiveTab("peer-feedback");
        break;
      case 'rating':
        setActiveTab("self-feedback");
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-slate-600">Here's your feedback dashboard and pending requests.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card 
          className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
          onClick={() => handleTileClick('feedback-given')}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-700">Feedback Given</p>
                <p className="text-2xl font-bold text-blue-800">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
          onClick={() => handleTileClick('pending-requests')}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-orange-700">Pending Requests</p>
                <p className="text-2xl font-bold text-orange-800">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-green-50 to-green-100 border-green-200"
          onClick={() => handleTileClick('peer-reviews')}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-500 rounded-xl group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-700">Peer Reviews</p>
                <p className="text-2xl font-bold text-green-800">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
          onClick={() => handleTileClick('rating')}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-purple-700">Your Rating</p>
                <p className="text-2xl font-bold text-purple-800">4.3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-slate-100 p-1 rounded-lg">
          <TabsTrigger value="feedback-requests" className="transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm">Feedback Requests</TabsTrigger>
          <TabsTrigger value="self-feedback" className="transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm">Self Assessment</TabsTrigger>
          <TabsTrigger value="peer-feedback" className="transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm">Peer Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="feedback-requests" className="space-y-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Pending Feedback Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "1", requester: "Sarah Johnson (Manager)", topic: "Q4 Performance Review", dueDate: "Dec 15, 2024", urgent: true },
                  { id: "2", requester: "Mike Torres (Peer)", topic: "Project Collaboration", dueDate: "Dec 18, 2024", urgent: false },
                  { id: "3", requester: "Sarah Johnson (Manager)", topic: "Leadership Skills", dueDate: "Dec 20, 2024", urgent: false },
                ].map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-all duration-200 hover:shadow-sm">
                    <div>
                      <h3 className="font-medium">{request.topic}</h3>
                      <p className="text-sm text-slate-600">Requested by: {request.requester}</p>
                      <p className="text-sm text-slate-500">Due: {request.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {request.urgent && (
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">Urgent</span>
                      )}
                      <Button 
                        size="sm"
                        onClick={() => handleProvideFeedback(request.id)}
                        className="transition-all duration-200 hover:scale-105 hover:shadow-md"
                      >
                        Provide Feedback
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="self-feedback" className="space-y-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Self Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-600">Reflect on your performance and growth areas.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => handleSelfAssessment('weekly-review')}
                    className="h-20 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group border-2 hover:border-transparent bg-gradient-to-br from-emerald-50 to-teal-100 hover:from-emerald-100 hover:to-teal-200"
                  >
                    <div className="p-2 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-200 mb-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-emerald-700">Weekly Self-Review</span>
                    <span className="text-sm text-emerald-600">Quick weekly check-in</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => handleSelfAssessment('goal-progress')}
                    className="h-20 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group border-2 hover:border-transparent bg-gradient-to-br from-indigo-50 to-purple-100 hover:from-indigo-100 hover:to-purple-200"
                  >
                    <div className="p-2 bg-indigo-500 rounded-lg group-hover:scale-110 transition-transform duration-200 mb-2">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-indigo-700">Goal Progress Update</span>
                    <span className="text-sm text-indigo-600">Track your objectives</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => handleSelfAssessment('skills-assessment')}
                    className="h-20 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group border-2 hover:border-transparent bg-gradient-to-br from-rose-50 to-pink-100 hover:from-rose-100 hover:to-pink-200"
                  >
                    <div className="p-2 bg-rose-500 rounded-lg group-hover:scale-110 transition-transform duration-200 mb-2">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-rose-700">Skills Assessment</span>
                    <span className="text-sm text-rose-600">Evaluate your competencies</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => handleSelfAssessment('career-development')}
                    className="h-20 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group border-2 hover:border-transparent bg-gradient-to-br from-amber-50 to-orange-100 hover:from-amber-100 hover:to-orange-200"
                  >
                    <div className="p-2 bg-amber-500 rounded-lg group-hover:scale-110 transition-transform duration-200 mb-2">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-amber-700">Career Development</span>
                    <span className="text-sm text-amber-600">Plan your growth path</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="peer-feedback" className="space-y-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Peer Feedback Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-600">Provide feedback to your colleagues.</p>
                <div className="space-y-3">
                  {[
                    { id: "emily", colleague: "Emily Rodriguez", project: "Mobile App Redesign", collaboration: "High", avatar: "ER", color: "from-blue-500 to-purple-500" },
                    { id: "david", colleague: "David Kim", project: "API Integration", collaboration: "Medium", avatar: "DK", color: "from-green-500 to-blue-500" },
                    { id: "lisa", colleague: "Lisa Chang", project: "User Research", collaboration: "High", avatar: "LC", color: "from-purple-500 to-pink-500" },
                  ].map((peer) => (
                    <div key={peer.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-all duration-200 hover:shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${peer.color} rounded-full flex items-center justify-center text-white font-medium text-sm shadow-lg`}>
                          {peer.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium">{peer.colleague}</h3>
                          <p className="text-sm text-slate-600">Project: {peer.project}</p>
                          <p className="text-sm text-slate-500">Collaboration Level: {peer.collaboration}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handlePeerFeedback(peer.id)}
                        className="transition-all duration-200 hover:scale-105 hover:shadow-md"
                      >
                        Give Feedback
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
