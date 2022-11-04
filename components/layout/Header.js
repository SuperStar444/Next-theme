/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/">
                                    <a className="d-flex">
                                        {headerStyle ? <img alt="Agon" src="/assets/imgs/template/logo-white.svg" /> : <img alt="Agon" src="/assets/imgs/template/logo.svg" />}

                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children">
                                            <Link href="#"><a className="active">Home</a></Link>
                                            <ul className="sub-menu two-col">
                                                <li>
                                                    <Link href="/"><a><i className="fi fi-rr-home" />Homepage - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-2"><a><i className="fi fi-rr-home" />Homepage - 2</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-3"><a><i className="fi fi-rr-home" />Homepage - 3</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-4"><a><i className="fi fi-rr-home" />Homepage - 4</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-5"><a><i className="fi fi-rr-home" />Homepage - 5</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-6"><a><i className="fi fi-rr-home" />Homepage - 6</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-7"><a><i className="fi fi-rr-home" />Homepage - 7</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/index-8"><a><i className="fi fi-rr-home" />Homepage - 8</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#"><a>About</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-about-1"><a><i className="fi fi-rr-star" />About Us - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-2"><a><i className="fi fi-rr-star" />About Us - 2</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-3"><a><i className="fi fi-rr-star" />About Us - 3</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#"><a>Company</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-service-1"><a className="closer"><i className="fi fi-rr-gem" />Services - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-service-2"><a className="closer"><i className="fi fi-rr-gem" />Services - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-pricing-1"><a className="closer"><i className="fi fi-rr-database" />Pricing - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-pricing-2"><a className="closer"><i className="fi fi-rr-database" />Pricing - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-faqs-1"><a className="closer"><i className="fi fi-rr-headset" />FAQs - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-faqs-2"><a className="closer"><i className="fi fi-rr-headset" />FAQs - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-career"><a className="closer"><i className="fi fi-rr-briefcase" />Career</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-career-detail"><a className="closer"><i className="fi fi-rr-briefcase" />Career Detail</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#"><a>Pages</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-contact"><a><i className="fi fi-rr-paper-plane" />Contact</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-signup"><a><i className="fi fi-rr-user-add" />Sign Up</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login"><a><i className="fi fi-rr-fingerprint" />Log In</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-reset"><a><i className="fi fi-rr-settings" />Reset Password</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/404"><a><i className="fi fi-rr-exclamation" />Error 404</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#"><a>Blog</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/blog-1"><a className="closer"><i className="fi fi-rr-edit" />Blog Archive - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-2"><a className="closer"><i className="fi fi-rr-edit" />Blog Archive - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/blog-single"><a><i className="fi fi-rr-document-signed" />Blog Single</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#">Shop</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/page-shop-grid-1"><a className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 1</a></Link></li>
                                                <li><Link href="/page-shop-grid-2"><a className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 2</a></Link></li>
                                                <li><Link href="/shop/1"><a className="closer"><i className="fi fi-rr-edit"></i>Product Details</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link href="/page-signup"><a className="btn btn-default hover-up icon-arrow-right">Get Started</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;