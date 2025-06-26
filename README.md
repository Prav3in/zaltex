# Zaltex Agency Website

A stunning, modern website for a premium web design & development agency specializing in eCommerce. Built with **iOS 17/18-style liquid glass UI** featuring frosted glass effects, translucency, and smooth gradients.

## 🎯 Project Overview

Zaltex is designed to impress eCommerce founders and project managers looking to redesign their outdated stores. The website targets clients ready to invest **$2,000–$5,000** and expect seamless, professional experiences with clear ROI.

## ✨ Key Features

### 🖥 Homepage Sections

- **Hero Section**: Vertical "Work With Us" timeline with glass morphing CTA card
- **Value Proposition**: 2x3 Bento grid with interactive glass buttons
- **Featured Projects**: Glass shard containers with fluid fusion animations
- **Interactive Journey**: Horizontal carousel simulating the client experience
- **Testimonials**: Auto-rotating glass cards with client success stories
- **CTA Section**: Large glowing glass button for conversions

### 🧊 iOS 17/18-Style Design Elements

- **Liquid Glass Effects**: Frosted glass backgrounds with blur and translucency
- **Smooth Gradients**: White to sky-blue color transitions
- **Fluid Animations**: Glass morphing, liquid ripples, and light reflections
- **Interactive Elements**: Hover effects with scale, glow, and transform animations

### 🎨 Design System

- **Colors**: Pure white base with sky-blue (#0ea5e9) accents
- **Typography**: Inter for body text, JetBrains Mono for code
- **Buttons**: Rounded glass design with glowing edges
- **Cards**: Layered blur effects with iOS-style reflections

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom glass morphism utilities
- **Animations**: Framer Motion for fluid interactions
- **Typography**: Google Fonts (Inter, JetBrains Mono)
- **UI Components**: Radix UI with custom styling
- **Theme**: Light/dark mode support
- **Hosting**: Optimized for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/zaltex-agency/website.git
cd website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
zaltex-website/
├── app/
│   ├── globals.css          # Global styles & glass morphism
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Homepage with all sections
│   └── (case-studies)/      # Dynamic case study pages
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Dark/light mode toggle
├── lib/
│   ├── config.ts            # Site configuration & data
│   ├── types.ts             # TypeScript type definitions
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── styles/                  # Additional stylesheets
```

## 🎨 Customization Guide

### Colors

The brand uses a white and sky-blue palette defined in `tailwind.config.ts`:

```typescript
brand: {
  50: "#f0f9ff",   // Lightest blue
  500: "#0ea5e9",  // Primary sky blue
  900: "#0c4a6e",  // Darkest blue
}
```

### Glass Effects

Custom glass morphism utilities in `globals.css`:

```css
.glass-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.2);
}
```

### Content Management

Update agency data in `lib/config.ts`:

- `siteConfig`: Basic site information
- `workflowSteps`: Process timeline steps
- `valuePropositions`: Bento grid items
- `projects`: Portfolio case studies
- `services`: Service offerings
- `testimonials`: Client reviews

## 📊 Performance Features

- **Optimized Images**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with `font-display: swap`
- **Code Splitting**: Automatic route-based code splitting
- **SEO Ready**: Meta tags, OpenGraph, and structured data
- **Core Web Vitals**: Optimized for performance metrics

## 🎯 Target Audience

### Primary Users
- **eCommerce Founders**: Looking to scale their online stores
- **Project Managers**: Seeking reliable development partners
- **Marketing Directors**: Need conversion-optimized designs

### Budget Range
- **Shopify Plus Development**: $8,000 - $25,000
- **Custom eCommerce**: $15,000 - $50,000
- **Conversion Optimization**: $3,000 - $12,000

## 🔗 Pages & Features

### Homepage (`/`)
- Hero with workflow timeline
- Value proposition bento grid
- Featured project glass shards
- Client testimonials
- Contact CTA section

### Case Studies (`/case-studies/[slug]`)
- Project overview and metrics
- Problem → Strategy → Execution → Results
- Animated number counters
- Technology stack used
- Client testimonials

### Book a Call (`/book-call`)
- Calendly integration
- Clean, minimal design
- Pre-qualification form
- Service selection

## 🎨 Animation Guidelines

### Page Transitions
```javascript
// Fade in with blur reveal
initial={{ opacity: 0, filter: "blur(10px)" }}
animate={{ opacity: 1, filter: "blur(0px)" }}
```

### Hover Effects
```javascript
// Glass button hover
hover={{ 
  scale: 1.05, 
  boxShadow: "0 20px 40px rgba(14,165,233,0.4)" 
}}
```

### Scroll Animations
```javascript
// Reveal on scroll
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

## 📈 Conversion Optimization

### Strategic CTAs
- Primary: "Book Free Strategy Call"
- Secondary: "View Our Work"
- Trust signals: Client logos and testimonials

### Social Proof
- Client success metrics (+48% conversions)
- Industry testimonials
- Case study results

### User Experience
- Fast loading times (<2s)
- Mobile-responsive design
- Clear value proposition
- Easy navigation

## 🔧 Development

### Adding New Projects

1. Update `lib/config.ts` with project data
2. Add project images to `public/projects/`
3. Create case study page in `app/case-studies/[slug]/`

### Customizing Glass Effects

1. Modify utilities in `tailwind.config.ts`
2. Update component classes in `globals.css`
3. Adjust opacity and blur values

### Performance Monitoring

- Lighthouse scores target: 90+
- Core Web Vitals monitoring
- SEO optimization tracking

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Note: Glass morphism effects require modern browser support for `backdrop-filter`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes with proper TypeScript types
4. Test across different browsers
5. Submit a pull request

## 📄 License

© 2024 Zaltex Agency. All rights reserved.

---

**Built with ❤️ for the eCommerce community** 