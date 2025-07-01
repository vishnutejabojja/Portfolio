import { Briefcase, Code, User } from "lucide-react";
import LiquidGradientWrapper from "./LiquidGradientWrapper";
import { useLiquidGradient } from "./LiquidGradientWrapperOther";

export const AboutSection = () => {
  const {style, className} = useLiquidGradient();
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className=""><LiquidGradientWrapper asText className="inline-block"> Me</LiquidGradientWrapper></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a> */}
              <LiquidGradientWrapper className="inline-block rounded-full">
               <button
                className="px-6 py-2 border-1 rounded-full gradient-border transition-colors duration-300 hover:opacity-80"
              >
                Get In Touch
              </button>
              </LiquidGradientWrapper>

              <LiquidGradientWrapper className="inline-block rounded-full">
               <button
                className="px-6 py-2 rounded-full duration-300 hover:opacity-80"
              >
                Download CV
              </button>
              </LiquidGradientWrapper>
              {/* <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full">
                  <LiquidGradientWrapper className="rounded-full p-2">
                  <Code className="h-6 w-6"/>
                  </LiquidGradientWrapper>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">End-to-End Application Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full">
                <LiquidGradientWrapper className="rounded-full p-2">
                  <User className="h-6 w-6"/>
                  </LiquidGradientWrapper>
                  {/* <User className="h-6 w-6 text-primary" /> */}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full">
                  <LiquidGradientWrapper className="rounded-full p-2">
                  <Briefcase className="h-6 w-6"/>
                  </LiquidGradientWrapper>
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
