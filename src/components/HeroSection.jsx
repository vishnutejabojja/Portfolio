import { ArrowDown } from "lucide-react";
import LiquidText from "./LiquidText";
import LiquidGradientWrapper from "./LiquidGradientWrapper";
import { getTheme } from "../utility/getTheme";

export const HeroSection = () => {
  // const { style, className } = useLiquidGradient();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              <LiquidGradientWrapper asText className="inline-block">
                Vishnu
              </LiquidGradientWrapper>
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Teja
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Software Engineer with a passion for building innovative web applications, crafting seamless user experiences, and solving real-world problems through code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects">
              <LiquidGradientWrapper className="rounded-xl p-[2px] inline-block">
                <button className={`px-6 gradient-border py-2 rounded-xl hover:opacity-80 transition-colors duration-300`}>
                  View My Work
                </button>
              </LiquidGradientWrapper>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        {/* <LiquidGradientWrapper className="inline-block rounded-full p-4"> */}

        <ArrowDown className={`h-5 w-5 gradient-border rounded-full`}/>
        {/* </LiquidGradientWrapper> */}
      </div>
    </section>
  );
};
