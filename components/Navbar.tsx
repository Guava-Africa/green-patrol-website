'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const pathname = usePathname()
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/'
        return pathname?.startsWith(path)
    }

    return (
        <>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    padding: scrolled
                        ? (isMobile ? '10px 15px' : '15px 50px')
                        : (isMobile ? '15px 15px' : '20px 50px'),
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'fixed',
                    width: '100%',
                    boxSizing: 'border-box',
                    zIndex: 1000,
                    backgroundColor: scrolled ? 'rgba(10, 37, 26, 0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    borderBottom: scrolled ? `1px solid ${green2}20` : 'none',
                    transition: 'all 0.3s ease'
                }}
            >
                <Link href="/">
                    <Image
                        src={Logo}
                        alt='GreenPatrol Logo'
                        height={isMobile ? (scrolled ? 40 : 50) : (scrolled ? 60 : 80)}
                        style={{
                            height: 'auto',
                            width: 'auto',
                            transition: 'height 0.3s ease'
                        }}
                    />
                </Link>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                        <Link href="/services" style={{
                            color: isActive('/services') ? green2 : 'white',
                            textDecoration: 'none',
                            fontWeight: isActive('/services') ? '600' : '400',
                            fontSize: '16px'
                        }}>
                            Services
                        </Link>
                        <Link href="/about" style={{
                            color: isActive('/about') ? green2 : 'white',
                            textDecoration: 'none',
                            fontWeight: isActive('/about') ? '600' : '400',
                            fontSize: '16px'
                        }}>
                            About
                        </Link>
                        <Link href="/contact" style={{
                            color: isActive('/contact') ? green2 : 'white',
                            textDecoration: 'none',
                            fontWeight: isActive('/contact') ? '600' : '400',
                            fontSize: '16px'
                        }}>
                            Contact Us
                        </Link>
                        {/* <Link href="/rate-card" style={{
                            color: isActive('/rate-card') ? green2 : 'white',
                            textDecoration: 'none',
                            fontWeight: isActive('/rate-card') ? '600' : '400',
                            fontSize: '16px'
                        }}>
                            Rate Card
                        </Link> */}
                    </div>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '10px',
                            zIndex: 1001,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Toggle menu"
                    >
                        <div style={{
                            width: '25px',
                            height: '2px',
                            backgroundColor: mobileMenuOpen ? green2 : 'white',
                            margin: '3px 0',
                            transition: 'all 0.3s ease',
                            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                        }} />
                        <div style={{
                            width: '25px',
                            height: '2px',
                            backgroundColor: mobileMenuOpen ? green2 : 'white',
                            margin: '3px 0',
                            transition: 'all 0.3s ease',
                            opacity: mobileMenuOpen ? 0 : 1
                        }} />
                        <div style={{
                            width: '25px',
                            height: '2px',
                            backgroundColor: mobileMenuOpen ? green2 : 'white',
                            margin: '3px 0',
                            transition: 'all 0.3s ease',
                            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                        }} />
                    </button>
                )}
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isMobile && mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'white',
                        zIndex: 999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'none',
                            border: 'none',
                            fontSize: '32px',
                            cursor: 'pointer',
                            color: green1,
                            zIndex: 1000
                        }}
                        aria-label="Close menu"
                    >
                        ×
                    </button>

                    {/* Mobile Navigation Links */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{
                            color: isActive('/services') ? green2 : green1,
                            textDecoration: 'none',
                            fontWeight: isActive('/services') ? '600' : '400',
                            fontSize: '20px',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px 0'
                        }}>
                            Services
                        </Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{
                            color: isActive('/about') ? green2 : green1,
                            textDecoration: 'none',
                            fontWeight: isActive('/about') ? '600' : '400',
                            fontSize: '20px',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px 0'
                        }}>
                            About
                        </Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{
                            color: isActive('/contact') ? green2 : green1,
                            textDecoration: 'none',
                            fontWeight: isActive('/contact') ? '600' : '400',
                            fontSize: '20px',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px 0'
                        }}>
                            Contact Us
                        </Link>
                        {/* <Link href="/rate-card" onClick={() => setMobileMenuOpen(false)} style={{
                            color: isActive('/rate-card') ? green2 : green1,
                            textDecoration: 'none',
                            fontWeight: isActive('/rate-card') ? '600' : '400',
                            fontSize: '20px',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px 0'
                        }}>
                            Rate Card
                        </Link> */}
                    </div>

                    {/* Mobile Menu Footer */}
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: 0,
                        right: 0,
                        textAlign: 'center',
                        color: green1,
                        fontSize: '14px',
                        opacity: 0.7
                    }}>
                        <p>PROTECTION • SECURITY • TRUST</p>
                    </div>
                </motion.div>
            )}
        </>
    )
}