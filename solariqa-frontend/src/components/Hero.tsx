import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Solariqa: The Q&A Community for{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Solana Developers
            </span>{" "}
            and Enthusiasts
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed">
            Join thousands of developers building the future of blockchain. Ask
            questions, share knowledge, and grow together in the fastest-growing
            crypto ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#3C1361] border-[#3C1361] text-white hover:bg-[#53277E] hover:border-[#53277E] transition-colors duration-300 text-lg px-8 py-3"
            >
              Ask a Question
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white border-[#3C1361] text-[#3C1361] hover:bg-[#F3F0FF] hover:border-[#53277E] hover:text-[#53277E] transition-colors duration-300 text-lg px-8 py-3"
            >
              Explore Questions
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
