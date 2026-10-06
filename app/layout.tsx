import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JND — 3D Artist / Motion Designer",
  description: "JND — cinematic 3D, architectural visualization and motion design.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
