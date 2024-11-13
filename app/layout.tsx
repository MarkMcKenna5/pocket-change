import "./globals.css";
import { CMS_NAME } from "@/lib/constants";
import { Roboto } from 'next/font/google'

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
