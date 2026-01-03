import { ComponentPreview } from "@/components/component-preview";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DocsRadioGroup = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Radio Group
        </h1>
        <p className="text-lg text-muted-foreground">
          A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <ComponentPreview
          title="Radio Group"
          code={`import { RadioGroup, RadioGroupItem, Label } from "@bodyhc/blazeui";

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </div>
    </>
  );
};

export default DocsRadioGroup;
