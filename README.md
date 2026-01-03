# 🔥 BlazeUI

A beautiful, modern, and accessible component library for React built with Radix UI and Tailwind CSS.

![BlazeUI](https://img.shields.io/badge/BlazeUI-Component%20Library-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC?logo=tailwind-css)

## ✨ Features

- 🎨 **30+ Beautiful Components** - Ready-to-use components built with Radix UI primitives
- 🌓 **Dark Mode Support** - Built-in dark/light theme toggle
- 📱 **Fully Responsive** - All components work seamlessly across all screen sizes
- ♿ **Accessible** - Built on Radix UI primitives following WAI-ARIA patterns
- 🎭 **Customizable** - Easy to customize with Tailwind CSS
- ⚡ **Performance Optimized** - Lightweight and fast
- 🎯 **TypeScript** - Full TypeScript support for better developer experience
- 🚀 **Copy & Paste** - Copy component code directly and use in your project

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

#### 1. NPM (Recommended)

Install the package:
```bash
npm install @bodyhc/blazeui
```

**Usage:**
```tsx
import { Button } from "@bodyhc/blazeui"
```
> [!IMPORTANT]
> Use `@bodyhc/blazeui` (no hyphen). Import directly from the root; do not use subpaths like `/components/ui/button`.


#### 2. Manual

For manual installation (copy/paste), see our [Installation Guide](https://blazeui.com/docs/installation?tab=manual).

### Framework Guides

- [Vite Setup](https://blazeui.com/docs/installation?tab=npm-vite)
- [Next.js Setup](https://blazeui.com/docs/installation?tab=npm-next)

#### Peer Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge tailwindcss-animate
```



## 📦 Available Components

### Basic Components
- Button
- Input
- Textarea
- Label
- Badge
- Card
- Alert
- Avatar
- Skeleton
- Separator

### Form Components
- Checkbox
- Radio Group
- Switch
- Select
- Slider
- Progress

### Overlay Components
- Dialog
- Sheet
- Popover
- Tooltip
- Hover Card
- Dropdown Menu

### Layout Components
- Tabs
- Accordion
- Scroll Area
- Command
- Timeline

### Special Effects
- 3D Card
- Magic Card
- Pixel Card
- Glitch Text
- Sparkles
- Magnet Button
- Animated Number

## 🛠️ Tech Stack

- **React 18.2** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible primitives
- **Framer Motion** - Animations
- **React Router** - Routing
- **Lucide React** - Icons

## 📂 Project Structure

```
blazeui/
├── src/
│   ├── components/
│   │   ├── ui/           # UI components
│   │   ├── layout/       # Layout components
│   │   └── marketing/    # Marketing components
│   ├── pages/
│   │   ├── docs/         # Documentation pages
│   │   └── ...           # Other pages
│   ├── contexts/         # React contexts
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── dist/                 # Build output
```

## 📖 Usage

### Using Components

1. Browse components at `/components` or read docs at `/docs`
2. Copy the component code
3. Paste into your project
4. Customize as needed with Tailwind CSS

### Example

```tsx
import { Button } from "@bodyhc/blazeui";

function App() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

### Theme Setup

BlazeUI uses a theme provider for dark/light mode support. Wrap your app with the `ThemeProvider`:

```tsx
import { ThemeProvider } from "@bodyhc/blazeui";

function App({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="blaze-ui-theme">
      {children}
    </ThemeProvider>
  );
}
```

## 🎨 Theming

BlazeUI supports customizable themes through Tailwind CSS. You can customize colors, spacing, and more in your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Documentation](https://blazeui.com/docs)
- [Components](https://blazeui.com/components)
- [GitHub](https://github.com/yourusername/blazeui)

## 💡 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - For accessible primitives
- [shadcn/ui](https://ui.shadcn.com/) - For inspiration and component patterns
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS

---

Made with ❤️ by the BlazeUI team

