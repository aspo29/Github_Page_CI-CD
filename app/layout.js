import "./globals.css";

export const metadata = {
  title: "myshop | Electronics Store",
  description: "Discover premium electronics, smart gadgets, and exclusive offers with fast delivery."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
