import React, { useRef, useState } from 'react'
import styles from "@/styles/header.module.scss"
import companyLogo from "@/assets/imgs/logo.svg"
import avatarImg from "@/assets/imgs/avatar.png"
import { BellIcon, ArrowDownIcon } from './icons'
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import gsap from "gsap"

function Header() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const sec3Ref = useRef<HTMLDivElement | null>(null);
    const userInfoRef = useRef<HTMLDivElement | null>(null);

    const animateHamburger = (shouldOpen: boolean) => {
        const hamburger = document.querySelector('#Nav-hamburger') as HTMLDivElement;

        const tl = gsap.timeline({
            defaults: { duration: .2 }
        })

        //animate timmeline base on navBar state
        if (shouldOpen) {
            tl.to(hamburger.children[1], {
                scaleX: 0,
                transformOrigin: "left center"
            }).to([hamburger.children[0], hamburger.children[2]], { width: '32px' })
                .to(hamburger.children[0], { rotate: '45deg', translateY: '12px', })
                .to(hamburger.children[2], { rotate: '-45deg', translateY: '-12px' }, "<")
        } else {
            tl.to(hamburger.children[0], { rotate: '0deg', translateY: '0px' })
                .to(hamburger.children[2], { rotate: '0deg', translateY: '0px' }, "<")
                .to([hamburger.children[0], hamburger.children[2]], { width: '20px' })
                .to(hamburger.children[1], {
                    scale: 1
                })
        }

        setIsSideNavOpen(shouldOpen)
    }

    const displayHeaderContent = (el: HTMLElement | null, newDisplay: string) => {
        if (el) {
            const currentDisplayValue = el.style.display;
            el.style.display = currentDisplayValue === newDisplay ? "none" : newDisplay
        }

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <section className={styles.sec1}>
                    <div className={styles.logo}>
                        <img src={companyLogo} alt="company-logo" />
                    </div>
                    <div className={styles.searchBox}>
                        <input type="text" />
                        <span>
                            <MagnifyingGlassIcon width={24} height={24} />
                        </span>
                    </div>
                </section>
                <section className={styles.sec2}>
                    <div
                        id='Nav-hamburger'
                        className={styles.NavHamburger}
                        onClick={() => animateHamburger(!isSideNavOpen)}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <span onClick={() => displayHeaderContent(sec3Ref.current, "grid")} className={styles.ellipsisVerticalIcon}>
                        <EllipsisVerticalIcon width={24} height={24} />
                    </span>
                </section>

                <section ref={sec3Ref} className={`${styles.sec3}`}>
                    <a href="">Docs</a>
                    <span className={styles.bellIcon}>
                        <BellIcon />
                        <small>Notification</small>
                    </span>

                    <div onClick={() => displayHeaderContent(userInfoRef.current, "block")} className={styles.user}>
                        <span>
                            <img src={avatarImg} alt="avatar" />
                        </span>
                        <div>
                            <span>Ayodeji</span>
                            <ArrowDownIcon />
                        </div>

                        <div ref={userInfoRef} className={styles.userInfo}>
                            <p>Log Out</p>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default Header