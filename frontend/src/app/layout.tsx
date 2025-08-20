import type { Metadata } from "next";
import {Inter} from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";

{/* INIT FONTS */}
const inter = Inter({
  subsets : ["latin"],
  variable:"--font-inter"

})



{/* METADATA */}
export const metadata = {
  title: "ResumeClear : AI Resume Builder & CV Optimizer",
  description:
    "ResumeClear is an AI-powered resume builder that refines, formats, and optimizes CVs into recruiter-ready documents. Upload your PDF & stand out.",
    keywords: [
    "AI resume builder",
    "resume optimizer",
    "AI CV builder",
    "resumeClear",
    "professional resume formatting",
    "recruiter-ready CV",
    "AI-powered resume tool",
  ],

  authors: [{ name: "ResumeClear" }],
  creator: "ResumeClear",

 
  metadataBase: new URL("https://resumeclear.com"),
  alternates: {
    canonical: "https://resumeclear.com",
  },

  
   icons: {
    icon: "/favicon.ico", // for browser tabs
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // for iOS home screen
  },

};


{/* ROOT LAYOUT */}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.variable}  antialiased`}
      >
        <NavBar/>


        {children}




      </body>
    </html>
  );
}
