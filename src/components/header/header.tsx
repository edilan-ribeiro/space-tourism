'use client'

import Image from 'next/image'
import logo from '../../../public/assets/shared/logo.svg'
import styles from './Header.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
	const menuItemId = ['00', '01', '02', '03']
	const menuTitle = ['home', 'destination', 'crew', 'technology']

	const pathname = usePathname()


	return (
		<header className={styles.header}>
			<Link href="/">
				<Image src={logo} alt="company logo" />
			</Link>
			<nav className={styles.navMenu}>
				<span></span>
				<ul>
					{menuItemId.map((id, index) => {
						return (
							<Link
								key={index}
								href={`/${menuTitle[index] === 'home' ? '' : menuTitle[index]}`}
							>
								<li className={(menuTitle[index] === 'home' ? '/' : `/${menuTitle[index]}`) === pathname ? styles.activeNav : ''}>
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
