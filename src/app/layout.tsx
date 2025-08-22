import ClientLayout from "./ClientLayout";
import type { Metadata } from "next";
import FontHOCComponent from "../HOC/fontSetHOC";

export const metadata: Metadata = {
  title: "Health Platform",
  description: "Get your body healthy with this app",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "70x70",
    },
  ],
  openGraph: {
    title: "Health Platform",
    description: "Get your body healthy with this app",
    siteName: "Health",
    url: "https://health-mauve-five.vercel.app",
    images: [
      {
        url: "https://github.com/ParsaProg/Health/blob/main/public/images/c67cc114fc289a3eacc442da873053b2.jpg?raw=true",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Platform",
    description: "Get your body healthy with this app",
    images: [
      {
        url: "https://github.com/ParsaProg/Health/blob/main/public/images/c67cc114fc289a3eacc442da873053b2.jpg?raw=true",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <FontHOCComponent>
          <div className="mt-[130px]"></div>
          <ClientLayout>{children}</ClientLayout>
        </FontHOCComponent>
      </body>
    </html>
  );
}
