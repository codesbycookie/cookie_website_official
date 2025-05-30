export default function Section1() {
  return (
    <div className='bg-black text-white'>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="pt-10 md:pt-20 flex flex-col justify-center items-center">
          <h1 className='font-hahmlet font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight'>
            Cooked with,
            <span style={{ color: '#C18B43' }}>code</span><br />
            served with 
            <span style={{ color: '#C18B43' }}>care</span>
          </h1>
          <p className='text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto'>
            Not just a cookie-cutter work — It’s our custom creations.
          </p>

        
          <div className="mt-8 sm:mt-12 md:mt-16 w-full overflow-hidden relative">
            <div className="whitespace-nowrap animate-scroll">
              
              <img src="/imgs/placeholder.png" alt="Item 1" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
              <img src="/imgs/placeholder.png" alt="Item 2" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
              <img src="/imgs/placeholder.png" alt="Item 3" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
              <img src="/imgs/placeholder.png" alt="Item 4" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
             
              <img src="/imgs/placeholder.png" alt="Item 1" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
              <img src="/imgs/placeholder.png" alt="Item 2" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
              <img src="/imgs/placeholder.png" alt="Item 3" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
              <img src="/imgs/placeholder.png" alt="Item 4" className="inline-block h-24 sm:h-28 md:h-32 mx-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
