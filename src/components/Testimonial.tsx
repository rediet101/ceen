import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "TONY LINDLEY",
      role: "Client of Store",
      quote:
        "Tony has is a really smart way to literally set those fears aside… That to me, is unleashing the power within. Through his work, I found my strength.",
      image: "/testimonial1.jpg",
    },
    {
      name: "KATTY MORRISS",
      role: "Client of Store",
      quote:
        "Tony has is a really smart way to literally set those fears aside… That to me, is unleashing the power within. Through his work, I found my strength.",
      image: "/testimonial2.jpg",
    },
    {
      name: "CHRISTINA POLLY",
      role: "Client of Store",
      quote:
        "Tony has is a really smart way to literally set those fears aside… That to me, is unleashing the power within. Through his work, I found my strength.",
      image: "/testimonial3.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 lg:px-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Clients Testimonials
      </h2>
      <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

      {/* Testimonials */}
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start relative z-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 px-6 pt-10 pb-6 rounded-md shadow-none flex-1 max-w-md"
          >
            {/* Right Side Shadow */}
            <div className="absolute top-0 right-[-10px] bottom-0 w-3 bg-pink-100 rounded-r-md shadow-md z-[-1]"></div>

            {/* SVG on Border */}
            <div className="absolute -top-10 left-6 bg-white px-1">
            <svg width="80" height="69" viewBox="0 0 80 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0145 68.2129C15.6545 68.2129 12.5278 67.3729 9.63446 65.6929C6.74112 64.0129 4.45446 61.7729 2.77446 58.9729C1.09446 56.1729 0.254458 53.0929 0.254458 49.7329V49.1729C0.0677918 43.7596 0.907792 37.7862 2.77446 31.2529C5.94779 21.1729 11.5478 11.0929 19.5745 1.01289C19.9478 0.452888 20.4145 0.312889 20.9745 0.592888C21.5345 0.872887 21.7211 1.29289 21.5345 1.85289C20.6011 4.46622 19.8545 7.63956 19.2945 11.3729C18.1745 18.6529 18.3611 25.1862 19.8545 30.9729C24.8945 31.3462 29.1411 33.3529 32.5945 36.9929C36.0478 40.6329 37.6811 44.9729 37.4945 50.0129C37.3078 55.0529 35.4411 59.3462 31.8945 62.8929C28.3478 66.4396 24.0545 68.2129 19.0145 68.2129ZM2.49446 49.7329C2.68112 54.2129 4.36112 58.0396 7.53446 61.2129C10.7078 64.3862 14.5345 65.9729 19.0145 65.9729C23.4945 65.9729 27.3211 64.3862 30.4945 61.2129C33.6678 58.0396 35.2545 54.1662 35.2545 49.5929C35.2545 45.0196 33.6678 41.1462 30.4945 37.9729C27.3211 34.7996 23.4945 33.2129 19.0145 33.2129C18.4545 33.2129 18.0811 32.9329 17.8945 32.3729C15.8411 24.9062 15.8411 16.4129 17.8945 6.89289C11.5478 15.8529 7.16112 24.7196 4.73446 33.4929C3.05446 39.0929 2.30779 44.3196 2.49446 49.1729V49.7329ZM61.2945 68.2129C57.7478 68.2129 54.5745 67.3729 51.7745 65.6929C48.9745 64.0129 46.7345 61.7729 45.0545 58.9729C43.3745 56.1729 42.5345 53.0929 42.5345 49.7329V49.1729C42.1611 43.7596 43.0011 37.7862 45.0545 31.2529C48.2278 21.1729 53.8278 11.0929 61.8545 1.01289C62.2278 0.452888 62.6945 0.312889 63.2545 0.592888C63.8145 0.872887 64.0011 1.29289 63.8145 1.85289C62.8811 4.46622 62.1345 7.63956 61.5745 11.3729C60.4545 18.6529 60.6411 25.1862 62.1345 30.9729C67.1745 31.3462 71.4211 33.3529 74.8745 36.9929C78.3278 40.6329 79.9611 44.9729 79.7745 50.0129C79.5878 55.0529 77.7211 59.3462 74.1745 62.8929C70.6278 66.4396 66.2411 68.2129 61.0145 68.2129H61.2945ZM44.7745 49.7329C44.7745 54.2129 46.4078 58.0396 49.6745 61.2129C52.9411 64.3862 56.8145 65.9729 61.2945 65.9729C65.7745 65.9729 69.6011 64.3862 72.7745 61.2129C75.9478 58.0396 77.5345 54.1662 77.5345 49.5929C77.5345 45.0196 75.9478 41.1462 72.7745 37.9729C69.6011 34.7996 65.7745 33.2129 61.2945 33.2129C60.5478 33.2129 60.1745 32.9329 60.1745 32.3729C58.1211 24.9062 58.0278 16.4129 59.8945 6.89289C53.5478 15.8529 49.1611 24.7196 46.7345 33.4929C45.2411 39.0929 44.5878 44.3196 44.7745 49.1729V49.7329Z" fill="#2C2C2C"/>
</svg>

            </div>

            {/* Quote text */}
            <p className="text-gray-700 text-sm mb-14">
              “{testimonial.quote}”
            </p>

            {/* Avatar below box */}
            <div className="absolute left-6 -bottom-15 flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-24 space-x-2">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>

    </section>
  );
};

export default TestimonialsSection;
