```markdown
# 🧱 Solariqa Architecture

## 🔗 Auth Flow

1. User opens app
2. Option to continue without login
3. Can login with:
   - Phantom Wallet (wallet address)
   - Google OAuth (email, name)
4. Authenticated session saved in Supabase
5. Features like vote, save, and profile tracking are unlocked

---

## 🏛 Backend Schema

### user
- id
- wallet_address
- email
- name
- auth_provider
- created_at

### question
- id
- user_id
- title
- content
- created_at

### answer
- id
- question_id
- user_id
- content
- created_at

### votes
- id
- user_id
- vote_type (up/down)
- question_id / answer_id

### favorites
- user_id
- question_id

---

## 🔧 Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy the API keys and paste in `.env.local`
3. Enable Google OAuth in Authentication settings
4. Enable Row Level Security if needed and add Policies

---
