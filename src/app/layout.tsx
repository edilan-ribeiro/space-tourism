import type { Metadata } from "next"
import "@/styles/globals.scss"
import { Bellefair, Barlow_Condensed } from "next/font/google"
import { Header } from "@/components/header/header"

const bellefair = Bellefair({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bellefair",
	display: "swap",
})

const barlow_condensed = Barlow_Condensed({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-barlow-condensed",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Space tourism",
	description: "Space tourism multi-page website",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html className={`${bellefair.variable} ${barlow_condensed.variable}`}>
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
