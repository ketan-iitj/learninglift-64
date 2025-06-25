
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Users, Calendar, Heart, Frown, Smile, Meh } from 'lucide-react';

export default function TeamSentiment() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Team Sentiment Analysis</h1>
        <p className="text-slate-600">Monitor and track your team's overall mood and satisfaction levels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">Overall Score</p>
                <p className="text-2xl font-bold">8.2/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">Weekly Change</p>
                <p className="text-2xl font-bold">+0.5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">Responses</p>
                <p className="text-2xl font-bold">18/24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-slate-600">Last Updated</p>
                <p className="text-2xl font-bold">Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Smile className="h-6 w-6 text-green-500" />
                  <span>Very Positive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Smile className="h-6 w-6 text-blue-500" />
                  <span>Positive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <span className="text-sm font-medium">35%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Meh className="h-6 w-6 text-yellow-500" />
                  <span>Neutral</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <span className="text-sm font-medium">15%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Frown className="h-6 w-6 text-orange-500" />
                  <span>Negative</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <span className="text-sm font-medium">5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Member Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alex Chen", sentiment: 9.2, trend: "up", status: "Very Positive" },
                { name: "Sarah Johnson", sentiment: 8.5, trend: "up", status: "Positive" },
                { name: "Mike Torres", sentiment: 7.8, trend: "down", status: "Positive" },
                { name: "Lisa Wang", sentiment: 8.9, trend: "up", status: "Very Positive" },
                { name: "John Smith", sentiment: 6.5, trend: "neutral", status: "Neutral" },
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-slate-600">{member.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{member.sentiment}/10</span>
                    {member.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {member.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    {member.trend === 'neutral' && <div className="h-4 w-4"></div>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
