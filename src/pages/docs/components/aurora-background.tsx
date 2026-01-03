import { AuroraBackground } from "@/components/ui/aurora-background";
import { ComponentPreview } from "@/components/component-preview";
import { motion } from "framer-motion";


export default function DocsAuroraBackground() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Aurora Background</h1>
        <p className="text-lg text-muted-foreground">
          A high-performance, animated background effect resembling the aurora borealis.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { AuroraBackground } from "@bodyhc/blazeui";
import { motion } from "framer-motion";

<AuroraBackground>
  <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="relative flex flex-col gap-4 items-center justify-center px-4"
  >
    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
      Background lights are cool you know.
    </div>
    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
      And this, is chemical burn.
    </div>
    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
      Debug now
    </button>
  </motion.div>
</AuroraBackground>`}
      >
        <AuroraBackground className="rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Background lights are cool
            </div>
          </motion.div>
        </AuroraBackground>
      </ComponentPreview>


    </div>
  );
}
