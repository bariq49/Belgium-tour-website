import type { Metadata } from "next";
import { Roboto, Inria_Serif } from "next/font/google";
import "./globals.css";
import Providers from "@/provider/query-provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const inriaSerif = Inria_Serif({
  variable: "--font-inria",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Belgium Tour Website",
  description: "A premium Belgium Tour website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inriaSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
        {/* Google Maps API Script */}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"}&libraries=places`}
          async
          defer
        />
      </body>
    </html>
  );
}

