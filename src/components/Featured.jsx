import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHovering = (index) => {
    cards.forEach((animation, i) => {
      if (i === index) {
        animation.start({ y: "0", opacity: 1 });
      } else {
        animation.start({ y: "100%", opacity: 0 });
      }
    });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%", opacity: 0 });
  };

  return (
    <div className="relative z-10 bg-zinc-900 w-full py-20">
      <div className="w-full px-[3.922vw] pb-10 border-b border-zinc-600">
        <h1 className="text-[4vw]">Featured projects</h1>
      </div>

      <div className="w-full px-[3.922vw] py-[2.922vw]">
        <div className="w-full relative flex flex-wrap -mx-2">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHovering(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer group relative w-1/2 p-2 mb-10 h-[50vh] md:h-[75vh]"
          >
            <div className="card relative z-0 w-full h-full rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <h1 className="text-[#cdea68] flex overflow-hidden text-[8vw] absolute z-[9] top-1/2 left-full -translate-x-1/2 -translate-y-1/2 font-['FoundersGrotesk']">
              {"FYDE".split("").map((letter, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={cards[0]}
                  transition={{ delay: index * 0.06, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHovering(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer group relative w-1/2 p-2 mb-10 h-[50vh] md:h-[75vh]"
          >
            <div className="card relative z-0 w-full h-full mix-blend-screen rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <h1 className="text-[#cdea68] flex overflow-hidden text-[8vw] absolute z-[9] top-1/2 right-full translate-x-1/2 -translate-y-1/2 font-['FoundersGrotesk']">
              {"VISE".split("").map((letter, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={cards[1]}
                  transition={{ delay: index * 0.06, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            onHoverStart={() => handleHovering(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer group relative w-1/2 p-2 mb-10 h-[50vh] md:h-[75vh]"
          >
            <div className="card relative z-0 w-full h-full mix-blend-screen rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <h1 className="text-[#cdea68] flex overflow-hidden text-[8vw] absolute z-[9] top-1/2 left-full -translate-y-1/2 -translate-x-1/2 font-['FoundersGrotesk']">
              {"PREMIUM BLEND".split("").map((letter, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={cards[2]}
                  transition={{ delay: index * 0.06, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            onHoverStart={() => handleHovering(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer group relative w-1/2 p-2 mb-10 h-[50vh] md:h-[75vh]"
          >
            <div className="card relative z-0 w-full h-full mix-blend-screen rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <h1 className="text-[#cdea68] flex overflow-hidden text-[8vw] absolute z-[9] top-1/2 right-full -translate-y-1/2 translate-x-1/2 font-['FoundersGrotesk']">
              {"TRAWA".split("").map((letter, index) => (
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={cards[3]}
                  transition={{ delay: index * 0.06, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* ****************************************************** */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
