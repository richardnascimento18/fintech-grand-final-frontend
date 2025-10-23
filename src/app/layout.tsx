import type { Metadata } from "next";
import { Poppins, ADLaM_Display } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const adlam = ADLaM_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-adlam",
});

export const metadata: Metadata = {
  title: "My Fintech Frontend",
  description: "Frontend for my FIAP fintech project",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${adlam.variable}`}>
      <body className="bg-[#222222] font-sans">
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable={false} pauseOnHover theme="dark" transition={Bounce} />
        {children}
      </body>
    </html>
  );
}
