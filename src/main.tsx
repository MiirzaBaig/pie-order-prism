import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './components/AuthContext';

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="497070351614-152mm7gp96bjccfs129gs6etquepvq4b.apps.googleusercontent.com">
    <AuthProvider>
      <App />
    </AuthProvider>
  </GoogleOAuthProvider>
);
