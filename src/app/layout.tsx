import Header from "@/components/ui/header/Header";
import ClientLayout from "./ClientLayout";
import type { Metadata } from "next";
import FontHOCComponent from "../HOC/fontSetHOC";

export const metadata: Metadata = {
  title: "Health Platform",
  description: "Get your body healthy with this app",
  openGraph: {
    title: "Health Platform",
    description: "Get your body healthy with this app",
    images:
      "https://github.com/ParsaProg/Health/blob/main/public/images/c67cc114fc289a3eacc442da873053b2.jpg?raw=true",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Platform",
    description: "Get your body healthy with this app",
    images:
      "https://github.com/ParsaProg/Health/blob/main/public/images/c67cc114fc289a3eacc442da873053b2.jpg?raw=true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className="light" style={{ colorScheme: "light" }}>
      <body>
        <FontHOCComponent>
          <Header />
          <div className="mt-[130px]"></div>
          <ClientLayout>{children}</ClientLayout>
        </FontHOCComponent>
      </body>
    </html>
  );
}
