import ClientLayout from "./ClientLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Platform",
  description: "Get your body healthy with this app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className="dark" style= {{colorScheme: "dark"}}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
