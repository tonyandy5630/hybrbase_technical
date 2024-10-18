import localFont from "next/font/local";
import "./globals.css";
import Layout from "./components/layout";
import Providers from "@/utils/Providers";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { token } from "./constants/storyblok";
import StoryblokProvider from "./utils/StoryblokProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

storyblokInit({
  accessToken: "PiZEqN6hlV1SatEcQgRjwwtt",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <StoryblokProvider>
        <html lang='en'>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Layout>{children}</Layout>
          </body>
        </html>
      </StoryblokProvider>
    </Providers>
  );
}
