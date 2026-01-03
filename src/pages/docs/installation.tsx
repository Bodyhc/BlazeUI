import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocsInstallation = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 md:px-0">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Installation
        </h1>
        <p className="text-xl text-muted-foreground">
          Install BlazeUI via NPM or manually copy components into your project.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Choose your framework</h2>
          <p className="text-muted-foreground mb-6">
            Select your framework to see the specific setup instructions.
          </p>

          <Tabs defaultValue="npm-vite" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="npm-vite">Vite (NPM)</TabsTrigger>
              <TabsTrigger value="npm-next">Next.js (NPM)</TabsTrigger>
              <TabsTrigger value="manual">Manual (Copy/Paste)</TabsTrigger>
            </TabsList>

            {/* Vite (NPM) */}
            <TabsContent value="npm-vite" className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">1</div>
                  <h3 className="text-xl font-semibold">Install the package</h3>
                </div>
                <CodeBlock code="npm install @bodyhc/blazeui" language="bash" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">2</div>
                  <h3 className="text-xl font-semibold">Configure Tailwind</h3>
                </div>
                <p className="text-muted-foreground">Add the BlazeUI content path to your `tailwind.config.ts`.</p>
                <CodeBlock 
                  language="typescript"
                  code={`import type { Config } from "tailwindcss"

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@bodyhc/blazeui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add keyframes and animations (see 'Shared Configuration' below)
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`} 
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">3</div>
                  <h3 className="text-xl font-semibold">Import Styles</h3>
                </div>
                <p className="text-muted-foreground">Import the BlazeUI CSS file in your entry file (e.g., `main.tsx` or `App.tsx`).</p>
                <CodeBlock 
                  language="typescript"
                  code={`import "@bodyhc/blazeui/dist/style.css"`} 
                />
              </div>
            </TabsContent>

            {/* Next.js (NPM) */}
            <TabsContent value="npm-next" className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">1</div>
                  <h3 className="text-xl font-semibold">Install the package</h3>
                </div>
                <CodeBlock code="npm install @bodyhc/blazeui" language="bash" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">2</div>
                  <h3 className="text-xl font-semibold">Configure Tailwind</h3>
                </div>
                <CodeBlock 
                  language="typescript"
                  code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@bodyhc/blazeui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       // Add keyframes and animations (see 'Shared Configuration' below)
    },
  },
  plugins: [require("tailwindcss-animate")],
}`} 
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">3</div>
                  <h3 className="text-xl font-semibold">Import Styles</h3>
                </div>
                <p className="text-muted-foreground">Import the BlazeUI CSS file in your root layout (`layout.tsx`).</p>
                <CodeBlock 
                  language="typescript"
                  code={`import "@bodyhc/blazeui/dist/style.css"`} 
                />
              </div>
            </TabsContent>

            {/* Manual (Copy/Paste) */}
            <TabsContent value="manual" className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">1</div>
                  <h3 className="text-xl font-semibold">Install peer dependencies</h3>
                </div>
                <CodeBlock 
                  code="npm install framer-motion lucide-react clsx tailwind-merge tailwindcss-animate @radix-ui/react-slot" 
                  language="bash" 
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">2</div>
                  <h3 className="text-xl font-semibold">Copy components</h3>
                </div>
                <p className="text-muted-foreground">Copy the source code from the components section into your `components/ui` folder.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Shared Steps */}
        <section className="border-t pt-12 space-y-12">
          <h2 className="text-3xl font-bold tracking-tight">Shared Configuration</h2>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Tailwind Extension</h3>
            <p className="text-muted-foreground">Add these animations and keyframes to your `tailwind.config.ts`.</p>
            <CodeBlock 
              language="typescript"
              code={`theme: {
  extend: {
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
},
plugins: [require("tailwindcss-animate")],`} 
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">CSS Variables & Base Styles</h3>
            <p className="text-muted-foreground">
              The easiest way to get consistent styling is to import our bundled CSS file as shown in the steps above. 
              It includes all necessary variables like <code>--primary</code>, <code>--background</code>, and automatic dark mode support.
            </p>
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-sm text-blue-500 font-medium">
                Tip: If you prefer manual control, you can define these variables in your <code>globals.css</code>.
              </p>
            </div>
            <CodeBlock 
              language="css"
              code={`/* If you didn't import the bundled CSS, add these manually: */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --primary: 259 95% 63%;
    --primary-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --radius: 0.75rem;
  }
  .dark {
    --background: 222 47% 11%;
    --foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
  }
}`}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Utility Function</h3>
            <p className="text-muted-foreground">Ensure you have a `cn` utility for class merging.</p>
            <CodeBlock 
              language="typescript"
              code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Step 4: Add ThemeProvider</h3>
            <p className="text-muted-foreground">Wrap your application with the `ThemeProvider` to enable dark mode and consistent styling.</p>
            <CodeBlock 
              language="tsx"
              code={`import { ThemeProvider } from "@bodyhc/blazeui"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="blaze-ui-theme">
      {children}
    </ThemeProvider>
  )
}`} 
            />
          </div>
        </section>

        <section className="border-t pt-12">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-muted-foreground mb-4">
            Import components directly from the package root. Do <strong>not</strong> use subpaths like <code>/components/ui/button</code>.
          </p>
          <CodeBlock 
            language="tsx"
            code={`// ✅ Correct
import { Button } from "@bodyhc/blazeui"

// ❌ Incorrect
import { Button } from "@bodyhc/blazeui/components/ui/button"`}
          />
          <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-500 font-medium">
              Important: Ensure the package name is <code>@bodyhc/blazeui</code> (no hyphen between blaze and ui).
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="border-t pt-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Troubleshooting</h2>
          
          <div className="space-y-6">
            <h3 className="text-xl font-medium">TypeScript: "Could not find a declaration file"</h3>
            <p className="text-muted-foreground">
              If you see this error, it means TypeScript is having trouble finding our type definitions. Try one of these solutions:
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Option 1: Update your tsconfig.json</h4>
              <p className="text-sm text-muted-foreground">
                Ensure your <code>moduleResolution</code> is set to <code>bundler</code> or <code>NodeNext</code>.
              </p>
              <CodeBlock 
                language="json"
                code={`{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true
  }
}`}
              />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h4 className="font-semibold">Option 2: Manual Declaration</h4>
              <p className="text-sm text-muted-foreground">
                If you can't change your config, create a <code>blazeui.d.ts</code> file in your project root and add:
              </p>
              <CodeBlock 
                language="typescript"
                code={`declare module '@bodyhc/blazeui';`}
              />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h4 className="font-semibold text-amber-500">Styling is different / Missing styles</h4>
              <p className="text-sm text-muted-foreground">
                If components look wrong or unstyled, ensure you have:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                <li>Imported <code>@bodyhc/blazeui/dist/style.css</code> in your app entry.</li>
                <li>Added BlazeUI to your <code>tailwind.config.ts</code> content array.</li>
                <li>Included the <code>tailwindcss-animate</code> plugin.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocsInstallation;
