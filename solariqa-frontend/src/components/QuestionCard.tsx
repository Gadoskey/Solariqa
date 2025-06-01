
import { ArrowBigUp , MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import QuestionResponse from './QuestionResponse';

interface Response {
  id: number;
  author: string;
  votes: number;
  content: string;
}

interface Question {
  id: number;
  votes: number;
  title: string;
  description: string;
  tags: string[];
  answers: number;
  author: string;
  date: string;
  time: string;
  responses?: Response[];
}

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <button className="p-1 hover:bg-gray-100 rounded">
          <ArrowBigUp className="w-5 h-5 text-gray-400" />
        </button>
        <span className="text-lg font-semibold text-gray-700">{question.votes}</span>
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
            {question.title}
          </h3>
          <div className="text-sm text-gray-500 mt-1 sm:mt-0">
            by <span className="font-medium text-gray-700">{question.author}</span> on {question.date} at {question.time}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{question.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {question.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Responses Section */}
        {question.responses && question.responses.length > 0 && (
          <div className="mb-4 space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Top Responses:</h4>
            {question.responses.slice(0, 3).map((response: Response) => (
              <QuestionResponse key={response.id} response={response} />
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {question.answers} answers
            </span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Reply
            </Button>
            {question.answers > 3 && (
              <Button variant="outline" size="sm">
                View All
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionCard;
