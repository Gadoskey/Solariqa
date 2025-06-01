
import { Zap, MessageSquare, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Built for Solana Developers",
      description: "Lightning-fast blockchain with minimal fees. Experience the speed and efficiency that makes Solana the developer's choice."
    },
    {
      icon: MessageSquare,
      title: "Ask Questions Freely",
      description: "From smart contracts to DeFi protocols, no question is too complex. Get expert answers from experienced Solana developers."
    },
    {
      icon: Users,
      title: "Respond to Community Qs",
      description: "Connect with passionate builders, validators, and enthusiasts. Share knowledge and grow together in Web3."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Solariqa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            The ultimate platform for Solana developers to learn, share, and build together
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
