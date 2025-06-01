
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Solariqa: The Q&A Community for{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Solana Developers
            </span>{' '}
            and Enthusiasts
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed">
            Join thousands of developers building the future of blockchain. Ask questions, share knowledge, 
            and grow together in the fastest-growing crypto ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
              Ask a Question
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              Browse Questions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
