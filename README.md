# Political BuZZ Campaign Platform

🚀 **Deployment-Ready Political Campaign Management Platform**

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
political-buzz-app/
├── app/                      # Next.js pages
│   ├── social-connect/      # Analytics dashboard
│   ├── login/               # Authentication
│   ├── signup/              # Registration
│   ├── services/            # Service pages
│   └── packages/            # Package pages
├── components/              # React components
│   ├── header.tsx          # Main navigation
│   ├── footer.tsx          # Footer
│   └── ui/                 # UI components
├── public/                  # Static files
│   ├── images/             # Images
│   └── nagpur-bjp-data.json # Analytics data
└── styles/                  # Global styles
```

## Features

✅ **Compact Navigation** - Small, professional navbar  
✅ **Social Connect** - Real-time analytics dashboard  
✅ **Authentication** - Login/Signup pages  
✅ **Responsive Design** - Mobile-friendly  
✅ **SEO Optimized** - Meta tags and structure  
✅ **Fast Performance** - Optimized builds  

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build & Deploy Manually
```bash
# Build
npm run build

# The output will be in .next folder
# Upload to your hosting provider
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Recharts
- Shadcn/ui

## Support

Political BuZZ  
📞 +917058253695  
🌐 politicalbuzzindia.in
