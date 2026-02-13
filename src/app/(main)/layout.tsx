import '../globals.css'
import '@/styles/styles.scss'
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export const metadata = {
  title: "Next Site",
  description: "Next.js",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
