"use client";

import { CookiesProvider } from "react-cookie";
import { Bounce, ToastContainer } from "react-toastify";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      {children}
    </CookiesProvider>
  );
}
