import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

import "./globals.css";

export const metadata = {
  icons: {
    icon: "./icon.png",
  },
  title: "Rehmat Foundation",
  description: "This is official website of rehmat foundation, rehmat foundation chandigarh,rehmat foundation,rehmat foundation in,rehmat foundation mohali",
  generator: "Next.js",
  applicationName: "Rehmat Foundation",
  referrer: "origin-when-cross-origin",
  robots: "index,follow",
  keywords: [
    "Rehmat Foundation",
    "Rehmat Foundation Chandigarh",
    "Rehmat Foundation Donation",
    "rehmat foundation",
    "rehmat foundation in",
    "rehmat foundation chandigarh",
    "rehmat foundation mohali",
    "rehmat",
    "rehmat ngo",
    "Donate Rehmat Foundation",
    "Developer Rehmat Foundation"
  ],
  authors: [
    { name: "suraj singh, Amandeep Singh" },
    { name: "suraj singh", url: "https://www.linkedin.com/in/surajsinghgore" },
  ],
  creator: "rehmatFoundation.in",
  publisher: "rehmatFoundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>

    <link
          rel="canonical"
          href="https://www.rehmatfoundation.in/"
          key="canonical"
        />
    </head>
      <body>
    
        <Header />

        {children}

        <Footer />
     
      </body>
    </html>
  );
}
