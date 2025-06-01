
import { Button } from "@/components/ui/button";
import QuestionCard from './QuestionCard';
import TrendingTags from './TrendingTags';

const Questions = () => {
  const recentQuestions = [
    {
      id: 1,
      votes: 15,
      title: "How to optimize Solana smart contract for gas efficiency?",
      description: "I'm building a DeFi protocol and want to minimize transaction costs. What are the best practices for writing gas-efficient Solana programs?",
      tags: ["solana", "smart-contracts", "gas-optimization"],
      answers: 3,
      author: "Alex Chen",
      date: "2024-01-15",
      time: "10:30 AM",
      responses: [
        { id: 1, author: "Sarah Kim", votes: 8, content: "Use account compression and minimize instruction data size..." },
        { id: 2, author: "Maria Santos", votes: 5, content: "Consider batching transactions and using PDAs efficiently..." },
        { id: 3, author: "David Kumar", votes: 3, content: "Profile your program with solana-analyzer tool..." }
      ]
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
      time: "3:45 PM",
      responses: [
        { id: 4, author: "James Wilson", votes: 12, content: "Anchor provides better DX with automatic serialization..." },
        { id: 5, author: "Emma Rodriguez", votes: 7, content: "Native programs give you more control over instruction layout..." }
      ]
    },
    {
      id: 3,
      votes: 8,
      title: "Best wallet integration for Solana dApps",
      description: "Looking for recommendations on wallet adapters for my React dApp. Need to support Phantom, Solflare, and other popular wallets.",
      tags: ["wallet", "dapp", "integration"],
      answers: 2,
      author: "Michael Chang",
      date: "2024-01-13",
      time: "8:20 AM",
      responses: [
        { id: 6, author: "Lisa Park", votes: 4, content: "Use @solana/wallet-adapter-react package..." }
      ]
    }
  ];

  const topQuestions = [
    {
      id: 4,
      votes: 89,
      title: "Complete guide to Solana program architecture",
      description: "What are the fundamental concepts every Solana developer should understand? Looking for a comprehensive overview of accounts, programs, and transactions.",
      tags: ["architecture", "beginner", "solana"],
      answers: 12,
      author: "Dr. Robert Kim",
      date: "2024-01-10",
      time: "2:15 PM",
      responses: [
        { id: 7, author: "Anna Foster", votes: 45, content: "Start with understanding the account model - everything is an account..." },
        { id: 8, author: "David Liu", votes: 38, content: "Programs are stateless and data is stored in separate accounts..." },
        { id: 9, author: "Sarah Ahmed", votes: 29, content: "Transaction structure is key - understand instructions and signers..." }
      ]
    },
    {
      id: 5,
      votes: 67,
      title: "Cross-program invocation (CPI) best practices",
      description: "How to properly implement CPI in Solana programs? Need examples of secure cross-program communication patterns.",
      tags: ["cpi", "security", "advanced"],
      answers: 8,
      author: "Maria Santos",
      date: "2024-01-12",
      time: "11:00 AM",
      responses: [
        { id: 10, author: "Alex Chen", votes: 34, content: "Always validate program IDs and use invoke_signed for PDAs..." },
        { id: 11, author: "Emma Rodriguez", votes: 21, content: "Check account ownership before CPI calls..." }
      ]
    }
  ];

  const unansweredQuestions = [
    {
      id: 6,
      votes: 5,
      title: "Solana mobile development with React Native",
      description: "Has anyone successfully integrated Solana wallet functionality into a React Native app? Looking for guidance on mobile-specific considerations.",
      tags: ["mobile", "react-native", "solana"],
      answers: 0,
      author: "Jennifer Wu",
      date: "2024-01-15",
      time: "4:20 PM",
      responses: []
    },
    {
      id: 7,
      votes: 3,
      title: "Custom instruction data serialization patterns",
      description: "What are the best practices for custom serialization in Solana programs when Borsh isn't sufficient?",
      tags: ["serialization", "advanced", "programs"],
      answers: 0,
      author: "Carlos Martinez",
      date: "2024-01-14",
      time: "9:30 AM",
      responses: []
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recent Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Questions</h2>
          <div className="space-y-4">
            {recentQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>

        {/* Top Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Questions</h2>
          <div className="space-y-4">
            {topQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>

        {/* Unanswered Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Unanswered Questions</h2>
          <div className="space-y-4">
            {unansweredQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>

        {/* Trending Tags */}
        <TrendingTags />

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join the Community?</h3>
          <p className="text-purple-100 mb-6">Ask your first question and get expert answers from Solana developers worldwide.</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Ask a Question
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
