import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import AnimatedContent from "./AnimatedContent/AnimatedContent";

export default function Back() {
  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={1.2}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <div className="w-full h-fit flex justify-center mt-12">
        <Link href="/">
          <button
            className={` w-fit h-fit px-4 py-2 rounded-full flex gap-2 border-2 border-black items-center text-xs cursor-pointer`}
          >
            <span>
              <ArrowLeft size={20} color="black" />
            </span>
            Back to home?
          </button>
        </Link>
      </div>
    </AnimatedContent>
  );
}
