'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

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
        setAboutDropdownOpen(false)
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

    // Check if About or Governance is active
    const isAboutActive = isActive('/about') || isActive('/corporate-governance') || isActive('/governance')

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
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src={Logo}
                        alt='GreenPatrol Logo'
                        height={isMobile ? (scrolled ? 55 : 65) : (scrolled ? 80 : 110)}
                        style={{
                            height: 'auto',
                            width: 'auto',
                            transition: 'height 0.3s ease'
                        }}
                    />
                </Link>

                {/* Desktop Navigation - ALL ITEMS ALIGNED */}
                {!isMobile && (
                    <div style={{ 
                        display: 'flex', 
                        gap: '40px', 
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        {/* Home Link */}
                        <Link 
                            href="/" 
                            style={{
                                color: isActive('/') ? green2 : 'white',
                                textDecoration: 'none',
                                fontWeight: isActive('/') ? '600' : '400',
                                fontSize: '16px',
                                position: 'relative',
                                paddingBottom: '4px',
                                display: 'inline-block',
                                lineHeight: '1'
                            }}
                        >
                            Home
                            {isActive('/') && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: green2,
                                    borderRadius: '2px'
                                }} />
                            )}
                        </Link>

                        {/* Services Link */}
                        <Link 
                            href="/services" 
                            style={{
                                color: isActive('/services') ? green2 : 'white',
                                textDecoration: 'none',
                                fontWeight: isActive('/services') ? '600' : '400',
                                fontSize: '16px',
                                position: 'relative',
                                paddingBottom: '4px',
                                display: 'inline-block',
                                lineHeight: '1'
                            }}
                        >
                            Services
                            {isActive('/services') && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: green2,
                                    borderRadius: '2px'
                                }} />
                            )}
                        </Link>
                        
                        {/* About with Dropdown */}
                        <div 
                            ref={dropdownRef}
                            style={{ 
                                position: 'relative',
                                display: 'inline-block'
                            }}
                            onMouseEnter={() => setAboutDropdownOpen(true)}
                            onMouseLeave={() => setAboutDropdownOpen(false)}
                        >
                            <button
                                style={{
                                    color: isAboutActive ? green2 : 'white',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontSize: '16px',
                                    fontWeight: isAboutActive ? '600' : '400',
                                    padding: 0,
                                    margin: 0,
                                    position: 'relative',
                                    paddingBottom: '4px',
                                    lineHeight: '1'
                                }}
                            >
                                About
                                <span style={{
                                    display: 'inline-block',
                                    transform: aboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                    fontSize: '10px'
                                }}>▼</span>
                                {isAboutActive && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: green2,
                                        borderRadius: '2px'
                                    }} />
                                )}
                            </button>
                            
                            {/* Dropdown Menu */}
                            {aboutDropdownOpen && (
                                <div
                                    onMouseEnter={() => setAboutDropdownOpen(true)}
                                    onMouseLeave={() => setAboutDropdownOpen(false)}
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 4px)',
                                        left: '0',
                                        minWidth: '220px',
                                        zIndex: 1002
                                    }}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(10, 37, 26, 0.98)',
                                        backdropFilter: 'blur(12px)',
                                        borderRadius: '12px',
                                        border: `1px solid ${green2}30`,
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
                                    }}>
                                        <Link 
                                            href="/about" 
                                            style={{
                                                display: 'block',
                                                padding: '12px 20px',
                                                color: isActive('/about') ? green2 : 'white',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                transition: 'all 0.2s ease',
                                                borderBottom: `1px solid ${green2}20`,
                                                position: 'relative'
                                            }}
                                        >
                                            About Us
                                            {isActive('/about') && (
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    width: '3px',
                                                    height: '20px',
                                                    backgroundColor: green2,
                                                    borderRadius: '2px'
                                                }} />
                                            )}
                                        </Link>
                                        <Link 
                                            href="/governance" 
                                            style={{
                                                display: 'block',
                                                padding: '12px 20px',
                                                color: isActive('/governance') ? green2 : 'white',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                transition: 'all 0.2s ease',
                                                position: 'relative'
                                            }}
                                        >
                                            Corporate Governance
                                            {isActive('/governance') && (
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    width: '3px',
                                                    height: '20px',
                                                    backgroundColor: green2,
                                                    borderRadius: '2px'
                                                }} />
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Contact Link */}
                        <Link 
                            href="/contact" 
                            style={{
                                color: isActive('/contact') ? green2 : 'white',
                                textDecoration: 'none',
                                fontWeight: isActive('/contact') ? '600' : '400',
                                fontSize: '16px',
                                position: 'relative',
                                paddingBottom: '4px',
                                display: 'inline-block',
                                lineHeight: '1'
                            }}
                        >
                            Contact
                            {isActive('/contact') && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: green2,
                                    borderRadius: '2px'
                                }} />
                            )}
                        </Link>
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
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{
                            color: isActive('/') ? green1 : green1,
                            textDecoration: 'none',
                            fontWeight: isActive('/') ? '700' : '500',
                            fontSize: '20px',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px 0',
                            borderBottom: isActive('/') ? `2px solid ${green1}` : 'none',
                            display: 'inline-block'
                        }}>
                            Home
                        </Link>
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{
                            color: isActive('/services') ? green1 : green1,
                            textDecoration: 'none',
                            fontWeight: isActive('/services') ? '700' : '500',
                            fontSize: '20px',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px 0',
                            borderBottom: isActive('/services') ? `2px solid ${green1}` : 'none',
                            display: 'inline-block'
                        }}>
                            Services
                        </Link>
                        
                        {/* Mobile About with dropdown */}
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <div 
                                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                                style={{
                                    color: isAboutActive ? green1 : green1,
                                    fontWeight: isAboutActive ? '700' : '500',
                                    fontSize: '20px',
                                    padding: '10px 0',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    borderBottom: isAboutActive ? `2px solid ${green1}` : 'none',
                                    width: 'fit-content',
                                    margin: '0 auto'
                                }}
                            >
                                About
                                <span style={{
                                    display: 'inline-block',
                                    transform: aboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                    fontSize: '14px'
                                }}>▼</span>
                            </div>
                            {aboutDropdownOpen && (
                                <div style={{
                                    marginTop: '15px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px',
                                    backgroundColor: '#f0f4f2',
                                    borderRadius: '12px',
                                    padding: '15px'
                                }}>
                                    <Link href="/about" onClick={() => {
                                        setMobileMenuOpen(false)
                                        setAboutDropdownOpen(false)
                                    }} style={{
                                        color: isActive('/about') ? green1 : green1,
                                        textDecoration: 'none',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        fontWeight: isActive('/about') ? '600' : '400'
                                    }}>
                                        About Us
                                    </Link>
                                    <Link href="/governance" onClick={() => {
                                        setMobileMenuOpen(false)
                                        setAboutDropdownOpen(false)
                                    }} style={{
                                        color: isActive('/governance') ? green1 : green1,
                                        textDecoration: 'none',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                        fontWeight: isActive('/governance') ? '600' : '400'
                                    }}>
                                        Corporate Governance
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{
                            color: isActive('/contact') ? green1 : green1,
                            textDecoration: 'none',
                            fontWeight: isActive('/contact') ? '700' : '500',
                            fontSize: '20px',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px 0',
                            borderBottom: isActive('/contact') ? `2px solid ${green1}` : 'none',
                            display: 'inline-block'
                        }}>
                            Contact
                        </Link>
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