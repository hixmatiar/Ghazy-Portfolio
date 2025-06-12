import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Back() {
  return (
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
  );
}
