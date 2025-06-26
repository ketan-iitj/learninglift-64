
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageSquare, Calendar, User, X } from 'lucide-react';

export default function FeedbackGiven() {
  const navigate = useNavigate();
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null);

  const feedbackHistory = [
    {
      id: "1",
      recipient: "Emily Rodriguez",
      topic: "Project Leadership",
      date: "Dec 10, 2024",
      rating: 4,
      status: "Completed",
      project: "Mobile App Redesign",
      details: "Emily demonstrated excellent leadership skills during the mobile app redesign project. She effectively coordinated team efforts and maintained clear communication throughout the project timeline.",
      strengths: ["Clear communication", "Team coordination", "Problem-solving"],
      improvements: ["Could delegate more effectively"]
    },
    {
      id: "2",
      recipient: "David Kim",
      topic: "Technical Skills",
      date: "Dec 8, 2024",
      rating: 5,
      status: "Completed",
      project: "API Integration",
      details: "David showed exceptional technical expertise in API integration. His code quality and documentation were outstanding, making it easy for the team to understand and maintain.",
      strengths: ["Code quality", "Documentation", "Technical expertise"],
      improvements: ["Continue sharing knowledge with junior developers"]
    },
    {
      id: "3",
      recipient: "Lisa Chang",
      topic: "Collaboration",
      date: "Dec 5, 2024",
      rating: 4,
      status: "Completed",
      project: "User Research",
      details: "Lisa worked collaboratively throughout the user research phase. She was receptive to feedback and contributed valuable insights to the project.",
      strengths: ["Team collaboration", "Research skills", "Open to feedback"],
      improvements: ["Could take more initiative in leading discussions"]
    },
    {
      id: "4",
      recipient: "Mike Torres",
      topic: "Problem Solving",
      date: "Dec 3, 2024",
      rating: 3,
      status: "Completed",
      project: "Bug Fixes",
      details: "Mike approached problem-solving methodically during the bug fixing phase. While effective, there's room for improvement in exploring alternative solutions.",
      strengths: ["Methodical approach", "Attention to detail"],
      improvements: ["Explore more creative solutions", "Seek help when stuck"]
    }
  ];

  const selectedFeedbackData = feedbackHistory.find(f => f.id === selectedFeedback);

  const handleViewDetails = (feedbackId: string) => {
    setSelectedFeedback(feedbackId);
  };

  const closeDetails = () => {
    setSelectedFeedback(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4 hover:bg-white/50 transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center">
            <MessageSquare className="h-8 w-8 text-blue-500 mr-3" />
            Feedback Given
          </h1>
          <p className="text-slate-600">Review all the feedback you've provided to your colleagues.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbackHistory.map((feedback) => (
            <Card key={feedback.id} className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white border-2 hover:border-blue-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{feedback.topic}</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {feedback.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-slate-600">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{feedback.recipient}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-slate-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{feedback.date}</span>
                </div>

                <div className="text-sm text-slate-500">
                  Project: {feedback.project}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-slate-700">Rating:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 w-4 rounded-full ${
                            i < feedback.rating ? 'bg-yellow-400' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs"
                    onClick={() => handleViewDetails(feedback.id)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {feedbackHistory.length === 0 && (
          <Card className="text-center p-12">
            <CardContent>
              <MessageSquare className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-600 mb-2">No feedback given yet</h3>
              <p className="text-slate-500">Start providing feedback to your colleagues to see your history here.</p>
            </CardContent>
          </Card>
        )}

        {/* Details Modal */}
        {selectedFeedback && selectedFeedbackData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{selectedFeedbackData.topic}</CardTitle>
                  <p className="text-slate-600">Feedback for {selectedFeedbackData.recipient}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={closeDetails}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-slate-700">Date:</span>
                    <p className="text-slate-600">{selectedFeedbackData.date}</p>
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Project:</span>
                    <p className="text-slate-600">{selectedFeedbackData.project}</p>
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Status:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 ml-2">
                      {selectedFeedbackData.status}
                    </Badge>
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Rating:</span>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 w-4 rounded-full mr-1 ${
                            i < selectedFeedbackData.rating ? 'bg-yellow-400' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Feedback Details</h4>
                  <p className="text-slate-600 leading-relaxed">{selectedFeedbackData.details}</p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Strengths</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedFeedbackData.strengths.map((strength, index) => (
                      <li key={index} className="text-slate-600">{strength}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Areas for Improvement</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedFeedbackData.improvements.map((improvement, index) => (
                      <li key={index} className="text-slate-600">{improvement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
