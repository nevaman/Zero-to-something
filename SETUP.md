# ZTS Dynamic Website - Setup Guide

## What's Been Built

Your beautiful ZTS website is now fully dynamic with a comprehensive admin dashboard! Here's what you have:

### Frontend (Public Site)
- ✅ 100% preserved UI/UX from original design
- ✅ Fully responsive with all animations and interactions
- ✅ Dynamic content loaded from database
- ✅ Real-time analytics tracking
- ✅ Registration form with lead capture
- ✅ All sections are now database-driven

### Backend & Database
- ✅ Supabase database with complete schema
- ✅ Analytics events tracking
- ✅ Active session monitoring
- ✅ Lead/registration management
- ✅ Content management for all sections

### Admin Dashboard
- ✅ Secure authentication
- ✅ Analytics dashboard with charts
- ✅ Ship Log project management
- ✅ Registration/lead management
- ✅ Real-time visitor statistics
- ✅ Content editors for all sections

## First-Time Setup

### 1. Create an Admin User

To access the admin dashboard, you need to create a user account in Supabase:

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Users
3. Click "Add User"
4. Create an admin account with email and password
5. Note down these credentials

### 2. Access the Admin Panel

```
URL: http://localhost:3000/admin/login
Email: [your admin email]
Password: [your admin password]
```

### 3. Start Managing Content

Once logged in, you can:

- **Dashboard**: View real-time analytics and visitor stats
- **Ship Log**: Add/edit/delete portfolio projects
- **Registrations**: Manage incoming leads
- **Analytics**: Deep dive into user behavior
- **Current Cycle**: Update active build cycle
- **Team**: Manage team member profiles
- **Services**: Edit service offerings
- **Settings**: Update site-wide content

## Key Features

### Analytics Tracking

The system automatically tracks:
- Page views
- Button clicks
- Section scrolls
- Active sessions (updated every 30 seconds)
- Device types
- Traffic sources

### Content Management

All content is now editable through the admin panel:
- Hero section text
- Ship log projects with full details
- Team member profiles
- Service offerings
- Testimonials
- Manifesto items
- Current cycle information
- Countdown timers

### Lead Management

Registration form submissions are automatically:
- Saved to database
- Tracked in analytics
- Manageable through admin panel with status updates (new, contacted, qualified, closed)

## Admin Routes

- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard with stats
- `/admin/analytics` - Detailed analytics with charts
- `/admin/ship-log` - Project portfolio management
- `/admin/current-cycle` - Active cycle editor
- `/admin/countdown` - Countdown timer settings
- `/admin/services` - Services management
- `/admin/team` - Team members editor
- `/admin/testimonials` - Testimonials management
- `/admin/manifesto` - Manifesto items editor
- `/admin/registrations` - Lead management
- `/admin/settings` - Site settings

## Marketing Insights Available

The analytics dashboard provides:
- Total visitors vs. today's visitors
- Active users in real-time
- Total registrations (conversion tracking)
- Most clicked buttons (CTA performance)
- Page view trends over last 7 days
- Device breakdown (mobile vs desktop vs tablet)
- Traffic source analysis

## Next Steps

1. Log into the admin panel
2. Review the pre-populated sample data
3. Update ship log projects with your real projects
4. Add your actual team members
5. Customize the hero section text
6. Monitor incoming registrations
7. Use analytics to optimize your CTAs

## Technical Details

- **Framework**: React + TypeScript + Vite
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router
- **Authentication**: Supabase Auth

All data is real-time and updates automatically without page refreshes!
