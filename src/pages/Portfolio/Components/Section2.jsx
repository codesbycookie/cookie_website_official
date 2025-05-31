const Section2 = () => {

  const content = {
    title: "Our Work Speaks. And It Says Cookie",
    tagline: [
      "Designs that click. Code that sticks.",
      "Marketing, that’s magic"
    ],
    project: [
      "Name of the project 1",
      "Description of the project 1 in one or two lines (should include the stack or the tool used in it)",
      "Name of the project 2",
      "Description of the project 2 in one or two lines (should include the stack or the tool used in it)"
    ],
    images: [
      "/imgs/placeholder.png", // First image (left)
      "/imgs/placeholder.png"  // Second image (right)
    ]
  };

  return (
    <div className="bg-white text-black font-sans">
      
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          {content.title}
        </h1>
      </div>

     
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-light italic mb-2 leading-snug">
            "{content.tagline[0]}
          </p>
          <p className="text-2xl md:text-3xl font-light italic leading-snug">
            {content.tagline[1]}"
          </p>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-8">
          <img 
            src={content.images[0]} 
            alt="Creative studio workspace" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {content.project[0]}
          </h2>
          <p className="text-xl md:text-2xl font-small leading-tight">
            {content.project[1]}
          </p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {content.project[2]}
          </h2>
          <p className="text-xl md:text-2xl font-small leading-tight">
            {content.project[3]}
          </p>
        </div>
        <div className="order-1 md:order-2 md:pl-8">
          <img 
            src={content.images[1]} 
            alt="Design team collaborating" 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

     
    </div>
  );
};

export default Section2;
