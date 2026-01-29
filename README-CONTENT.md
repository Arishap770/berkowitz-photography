# Berkowitz Photography Portfolio

Modern, custom-designed photography portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- Custom warm color palette (cream, terracotta, sage)
- Editorial typography (Cormorant Garamond + Montserrat)
- Smooth animations and transitions
- Fully responsive and mobile-first
- NOT generic/AI-template looking

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Adding Client Content

### 1. Update Client Info
Edit `/app/data/clientInfo.ts` with:
- Contact details (email, phone)
- Instagram handle (already set to `berkowitz.photography`)
- About/bio text
- Services and pricing
- Years of experience

### 2. Add Photos

**Step 1:** Add images to `/public/images/portfolio/`
```
public/
  images/
    portfolio/
      wedding-1.jpg
      wedding-2.jpg
      portrait-1.jpg
      etc.
```

**Step 2:** Update the `images` array in `/app/data/clientInfo.ts`:
```typescript
images: [
  {
    id: 1,
    src: '/images/portfolio/wedding-1.jpg',
    alt: 'Describe the photo',
    category: 'Weddings', // or 'Portraits' or 'Events'
    featured: true, // show on homepage
  },
  // ... more images
],
```

**Step 3:** Add hero image by replacing the placeholder in `/app/components/Hero.tsx`

### 3. Update Services/Pricing
In `/app/data/clientInfo.ts`, fill in the `services` array:
```typescript
services: [
  {
    name: 'Wedding Photography',
    description: 'Full day coverage from getting ready to reception',
    price: 'Starting at $2,500',
    includes: ['8-10 hours coverage', '500+ edited photos', 'Online gallery'],
  },
  // ... more services
]
```

## 📂 Project Structure

```
app/
  ├── components/
  │   ├── Navigation.tsx    # Header with nav links
  │   ├── Hero.tsx          # Homepage hero section
  │   └── Footer.tsx        # Footer with social links
  ├── data/
  │   └── clientInfo.ts     # Client content (EDIT THIS)
  ├── globals.css           # Custom Tailwind theme
  ├── layout.tsx            # Root layout with fonts
  └── page.tsx              # Homepage
```

## 🎯 What's Ready

- ✅ Navigation with Instagram link
- ✅ Hero section (needs client photo)
- ✅ Custom color scheme
- ✅ Typography setup
- ✅ Footer with Instagram
- ✅ Smooth scroll navigation
- ⏳ Portfolio gallery (needs client photos)
- ⏳ About section (needs bio/photo)
- ⏳ Services section (needs pricing)
- ⏳ Contact form (needs email setup)

## 🌐 Deployment

Deploy to Vercel (recommended):
```bash
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

## 📱 Instagram Link

Currently set to: `@berkowitz.photography`
- Update in `/app/data/clientInfo.ts` if needed
- Shows in navigation and footer

## 🎨 Customization

- Colors: Edit `/app/globals.css` (search for `@theme inline`)
- Fonts: Edit `/app/layout.tsx`
- Content: Edit `/app/data/clientInfo.ts`

---

Built by Ari • 2026
