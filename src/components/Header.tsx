import React, { useEffect, useRef } from 'react'
import styles from "@/styles/header.module.scss"
import avatarImg from "@/assets/imgs/avatar.png"
import { ArrowDownIcon } from './icons'
import {
    MoreVert as EllipsisVerticalIcon,
    Search as MagnifyingGlassIcon,
    NotificationsNoneRounded as BellIcon
} from '@mui/icons-material';
import gsap from "gsap"
import { useAppSelector } from '@/redux-toolkit/hooks'
import { useDispatch } from 'react-redux'
import { toggleSideNavVisibility } from '@/redux-toolkit/features/sideNavVisibility'
import { Link, useNavigate } from 'react-router-dom'
import { IconButton, Tooltip } from '@mui/material';

function Header() {
    const navigate = useNavigate();
    const { isOpen: isSideNavOpen } = useAppSelector(state => state.sideNavVisibility);
    const dispatch = useDispatch()
    const sec3Ref = useRef<HTMLDivElement | null>(null);
    const userInfoRef = useRef<HTMLDivElement | null>(null);
    const searchBoxRef = useRef<HTMLDivElement | null>(null);

    const handleLogOut = () => {
        localStorage.removeItem("LendsqrAuthDetails");
        navigate("/login", { replace: true })
    }

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
    }

    const displayHeaderContent = (e: React.MouseEvent<HTMLElement>, dropMenu: HTMLElement | null) => {
        const handlerEl = e.currentTarget as HTMLElement // element with the event listner
        const clickedEl = e.target as HTMLElement
        const isClickedOnHandlerEl = clickedEl === handlerEl || handlerEl.contains(clickedEl)
        const isDropMenuOpen = dropMenu?.classList.contains("opened")



        if (clickedEl === dropMenu || dropMenu?.contains(clickedEl)) return;
        console.log(handlerEl)
        if (isDropMenuOpen && handlerEl === document.body) {
            // user clicked outside the dropMenu and its handlerEl so close it
            gsap.to(dropMenu,
                {
                    translateY: "-20px",
                    autoAlpha: 0,
                    onComplete: () => { dropMenu?.classList.remove("opened") }
                }
            )
            return;
        };

        if (isClickedOnHandlerEl) {
            if (isDropMenuOpen) {
                gsap.to(dropMenu,
                    {
                        translateY: "-20px",
                        autoAlpha: 0,
                        onComplete: () => { dropMenu?.classList.remove("opened") }
                    },
                )
            } else {
                gsap.fromTo(dropMenu,
                    {
                        translateY: "-20px",
                        autoAlpha: 0
                    },
                    {
                        translateY: "0px",
                        autoAlpha: 1,
                        onComplete: () => { dropMenu?.classList.add("opened") }
                    }
                )
            }
        }


    }

    useEffect(() => {
        animateHamburger(isSideNavOpen)
    }, [isSideNavOpen])

    useEffect(() => {
        const closeAllDropDownMenu = (e: any) => {
            if (searchBoxRef.current?.classList.contains("opened")) {
                const trigger = document.querySelector("[data-search-box-trigger]")
                if (trigger === e.target || trigger?.contains(e.target)) return;
                displayHeaderContent(e, searchBoxRef.current);
            }
            if (sec3Ref.current?.classList.contains("opened")) {
                const trigger = document.querySelector("[data-sec3-trigger]")
                if (trigger === e.target || trigger?.contains(e.target)) return;
                displayHeaderContent(e, sec3Ref.current);
            }
            if (userInfoRef.current?.classList.contains("opened")) {
                const trigger = document.querySelector("[data-userinfo-trigger]")
                if (trigger === e.target || trigger?.contains(e.target)) return;
                displayHeaderContent(e, userInfoRef.current);
            }


        }

        document.body.addEventListener("click", closeAllDropDownMenu)

        return () => document.body.removeEventListener("click", closeAllDropDownMenu)
    }, [])
    return (
        <div className={styles.container}>
            <section className={styles.sec1}>
                <div className={styles.logo}>
                    <img src={"/logo.svg"} alt="company-logo" />
                </div>
                <div ref={searchBoxRef} className={styles.searchBox}>
                    <input placeholder='Search for anything' type="text" />
                    <span>
                        <MagnifyingGlassIcon width={24} height={24} />
                    </span>
                </div>
            </section>
            <section className={styles.sec2}>
                <span data-search-box-trigger onClick={(e) => displayHeaderContent(e, searchBoxRef.current,)} className={styles.searchIcon}>
                    <MagnifyingGlassIcon width={24} height={24} />
                </span>
                <div
                    id='Nav-hamburger'
                    className={styles.NavHamburger}
                    onClick={() => dispatch(toggleSideNavVisibility(!isSideNavOpen))}>
                    <span />
                    <span />
                    <span />
                </div>
                <span data-sec3-trigger onClick={(e) => displayHeaderContent(e, sec3Ref.current)} className={styles.ellipsisVerticalIcon}>
                    <EllipsisVerticalIcon width={24} height={24} />
                </span>
            </section>
            <section ref={sec3Ref} className={`${styles.sec3}`}>
                <Link to={"#"}>Docs</Link>
                <span className={styles.bellIcon}>
                    <Tooltip title="Notification">
                        <IconButton>
                            <BellIcon sx={{ fontSize: "1.2em" }} />
                        </IconButton>
                    </Tooltip>

                    <small>Notification</small>
                </span>

                <div data-userinfo-trigger onClick={(e) => displayHeaderContent(e, userInfoRef.current)} className={styles.user}>
                    <span>
                        <img src={avatarImg} alt="avatar" />
                    </span>
                    <div>
                        <span>Ayodeji</span>
                        <ArrowDownIcon />
                    </div>

                    <div ref={userInfoRef} className={styles.userInfo}>
                        <p onClick={handleLogOut}>Log Out</p>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Header