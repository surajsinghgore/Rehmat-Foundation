import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

import "./globals.css";

export const metadata = {
  icons: {
    icon: "./icon.png",
  },
  title: "Rehmat Foundation",
  description: "This is official website of rehmat foundation chandigarh",
  generator: "Next.js",
  applicationName: "Rehmat Foundation",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Rehmat Foundation",
    "Rehmat Foundation Chandigarh",
    "Rehmat Foundation Donation",
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
      <body>
    
        <Header />

        {children}

        <Footer />
     
      </body>
    </html>
  );
}
