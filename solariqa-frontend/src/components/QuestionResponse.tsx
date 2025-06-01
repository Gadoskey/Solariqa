
import { ArrowBigUp } from 'lucide-react';

interface Response {
  id: number;
  author: string;
  votes: number;
  content: string;
}

interface QuestionResponseProps {
  response: Response;
}

const QuestionResponse = ({ response }: QuestionResponseProps) => (
  <div className="bg-gray-50 p-3 rounded border-l-2 border-purple-200">
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{response.author}</span>
      <div className="flex items-center text-xs text-gray-500">
        <ArrowBigUp className="w-3 h-3 mr-1" />

        {response.votes}
      </div>
    </div>
    <p className="text-sm text-gray-600 line-clamp-2">{response.content}</p>
  </div>
);

export default QuestionResponse;
