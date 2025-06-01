
import { useState } from 'react';
import { Search, Filter, ChevronUp, MessageSquare, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('recent');

  const allQuestions = [
    {
      id: 1,
      votes: 15,
      title: "How to optimize Solana smart contract for gas efficiency?",
      description: "I'm building a DeFi protocol and want to minimize transaction costs. What are the best practices for writing gas-efficient Solana programs?",
      tags: ["solana", "smart-contracts", "gas-optimization"],
      answers: 3,
      author: "Alex Chen",
      date: "2024-01-15",
      time: "10:30 AM"
    },
    {
      id: 2,
      votes: 23,
      title: "Anchor framework vs native Solana programs",
      description: "When should I use Anchor framework versus writing native Solana programs? What are the trade-offs in terms of performance and development speed?",
      tags: ["anchor", "solana", "development"],
      answers: 5,
      author: "Sophie Taylor",
      date: "2024-01-14",
      time: "3:45 PM"
    },
    {
      id: 3,
      votes: 89,
      title: "Complete guide to Solana program architecture",
      description: "What are the fundamental concepts every Solana developer should understand? Looking for a comprehensive overview of accounts, programs, and transactions.",
      tags: ["architecture", "beginner", "solana"],
      answers: 12,
      author: "Dr. Robert Kim",
      date: "2024-01-10",
      time: "2:15 PM"
    },
    {
      id: 4,
      votes: 67,
      title: "Cross-program invocation (CPI) best practices",
      description: "How to properly implement CPI in Solana programs? Need examples of secure cross-program communication patterns.",
      tags: ["cpi", "security", "advanced"],
      answers: 8,
      author: "Maria Santos",
      date: "2024-01-12",
      time: "11:00 AM"
    },
    {
      id: 5,
      votes: 8,
      title: "Best wallet integration for Solana dApps",
      description: "Looking for recommendations on wallet adapters for my React dApp. Need to support Phantom, Solflare, and other popular wallets.",
      tags: ["wallet", "dapp", "integration"],
      answers: 2,
      author: "Michael Chang",
      date: "2024-01-13",
      time: "8:20 AM"
    },
    {
      id: 6,
      votes: 5,
      title: "Solana mobile development with React Native",
      description: "Has anyone successfully integrated Solana wallet functionality into a React Native app? Looking for guidance on mobile-specific considerations.",
      tags: ["mobile", "react-native", "solana"],
      answers: 0,
      author: "Jennifer Wu",
      date: "2024-01-15",
      time: "4:20 PM"
    }
  ];

  const QuestionCard = ({ question }: { question: any }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronUp className="w-5 h-5 text-gray-400" />
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
          
          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

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
              <Button variant="outline" size="sm">
                View Full
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Questions</h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search questions..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant={filter === 'recent' ? 'default' : 'outline'}
                onClick={() => setFilter('recent')}
                size="sm"
              >
                Most Recent
              </Button>
              <Button 
                variant={filter === 'answered' ? 'default' : 'outline'}
                onClick={() => setFilter('answered')}
                size="sm"
              >
                Most Answered
              </Button>
              <Button 
                variant={filter === 'unanswered' ? 'default' : 'outline'}
                onClick={() => setFilter('unanswered')}
                size="sm"
              >
                Unanswered
              </Button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['solana', 'anchor', 'rust', 'smart-contracts', 'defi', 'nft', 'web3'].map((tag) => (
                <button key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full hover:bg-purple-200 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4 mb-8">
          {allQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;
