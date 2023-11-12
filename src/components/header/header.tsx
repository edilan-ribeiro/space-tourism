import Image from "next/image"
import logo from "../../../public/assets/shared/logo.svg"
import styles from "./Header.module.scss"
import Link from 'next/link'

export const Header = () => {
	const menuItemId = ["00", "01", "02", "03"]
	const menuTitle = ["home", "destination", "crew", "technology"]


	return (
		<header className={styles.header}>
			<Link href="/"><Image src={logo} alt="company logo" /></Link>
				<nav className={styles.navMenu}>
                <span></span>
					<ul>
						{menuItemId.map((id, index) => {                                                   
							return (
                                <Link key={index}href={`/${menuTitle[index] === 'home' ? '' : menuTitle[index]}`}>
								<li key={index}>
									<span>{id}</span> {menuTitle[index]}
								</li>
                                </Link>
							)
						})}
					</ul>
				</nav>			
		</header>
	)
}