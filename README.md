# Pie Order Prism 🍕📊

[![Vercel Deploy](https://vercelbadge.vercel.app/api/MiirzaBaig/pie-order-prism)](https://pie-order-prism.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A beautiful, modern pizza order dashboard built with **Vite**, **React**, **TypeScript**, **Tailwind CSS**, and **Google OAuth** authentication.

---

## ✨ Features

- **Google OAuth Authentication** (secure, SPA-friendly)
- **Protected Dashboard & Pages** (only logged-in users can access)
- **Glassy, animated UI** (shadcn-ui, Tailwind, custom gradients)
- **User Profile**: See your Google name, email, and avatar in a friendly card
- **Logout & Session Management**
- **Responsive**: Works great on desktop and mobile
- **Easy deployment**: Ready for Vercel, Netlify, or your favorite host

---

## 🚀 Quick Start

### 1. **Clone the repo**
```sh
git clone https://github.com/MiirzaBaig/pie-order-prism.git
cd pie-order-prism
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Set up Google OAuth**
- Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
- Create OAuth 2.0 credentials for a Web app
- Add your dev and prod URLs to **Authorized JavaScript origins** and **redirect URIs** (e.g. `http://localhost:5173`, `https://your-vercel-url.vercel.app`)
- Copy your **Client ID**

### 4. **Configure environment variables**
Create a `.env` file:
```
VITE_GOOGLE_CLIENT_ID=your-google-client-id-here
```

### 5. **Run the app**
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173)

---

## 🛡️ Deployment

### **Deploy to Vercel**
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/import) and import your repo.
3. Set the `VITE_GOOGLE_CLIENT_ID` environment variable in Vercel dashboard.
4. After deploy, add your Vercel URL to Google Cloud Console as an allowed origin/redirect.

---

## 🧑‍💻 Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google)
- [React Router](https://reactrouter.com/)
- [Vercel](https://vercel.com/) (recommended deployment)

---

## 📂 Project Structure

```
src/
  components/    # UI and layout components
  pages/         # Route-based pages (Dashboard, Orders, Profile, Login)
  hooks/         # Custom React hooks
  lib/           # Utility functions
  App.tsx        # Main app component
  main.tsx       # Entry point
```

---

## 📝 License

MIT

---

## 🙋‍♂️ Author

- [Miirza Baig](https://github.com/MiirzaBaig)

---

## 📣 Contributing

Pull requests welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 💡 Inspiration

Built for modern pizza shops, but easily adaptable for any dashboard or SaaS!
