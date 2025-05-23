import React from "react";

// Card Component
interface CardProps {
  letter: string;
  title: string;
  description: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Card: React.FC<CardProps> = ({ letter, title, description, position }) => {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-y-1/4 -translate-x-1/2",
    "top-right": "top-0 right-0 -translate-y-1/14 translate-x-1/2",
    "bottom-left": "bottom-0 left-0 translate-y-1/22 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0 translate-y-1/7 translate-x-1/2",
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-85 h-35`}>
      <div className="w-full h-full backdrop-blur-sm rounded-xl p-6 flex flex-col justify-start text-black border border-black/10 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-4xl font-bold text-black">{letter}</span>
          <h3 className="text-xl font-medium tracking-wider text-black">{title}</h3>
        </div>
        <p className="text-sm font-light text-left text-black/80">{description}</p>
      </div>
    </div>
  );
};

const PageContent = () => {
  return (
    <main className="w-full bg-[#fff8fa] overflow-hidden">
      {/* Section 1: Feature Showcase */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden"
        style={{
          backgroundImage: "url('/Why Us.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-full max-w-md aspect-square">
            <div className="absolute border-2 border-black/30 rounded-full w-full h-full flex items-center justify-center">
              <div className="border-2 border-black/40 rounded-full w-2/3 h-2/3 flex items-center justify-center">
                <div className="border-2 border-black/50 rounded-full w-2/3 h-2/3 flex flex-col items-center justify-center p-4 bg-white/20 backdrop-blur-sm">
                  <h2 className="text-4xl md:text-4xl font-bold text-black text-center tracking-wider">
                    Why Choose Us?
                  </h2>
                </div>
              </div>
            </div>

            {/* Cards */}
            <Card
              letter="C"
              title="CLASSY"
              description="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisi lorem id morbi vitae."
              position="top-left"
            />
            <Card
              letter="E"
              title="ELEGANT"
              description="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisi lorem id morbi vitae."
              position="top-right"
            />
            <Card
              letter="E"
              title="ESSENCE"
              description="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisi lorem id morbi vitae."
              position="bottom-left"
            />
            <Card
              letter="N"
              title="NATURAL"
              description="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisi lorem id morbi vitae."
              position="bottom-right"
            />
          </div>
        </div>
      </section>

      {/* Section 2: How to Use */}
      <section className="w-full min-h-screen px-6 pt-0 pb-20 flex flex-col lg:flex-row items-center justify-center bg-[#FFF8FA]">
        {/* Left Instructions */}
        <div className="w-full lg:w-1/2 max-w-xl space-y-8 z-10 -mt-50">
          <h1 className="text-4xl md:text-5xl font-bold">How to use?</h1>

          <ol className="space-y-4 text-md text-gray-500">
            <li className="flex items-start">
              <span className="text-xl font-semibold mr-4">1.</span>
              <span>Cleanse your skin thoroughly.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl font-semibold mr-4">2.</span>
              <span>Apply [Product Name] evenly to your face and neck.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl font-semibold mr-4">3.</span>
              <span>
                Use morning and night for best results. <br />
                Watch Step-by-step video.
              </span>
            </li>
          </ol>

          <button className="mt-8 flex items-center gap-2 px-6 py-3 text-pink-600 border border-pink-400 rounded-full hover:bg-pink-100 transition">
            <span className="font-semibold">Watch Video</span>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.012 12.6743L10.8187 9.0765C10.6153 8.97474 10.3893 8.92668 10.1622 8.93689C9.93499 8.9471 9.71421 9.01523 9.52081 9.13482C9.3274 9.2544 9.16779 9.42147 9.05715 9.62013C8.9465 9.81879 8.88851 10.0424 8.88867 10.2698V17.0654C8.88851 17.2928 8.9465 17.5164 9.05715 17.7151C9.16779 17.9138 9.3274 18.0808 9.52081 18.2004C9.71421 18.32 9.93499 18.3881 10.1622 18.3983C10.3893 18.4085 10.6153 18.3605 10.8187 18.2587L18.012 14.6609C18.1963 14.5686 18.3513 14.4267 18.4596 14.2513C18.5679 14.0759 18.6253 13.8738 18.6253 13.6676C18.6253 13.4614 18.5679 13.2593 18.4596 13.0839C18.3513 12.9085 18.1963 12.7667 18.012 12.6743Z" fill="#FF6BB8" stroke="#FF6BB8" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3335 23.667C18.8563 23.667 23.3335 19.1898 23.3335 13.667C23.3335 8.14414 18.8563 3.66699 13.3335 3.66699C7.81065 3.66699 3.3335 8.14414 3.3335 13.667C3.3335 19.1898 7.81065 23.667 13.3335 23.667Z" stroke="#FF6BB8" strokeWidth="1.33333"/>
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-end relative mt-15 lg:mt-[-180px] z-10">
          <div className="relative w-full max-w-md h-[450px] flex rounded-lg overflow-hidden">
            <img src="/model1.svg" alt="Product demonstration" className="w-full h-full object-cover" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gray-100 z-[-1]"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageContent;
