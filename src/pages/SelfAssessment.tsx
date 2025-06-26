
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save, CheckCircle, Target, BookOpen, Briefcase } from 'lucide-react';

export default function SelfAssessment() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [responses, setResponses] = useState<Record<string, string>>({});

  const assessmentTypes = {
    'weekly-review': {
      title: 'Weekly Self-Review',
      icon: CheckCircle,
      color: 'emerald',
      questions: [
        'What were your key accomplishments this week?',
        'What challenges did you face and how did you overcome them?',
        'What would you do differently next week?'
      ]
    },
    'goal-progress': {
      title: 'Goal Progress Update',
      icon: Target,
      color: 'indigo',
      questions: [
        'What progress have you made toward your current goals?',
        'What obstacles are preventing you from achieving your goals?',
        'What support do you need to reach your objectives?'
      ]
    },
    'skills-assessment': {
      title: 'Skills Assessment',
      icon: BookOpen,
      color: 'rose',
      questions: [
        'What are your strongest skills and competencies?',
        'Which skills would you like to develop further?',
        'How can you apply your skills more effectively?'
      ]
    },
    'career-development': {
      title: 'Career Development',
      icon: Briefcase,
      color: 'amber',
      questions: [
        'What are your career aspirations for the next year?',
        'What experiences or training would help your career growth?',
        'How do you see yourself contributing to the team\'s success?'
      ]
    }
  };

  const currentAssessment = assessmentTypes[type as keyof typeof assessmentTypes];
  const IconComponent = currentAssessment?.icon || CheckCircle;

  const handleResponseChange = (questionIndex: number, value: string) => {
    setResponses(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Self-assessment submitted:', { type, responses });
    navigate('/');
  };

  if (!currentAssessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <p>Assessment type not found.</p>
              <Button onClick={() => navigate('/')} className="mt-4">
                Return to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4 hover:bg-white/50 transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className={`p-2 bg-${currentAssessment.color}-500 rounded-lg`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <span>{currentAssessment.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentAssessment.questions.map((question, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`question-${index}`}>{question}</Label>
                  <Textarea
                    id={`question-${index}`}
                    value={responses[index] || ''}
                    onChange={(e) => handleResponseChange(index, e.target.value)}
                    placeholder="Enter your response..."
                    className="min-h-24"
                  />
                </div>
              ))}

              <Button 
                type="submit" 
                className="w-full transition-all duration-200 hover:scale-105 hover:shadow-md"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Assessment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
