
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Users, TrendingUp, Clock, Send, BarChart3, FileText, Star } from 'lucide-react';

export default function TeamFeedback() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Team Feedback</h1>
        <p className="text-slate-600">Collect, analyze, and act on feedback from your team members.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <MessageSquare className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-slate-600">Total Feedback</p>
                <p className="text-xl md:text-2xl font-bold text-blue-700">142</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Users className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-slate-600">Team Members</p>
                <p className="text-xl md:text-2xl font-bold text-green-700">24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-slate-600">Avg Rating</p>
                <p className="text-xl md:text-2xl font-bold text-purple-700">4.2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <Clock className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-slate-600">Pending</p>
                <p className="text-xl md:text-2xl font-bold text-orange-700">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="collect" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-slate-100 p-1 rounded-lg">
          <TabsTrigger value="collect" className="transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Send className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Collect Feedback</span>
            <span className="sm:hidden">Collect</span>
          </TabsTrigger>
          <TabsTrigger value="analyze" className="transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Analyze Trends</span>
            <span className="sm:hidden">Analyze</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <FileText className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Generate Reports</span>
            <span className="sm:hidden">Reports</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collect" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-blue-500" />
                  <span>Quick Feedback Request</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Team Members</label>
                  <div className="p-3 border rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                    <p className="text-sm text-slate-600">8 team members selected</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Feedback Topic</label>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                    <option>Communication Skills</option>
                    <option>Leadership Qualities</option>
                    <option>Technical Expertise</option>
                    <option>Team Collaboration</option>
                  </select>
                </div>
                <Button className="w-full transition-all duration-200 hover:scale-105 hover:shadow-md">
                  <Send className="h-4 w-4 mr-2" />
                  Send Feedback Request
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                  <span>Recent Feedback</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alex Chen", topic: "Leadership", rating: 4.5, time: "2 hours ago", avatar: "AC" },
                    { name: "Sarah Johnson", topic: "Communication", rating: 4.2, time: "5 hours ago", avatar: "SJ" },
                    { name: "Mike Torres", topic: "Technical", rating: 4.8, time: "1 day ago", avatar: "MT" },
                  ].map((feedback, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-all duration-200 hover:shadow-sm cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {feedback.avatar}
                        </div>
                        <div>
                          <p className="font-medium">{feedback.name}</p>
                          <p className="text-sm text-slate-600">{feedback.topic}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <p className="font-medium text-green-600">{feedback.rating}</p>
                        </div>
                        <p className="text-xs text-slate-500">{feedback.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analyze" className="space-y-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <span>Feedback Trends Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-green-700 flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Top Strengths</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { skill: "Technical Expertise", percentage: 92, color: "bg-green-500" },
                      { skill: "Team Collaboration", percentage: 88, color: "bg-blue-500" },
                      { skill: "Problem Solving", percentage: 85, color: "bg-purple-500" }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.skill}</span>
                          <span className="text-green-600 font-bold">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-orange-700 flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Growth Areas</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { skill: "Public Speaking", percentage: 68, color: "bg-orange-500" },
                      { skill: "Delegation", percentage: 72, color: "bg-yellow-500" },
                      { skill: "Time Management", percentage: 75, color: "bg-red-500" }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.skill}</span>
                          <span className="text-orange-600 font-bold">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span>AI-Generated Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Individual Performance Report",
                    description: "Detailed analysis per team member",
                    icon: Users,
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Team Health Report", 
                    description: "Overall team dynamics & culture",
                    icon: TrendingUp,
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Growth Recommendations",
                    description: "AI-suggested development plans", 
                    icon: Star,
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Feedback Trends",
                    description: "Historical analysis & patterns",
                    icon: BarChart3,
                    color: "from-orange-500 to-red-500"
                  }
                ].map((report, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="h-24 flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:shadow-lg hover:scale-105 group border-2 hover:border-transparent"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${report.color} group-hover:scale-110 transition-transform duration-200`}>
                      <report.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-sm">{report.title}</span>
                      <span className="text-xs text-slate-600 block">{report.description}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
