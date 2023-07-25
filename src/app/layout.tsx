import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Vancouver Vent Cleaning',
  description: 'The Best Vent Cleaning around',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
