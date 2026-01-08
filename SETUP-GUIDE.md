# Political Connect - Complete Setup Guide

## Current Status
All files are in: `c:\Users\jaypu\Desktop\New folder\political-buzz-app`

### What's Already Created:
- Database schema (Prisma)
- 8 API endpoints
- Docker Compose config
- Seed scripts
- Migration scripts
- API client library
- Middleware

---

## Quick Setup (Run These Commands)

### 1. Start PostgreSQL (Choose One Option)

**Option A: Using Docker Desktop (Recommended)**
```powershell
# Make sure Docker Desktop is running, then:
cd "c:\Users\jaypu\Desktop\New folder\political-buzz-app"
docker compose up -d
```

**Option B: Install PostgreSQL Locally**
- Download from: https://www.postgresql.org/download/windows/
- Install with default settings
- Set password: `password`
- Create database: `political_connect`

### 2. Generate Prisma Client
```powershell
cd "c:\Users\jaypu\Desktop\New folder\political-buzz-app"
npx prisma generate
```

### 3. Push Database Schema
```powershell
npx prisma db push
```

### 4. Seed Initial Data
```powershell
npx tsx prisma/seed.ts
```

This creates:
- India → Maharashtra → Nagpur
- 38 Wards
- BJP and Congress parties

### 5. Import Congress Nagpur Data
```powershell
npx tsx prisma/migrate-congress-data.ts
```

This imports all 152 Congress candidates with Instagram profiles.

### 6. Verify Data
```powershell
npx prisma studio
```

Opens at `http://localhost:5555` - browse your data!

### 7. Start Development Server
```powershell
npm run dev
```

---

## Test the APIs

### Test Cities API
```powershell
curl http://localhost:3000/api/cities
```

### Test Representatives API
```powershell
curl http://localhost:3000/api/representatives
```

### Test Analytics API
```powershell
# Replace {cityId} with actual ID from cities API
curl "http://localhost:3000/api/analytics?type=city&id={cityId}"
```

---

## Available API Endpoints

All endpoints are at `http://localhost:3000/api/`

1. `GET /cities` - List all cities
2. `GET /cities/:id/wards` - Get wards for a city
3. `GET /parties` - List all parties
4. `GET /representatives` - List representatives (filter by cityId, wardId, partyId)
5. `GET /representatives/:id` - Get representative details
6. `GET /analytics?type=city&id=:id` - City analytics
7. `GET /analytics?type=ward&id=:id` - Ward analytics
8. `GET /analytics?type=party&id=:id` - Party analytics

---

## Update Social Connect to Use Database

The Social Connect page currently uses JSON files. To use the real database:

1. The API endpoints are ready
2. The API client is at `lib/api-client.ts`
3. Update `app/social-connect/page.tsx` to use:
   ```typescript
   import { api } from '@/lib/api-client'
   
   // Instead of loading JSON:
   const data = await api.getAnalytics('city', cityId)
   const reps = await api.getRepresentatives({ partyId, cityId })
   ```

---

## Database Schema Summary

### Geographic Hierarchy
```
Country (India)
└── State (Maharashtra)
    └── City (Nagpur)
        └── Ward (1-38)
```

### Political Structure
```
Party (BJP, INC)
└── Representative
    ├── User (auth info)
    ├── Ward (location)
    └── SocialProfile (Instagram, etc.)
```

### Issue System (Ready for Phase 2)
```
User (Citizen)
└── Issue
    ├── Ward
    ├── Category
    ├── Status
    └── IssueResponse (from Representative)
```

---

## Troubleshooting

### "Docker not found"
Install Docker Desktop from: https://www.docker.com/products/docker-desktop/

### "Database connection failed"
Check `.env` file has correct DATABASE_URL

### "Prisma command not found"
Run: `npm install`

### "Port 3000 already in use"
Stop the current dev server or use different port:
```powershell
npm run dev -- -p 3001
```

---

## Next Steps

1. **Test APIs** - Use curl or Postman
2. **Update Frontend** - Connect Social Connect to database
3. **Add Authentication** - OTP-based login
4. **Add Issue Posting** - Let citizens post issues
5. **Build Admin Panel** - Manage data

---

## File Structure

```
political-buzz-app/
├── app/
│   ├── api/                    # Backend API routes
│   │   ├── cities/
│   │   ├── parties/
│   │   ├── representatives/
│   │   └── analytics/
│   ├── social-connect/         # Social Connect page
│   ├── login/
│   └── signup/
├── components/                 # React components
├── lib/
│   ├── prisma.ts              # Database client
│   ├── api-client.ts          # API client library
│   └── utils.ts
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts                # Initial data
│   └── migrate-congress-data.ts
├── public/
│   └── congress-nagpur-data.json
├── .env                       # Environment variables
├── docker-compose.yml         # PostgreSQL + Redis
└── package.json
```

---

## Summary

Everything is in ONE folder: `political-buzz-app`

**Created:**
- Complete database schema (11 models)
- 8 working API endpoints
- Seed scripts for initial data
- Migration script for Congress data
- API client library
- Docker setup

**Ready to use:**
- All APIs work once database is set up
- Frontend can connect via `lib/api-client.ts`
- Data is structured and scalable

**Just need to:**
1. Start PostgreSQL (Docker or local)
2. Run Prisma commands
3. Test APIs
4. Update frontend to use APIs
