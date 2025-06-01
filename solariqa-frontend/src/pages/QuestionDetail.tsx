
import { useState } from 'react';
import { ChevronUp, ChevronDown, MessageSquare, ArrowLeft, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const QuestionDetail = () => {
  const [newReply, setNewReply] = useState('');

  const question = {
    id: 1,
    votes: 15,
    title: "How to optimize Solana smart contract for gas efficiency?",
    description: "I'm building a DeFi protocol and want to minimize transaction costs. What are the best practices for writing gas-efficient Solana programs? I've been working on this for weeks and my transaction costs are still too high. Any specific patterns or techniques that experienced developers recommend?",
    tags: ["solana", "smart-contracts", "gas-optimization"],
    author: "Alex Chen",
    date: "2024-01-15",
    time: "10:30 AM",
    answers: 3
  };

  const responses = [
    {
      id: 1,
      author: "Sarah Kim",
      votes: 8,
      date: "2024-01-15",
      time: "2:45 PM",
      content: "Use account compression and minimize instruction data size. Here are some specific techniques:\n\n1. Use smaller data types when possible (u8 instead of u64 if the range allows)\n2. Pack multiple boolean flags into a single byte\n3. Consider using PDAs (Program Derived Addresses) to reduce the number of accounts needed\n4. Batch multiple operations into single transactions when possible\n\nI've seen 40-60% cost reductions using these methods."
    },
    {
      id: 2,
      author: "Maria Santos",
      votes: 5,
      date: "2024-01-15",
      time: "4:20 PM",
      content: "Consider batching transactions and using PDAs efficiently. Also, make sure you're not creating unnecessary accounts. Each account creation costs rent, so reusing accounts where possible can save significant costs."
    },
    {
      id: 3,
      author: "David Kumar",
      votes: 3,
      date: "2024-01-16",
      time: "9:15 AM",
      content: "Profile your program with solana-analyzer tool. This helped me identify bottlenecks I wasn't aware of. Also, consider using Anchor's zero-copy feature for large data structures."
    }
  ];

  const ResponseCard = ({ response }: { response: any }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </button>
          <span className="text-lg font-semibold text-gray-700">{response.votes}</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-gray-900">{response.author}</span>
            <span className="text-sm text-gray-500">{response.date} at {response.time}</span>
          </div>
          
          <div className="text-gray-700 whitespace-pre-line leading-relaxed">
            {response.content}
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <Button variant="ghost" size="sm">
              Reply
            </Button>
            <Button variant="ghost" size="sm">
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Questions
          </Button>
        </div>

        {/* Question */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronUp className="w-6 h-6 text-gray-400" />
              </button>
              <span className="text-xl font-semibold text-gray-700">{question.votes}</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{question.title}</h1>
              
              <div className="text-sm text-gray-500 mb-4">
                Asked by <span className="font-medium text-gray-700">{question.author}</span> on {question.date} at {question.time}
              </div>
              
              <div className="text-gray-700 leading-relaxed mb-4">
                {question.description}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {question.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  {question.answers} answers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Answers Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {responses.length} Answers
          </h2>
          
          <div className="space-y-4">
            {responses.map((response) => (
              <ResponseCard key={response.id} response={response} />
            ))}
          </div>
        </div>

        {/* Add Answer Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Answer</h3>
          
          <Textarea
            placeholder="Share your knowledge and help the community..."
            className="min-h-[120px] mb-4"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Use clear examples and be specific about your solution.
            </div>
            <div className="space-x-2">
              <Button variant="outline">
                Cancel
              </Button>
              <Button>
                Post Answer
              </Button>
            </div>
          </div>
        </div>

        {/* Related Questions */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h3>
          <div className="space-y-2">
            <a href="#" className="block text-purple-600 hover:text-purple-800">
              → Best practices for Solana program testing
            </a>
            <a href="#" className="block text-purple-600 hover:text-purple-800">
              → How to handle large data structures in Solana
            </a>
            <a href="#" className="block text-purple-600 hover:text-purple-800">
              → Solana transaction fees explained
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default QuestionDetail;
