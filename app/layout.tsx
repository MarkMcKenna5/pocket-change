import "./globals.css";
import { Roboto } from 'next/font/google'

export const metadata = {
  title: `Pocket Change | A Blog by Ibotta`,
  description: `An example of the what can be done when Next.js meets Contentful`,
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
