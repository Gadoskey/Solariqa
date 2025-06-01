
import { Tag } from 'lucide-react';

interface TrendingTag {
  name: string;
  count: number;
}

const TrendingTags = () => {
  const trendingTags: TrendingTag[] = [
    { name: "solana", count: 1234 },
    { name: "anchor", count: 567 },
    { name: "rust", count: 445 },
    { name: "smart-contracts", count: 389 },
    { name: "defi", count: 298 },
    { name: "nft", count: 267 },
    { name: "web3", count: 234 },
    { name: "development", count: 189 }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Tags</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trendingTags.map((tag) => (
          <div key={tag.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Tag className="w-4 h-4 text-purple-500 mr-2" />
                <span className="font-medium text-gray-900">{tag.name}</span>
              </div>
              <span className="text-sm text-gray-500">{tag.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTags;
