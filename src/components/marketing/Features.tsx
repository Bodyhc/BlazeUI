import { Zap, Palette, Rows, Copy } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const features = [
  {
    name: "Ready-to-Use Components",
    description:
      "Save time with a vast collection of production-ready components. Just copy, paste, and you're good to go.",
    icon: Copy,
  },
  {
    name: "Themeable & Customizable",
    description:
      "Easily adapt the look and feel to your brand. Customize colors, spacing, and more with TailwindCSS.",
    icon: Palette,
  },
  {
    name: "Fully Responsive",
    description:
      "Components are designed to work seamlessly across all screen sizes, from mobile to desktop.",
    icon: Rows,
  },
  {
    name: "Built for Speed",
    description:
      "Optimized for performance, ensuring a fast and smooth user experience for your applications.",
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Build Stunning UIs
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            BlazeUI is more than just a component library.
          </p>
        </div>
        <div className="mt-20 grid max-w-lg gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <CardContainer key={feature.name} className="inter-var">
              <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  <feature.icon
                    className="h-8 w-8 text-primary mb-4"
                    aria-hidden="true"
                  />
                  {feature.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {feature.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
