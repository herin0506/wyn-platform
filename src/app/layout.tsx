import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
         {children}
      <Footer />
      </body>
    </html>
  )
}
