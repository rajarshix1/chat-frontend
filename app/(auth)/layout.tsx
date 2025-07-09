import type { Metadata } from "next";
import "../globals.css";
import SideBarAuth from "@/components/SideBarAuth";

export const metadata: Metadata = {
  title: "Messanger",
  description: "Chat application",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen ">
      <body className="flex flex-col md:flex-row h-screen w-screen"
      >
        <SideBarAuth/>
        {children}
      </body>
    </html>
  );
}
