# Facyas - Premium Skincare Website

A modern, responsive skincare e-commerce website built with React, TypeScript, Tailwind CSS v3, and GSAP animations.

## 🚀 Features

- **Modern Design**: Clean, minimalist design focused on skincare products
- **Responsive**: Mobile-first approach with responsive design
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS v3**: Utility-first CSS framework with custom theme
- **GSAP Ready**: Animation library integration for smooth interactions
- **Component-Based**: Well-organized component architecture
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS v3** - Utility-first CSS framework
- **GSAP** - Animation library
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components (buttons, inputs, etc.)
│   ├── forms/          # Form components
│   ├── layout/         # Layout components (header, footer, etc.)
│   ├── product/        # Product-related components
│   └── ui/             # UI components
├── pages/              # Page components
├── layouts/            # Layout wrappers
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
│   ├── constants.ts    # App constants
│   └── helpers.ts      # Helper functions
├── config/             # Configuration files
│   └── theme.ts        # Theme configuration
├── styles/             # Global styles
├── types/              # TypeScript type definitions
├── data/               # Static data and mock data
└── assets/             # Static assets
    ├── fonts/          # Font files
    ├── images/         # Images
    └── icons/          # Icon files
```

## 🎨 Design System

### Colors

- **Primary**: Blue shades for main brand elements
- **Secondary**: Pink shades for accents and highlights
- **Accent**: Green shades for call-to-actions
- **Neutral**: Gray shades for text and backgrounds

### Typography

- **Sans-serif**: Inter - For body text and UI elements
- **Serif**: Playfair Display - For headings and brand elements

### Components

- Pre-built component classes in `src/index.css`
- Utility classes for common patterns
- Responsive design tokens

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **xs**: 475px
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🎯 Key Features

### Components

- **Layout**: Header with navigation, footer with links
- **Hero Section**: Eye-catching homepage banner
- **Product Cards**: Responsive product display cards
- **Feature Sections**: Highlight key benefits
- **CTA Sections**: Call-to-action components

### Utilities

- **Price Formatting**: Currency formatting utilities
- **Date Helpers**: Date and time formatting
- **Validation**: Email and phone validation
- **Storage**: Local storage helpers
- **Animation**: Ready for GSAP integration

### Theme System

- **Custom Colors**: Skincare-focused color palette
- **Typography Scale**: Consistent font sizing
- **Spacing System**: Uniform spacing tokens
- **Animation Presets**: Pre-configured animations

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    // Your custom primary colors
  },
  // ... other colors
}
```

### Components

Add custom component styles in `src/index.css`:

```css
@layer components {
  .your-component {
    @apply /* your styles */;
  }
}
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [GSAP Documentation](https://greensock.com/docs)

---

**Happy coding! 🚀**
