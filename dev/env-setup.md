# 🔧 Environment Setup Guide for Solariqa

To run Solariqa locally, create a `.env.local` file in the root with the following environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key (if needed)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Make sure you've set up a Supabase project and enabled:

Authentication (email + Google)

Tables: users, questions, answers, votes, favorites

Need help? Refer to our docs/architecture.md or reach out to the maintainers.
