# Open Time — setup

About 15 minutes: make a free Supabase project, set one sign-in setting, upload this folder
to your FileCabinet repo, and create your account. (Your Supabase URL and key are already in `config.js`.)

## 1. Create the Supabase project
1. Go to supabase.com, sign up (GitHub sign-in is easiest), and click **New project**.
2. Name it `open-time`, set a database password (save it somewhere, you won't need it day to day), pick the region nearest you, and create it. Wait a minute or two while it sets up.
3. In the left sidebar open **SQL Editor → New query**. Paste everything from `setup.sql`, then click **Run**. You should see "Success. No rows returned."

## 2. Connect the app
1. In Supabase, open **Project Settings → API** (sometimes listed as "Data API" or "API Keys").
2. Copy the **Project URL** and the **anon public** key.
3. Open `config.js` and paste them in place of `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY`. Keep the quotes.

Both values are safe to publish. The rules from `setup.sql` are what keep your data private.

## 3. Set up sign-in
**Authentication → URL Configuration**: set **Site URL** to `https://www.spencerbarnhill.com/opentime/` and add the same address under **Redirect URLs**.
(That's where the account-confirmation and password-reset emails send you.)

## 4. Upload to GitHub
1. In your FileCabinet repo, click **Add file → Upload files**.
2. Drag in the whole `opentime` folder (not just its contents), so the files land at `opentime/index.html`, etc.
3. Commit. After a minute or two it's live at https://www.spencerbarnhill.com/opentime/

**Don't** upload `open-time-my-data.json`. Your repo is public.

## 5. Create your account and bring your data over
1. Open the site and tap **Create an account**. Enter your email and a password (8+ characters).
2. Open the confirmation email from Supabase and click the link.
3. Back in the app, sign in with the same email and password.
4. Gear icon → **Import from file** → choose `open-time-my-data.json`.
5. Once it says **Synced**, your data lives in your account. You can delete the file from your downloads if you like.

## 6. Install it
- **iPhone (Safari):** Share → Add to Home Screen.
- **Android (Chrome):** ⋮ → Add to Home screen / Install app.
- **Computer (Chrome or Edge):** install icon in the address bar, or ⋮ → Cast, save, and share → Install page as app.

Sign in once on each device with the same email and password.

## Optional: keep it just yours
After you've signed in, go to **Authentication → Sign In / Providers** and turn off **Allow new users to sign up**.
You can still sign in, and nobody else can create an account on your project.

## Updating later
Change files in `opentime/` on GitHub. The app picks up the new version the next time it opens online.
