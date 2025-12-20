import { ThemeProvider } from "./theme-provider";
import { AuthProvider } from "./auth-provider";
import  {QueryProvider} from "./query-provider";
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
        <QueryProvider>
          <ThemeProvider>
            <AuthProvider>
              <Navbar />
              <main style={{ padding: 20 }}>{children}</main>
            </AuthProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
