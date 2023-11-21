'use client'

import Image from 'next/image'
import logo from '../../../public/assets/shared/logo.svg'
import styles from './Header.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const menuItemId = ['00', '01', '02', '03']
	const menuTitle = ['home', 'destination', 'crew', 'technology']

	const pathname = usePathname()

	return (
		<header className={styles.header}>
			<Link href="/">
				<Image src={logo} alt="company logo" />
			</Link>
			<nav className={styles.navMenu} data-visible={isOpen}>
				<span></span>
				<ul>
					{menuItemId.map((id, index) => {
						return (
							<li
								className={
									(menuTitle[index] === 'home'
										? '/'
										: `/${menuTitle[index]}`) === pathname
										? styles.activeNav
										: ''
								}
							>
								<Link
									key={index}
									href={`/${
										menuTitle[index] === 'home' ? '' : menuTitle[index]
									}`}
									className={styles.navLink}
								>
									<span>{id}</span> {menuTitle[index]}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
			<button
				data-menuopen={isOpen}
				className={styles.hamburguer}
				onClick={() => setIsOpen(!isOpen)}
				title="menu"
				aria-label={`the menu is ${isOpen ? 'open' : 'not open'}`}
			/>
		</header>
	)
}
