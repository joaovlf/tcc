import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter(
	{ subsets: ["latin"],
		display: "swap",
		variable: "--font-inter",
	});

export const metadata: Metadata = {
	title: "Project Manager",
	description: "Manage your projects",
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
      
			<body className={`${inter.className} ${inter.variable}`}>
				{children}
			</body>
		</html>
	);
}
