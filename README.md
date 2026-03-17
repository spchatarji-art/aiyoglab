# ⚡ AI Yog Lab — World Super App v6 ULTRA
### Made by Shaurya 🇮🇳

---

## 🚀 LOCAL SETUP (2 min)
1. Install Node.js → nodejs.org
2. Extract ZIP → open folder in CMD
3. Run:
   npm install
   npm start
4. Open: http://localhost:3000
5. Get FREE Groq key: console.groq.com

---

## 🌐 TASK 1 — RAILWAY FREE DEPLOY
1. Push code to GitHub (free)
2. Go to railway.app → Sign up with GitHub
3. "New Project" → "Deploy from GitHub"
4. Select your repo → Deploy!
5. Add environment variable: GROQ_API_KEY = your_key
6. Get your live URL — share with world!
FREE tier: 500 hours/month

---

## 🔑 TASK 2 — GOOGLE SIGN-IN SETUP
1. Go to console.cloud.google.com
2. Create project → Enable "Google Identity API"  
3. Credentials → Create OAuth 2.0 Client ID
4. Application type: Web application
5. Authorized origins: https://your-railway-url.up.railway.app
6. Copy Client ID
7. In index.html line 16 — replace:
   YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com
   with your real Client ID

---

## 📱 TASK 3 — PLAY STORE (PWA)
App already has PWA support built-in!

Option A — PWABuilder (EASIEST — FREE):
1. Deploy on Railway first
2. Go to pwabuilder.com
3. Enter your Railway URL
4. Click "Package for stores"
5. Download Android package
6. Upload to Google Play Console ($25 one-time)

Option B — WebView App:
1. Download Android Studio (free)
2. Create new project → Empty Activity  
3. Add WebView pointing to your Railway URL
4. Add AdMob ads for revenue
5. Generate signed APK → upload to Play Store

---

## 💰 PAISA KAISE KAMAO

### Google AdSense (Website):
1. adsense.google.com → Sign up
2. Get publisher ID (ca-pub-XXXX)
3. In index.html uncomment AdSense script
4. Replace ca-pub-XXXXXXXX with your ID

### Google AdMob (Play Store App):
1. admob.google.com → Sign up  
2. Create app → Create ad units
3. Add AdMob SDK to WebView app
4. Banner + Interstitial ads = paisa!

### Subscription:
- Pro plan ₹499/month already in app
- Connect Razorpay for Indian payments

---

## SECRET COUPON
Settings → "Have an activation code?" → aiyoglab@08

---

Made with ❤️ by Shaurya — AI Yog Lab India 🇮🇳
