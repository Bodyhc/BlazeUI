import { LampContainer } from "@/components/ui/lamp";
import { ComponentPreview } from "@/components/component-preview";
import { motion } from "framer-motion";


export default function DocsLamp() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Lamp Effect</h1>
        <p className="text-lg text-muted-foreground">
          A dramatic lamp effect for hero sections or headers.
        </p>
      </div>

      <ComponentPreview
        title="Basic Usage"
        code={`import { LampContainer } from "@bodyhc/blazeui";
import { motion } from "framer-motion";

<LampContainer>
  <motion.h1
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  >
    Build lamps <br /> the right way
  </motion.h1>
</LampContainer>`}
      >
        <div className="rounded-2xl overflow-hidden border">
            <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
            >
                Build lamps <br /> the right way
            </motion.h1>
            </LampContainer>
        </div>
      </ComponentPreview>


    </div>
  );
}
