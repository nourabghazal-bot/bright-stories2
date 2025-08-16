import '../styles/globals.css';

export const metadata = {
  title: 'Bright Stories',
  description: 'Personalized AI storybooks for children',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
