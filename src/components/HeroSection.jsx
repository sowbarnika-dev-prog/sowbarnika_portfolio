import {
  MousePointerClick,
  Code,
  Award,
  Download,
  Shield,
  Zap,
  TrendingUp,
  Briefcase,
  Mail,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleViewResume = () => {
    window.open("/sowbarnika_portfolio/sowbarnika-resume.pdf", "_blank", "noopener,noreferrer");
  };

  const achievements = [
    {
      number: "2.5",
      label: "Years of Experience",
      icon: <Shield className="h-3 w-3" />,
    },
    {
      number: "15+",
      label: "Projects Delivered",
      icon: <TrendingUp className="h-3 w-3" />,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <Award className="h-3 w-3" />,
    },
    {
      number: "15+",
      label: "Projects Completed",
      icon: <Zap className="h-3 w-3" />,
    },
  ];

  const codeSnippets = [
    "import { Sowbarnika - FrontEndDeveloper }",
    "",
    "const developer = new FrontEndDeveloper({",
    "  name: 'Sowbarnika',",
    "  stack: ['React', 'Bootstrap', 'Tailwind css'],",
    "  focus: 'Building scalable web applications',",
    "  status: 'Open to new opportunities'",
    "});",
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25, delayChildren: 0.5 },
            },
          }}
        >
          {/* -------- LEFT SIDE -------- */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <Briefcase className="h-4 w-4" /> Currently Accepting new
              Opportunities
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <span className="block text-foreground">I'm Sowbarnika</span>
              <motion.span
                className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Front-end Developer
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              I build{" "}
              <span className="text-primary font-semibold">
                modern, responsive web interfaces
              </span>{" "}
              with a focus on usability, performance, and pixel-perfect design —
              specializing in React and front-end architecture.
            </motion.p>

            {/* Achievements */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-background/60 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {a.icon}
                    <div className="text-2xl font-bold text-foreground">
                      {a.number}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{a.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <motion.a
                href="#projects"
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Code className="h-5 w-5" />
                <span>View Case Studies</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Mail className="h-4 w-4" />
                <span>Technical Interview</span>
              </motion.a>

              <motion.button
                onClick={handleViewResume}
                className="group relative overflow-hidden px-6 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Download className="h-4 w-4" />
                <span>View Resume</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-6 text-center lg:text-left"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <div className="text-sm text-muted-foreground">
                🚀{" "}
                <span className="text-primary font-semibold">
                  Available Immediately
                </span>{" "}
                for Frontend roles
              </div>
            </motion.div>
          </div>

          {/* -------- RIGHT SIDE -------- */}
          {/* -------- RIGHT SIDE (Responsive Fixed) -------- */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full px-2 sm:px-0"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            <div className="relative w-full max-w-[90%] sm:max-w-md md:max-w-lg">
              <motion.div
                className="bg-background/90 border border-border rounded-2xl 
                 p-4 sm:p-6 md:p-8 
                 backdrop-blur-sm shadow-xl sm:shadow-2xl 
                 w-full group hover:shadow-3xl 
                 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-[10px] sm:text-sm font-mono font-semibold text-muted-foreground">
                      portfolio.js
                    </div>
                  </div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                </div>

                {/* Static Code Section */}
                <div
                  className="font-mono text-xs sm:text-sm bg-primary/5 rounded-lg border border-primary/10 
                      min-h-[200px] sm:min-h-[260px] md:min-h-[280px] 
                      p-4 sm:p-6 overflow-x-auto"
                >
                  {codeSnippets.map((line, index) => (
                    <div
                      key={index}
                      className={`whitespace-pre-wrap break-words ${
                        line.includes("import")
                          ? "text-purple-400 font-semibold"
                          : line.includes("const") || line.includes("new")
                          ? "text-blue-400 font-semibold"
                          : line.includes("React") ||
                            line.includes("Node.js") ||
                            line.includes("TypeScript")
                          ? "text-cyan-400"
                          : line.includes("FrontEndDeveloper")
                          ? "text-emerald-400 font-semibold"
                          : line.includes("//")
                          ? "text-muted-foreground italic"
                          : line.includes("await") || line.includes("connect")
                          ? "text-yellow-400"
                          : line.includes("'")
                          ? "text-amber-400"
                          : "text-foreground"
                      }`}
                    >
                      {line || "‎"}
                    </div>
                  ))}
                </div>

                {/* Floating Icon */}
                <motion.div
                  className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 
                   w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 
                   bg-gradient-to-r from-primary to-purple-600 
                   rounded-xl flex items-center justify-center 
                   border-2 border-background shadow-2xl"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, -2, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.div
          className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg"
        >
          <MousePointerClick className="h-3 w-3" />
          <span>Explore Technical Portfolio</span>
        </motion.div>
        <div className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div> */}
    </section>
  );
};
