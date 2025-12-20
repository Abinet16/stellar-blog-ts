import { ThemeProvider } from "./theme-provider";
import { AuthProvider } from "./auth-provider";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "My Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider >
          <AuthProvider>
            <Navbar />
            <main style={{ padding: 20 }}>{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
