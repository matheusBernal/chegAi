// firebaseAuth.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// 🔐 Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTSyMYOQg9uU5zyXjhRDlGpO5JyLB46g0",
  authDomain: "chegai-83083.firebaseapp.com",
  projectId: "chegai-83083",
  storageBucket: "chegai-83083.firebasestorage.app",
  messagingSenderId: "251968867976",
  appId: "1:251968867976:web:d59e667b8569315ca4d93d",
  measurementId: "G-KCR5ZBE4YS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔄 Função para login com Google e pegar token + dados do usuário
export async function loginComGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const idToken = await user.getIdToken();

  return {
    idToken,
    userInfo: {
      nome: user.displayName || "",
      email: user.email || "",
      foto: user.photoURL || ""
    }
  };
}
