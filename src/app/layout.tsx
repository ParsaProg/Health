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
    images: ""
  },
  twitter: {
    title: "Health Platform",
    description: "Get your body healthy with this app",
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
