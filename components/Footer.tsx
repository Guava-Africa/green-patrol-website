'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from '@/public/logo.png'

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const currentYear = new Date().getFullYear()
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768)
            setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
        }
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Determine grid columns based on screen size
    const getGridColumns = () => {
        if (isMobile) return '1fr'
        if (isTablet) return 'repeat(2, 1fr)'
        return '2fr 2fr 1.5fr'
    }

    return (
        <footer style={{
            backgroundColor: '#0a251a',
            color: 'white',
            padding: isMobile ? '50px 20px 20px' : isTablet ? '60px 30px 25px' : '80px 50px 30px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: getGridColumns(),
                gap: isMobile ? '40px' : isTablet ? '50px' : '60px',
                marginBottom: isMobile ? '40px' : isTablet ? '50px' : '60px'
            }}>
                {/* Company Info */}
                <div style={{
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt='GreenPatrol Logo'
                            height={isMobile ? 50 : 60}
                            style={{
                                margin: isMobile ? '0 auto' : '0',
                                display: isMobile ? 'block' : 'inline-block'
                            }}
                        />
                    </Link>
                    <p style={{
                        color: '#aaa',
                        lineHeight: '1.8',
                        marginBottom: '20px',
                        marginTop: '20px',
                        fontSize: isMobile ? '14px' : '16px',
                        maxWidth: isMobile ? '300px' : 'none',
                        marginLeft: isMobile ? 'auto' : '0',
                        marginRight: isMobile ? 'auto' : '0'
                    }}>
                        Professional security services you can trust.
                        Protecting businesses and families since 2025.
                    </p>
                </div>

                {/* Contact Information */}
                <div style={{
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    <h4 style={{
                        fontSize: isMobile ? '16px' : '18px',
                        marginBottom: isMobile ? '20px' : '25px',
                        color: green2
                    }}>
                        CONTACT US
                    </h4>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? '15px' : '20px',
                        alignItems: isMobile ? 'center' : 'flex-start'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: isMobile ? 'center' : 'flex-start',
                            gap: '10px',
                            flexDirection: isMobile ? 'column' : 'row',
                            textAlign: isMobile ? 'center' : 'left'
                        }}>
                            <span style={{ color: green2, fontSize: '20px' }}>📍</span>
                            <div>
                                <p style={{ color: '#aaa', margin: 0, fontSize: isMobile ? '14px' : '16px' }}>Head Office</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0', fontSize: isMobile ? '14px' : '16px' }}>
                                    55 Lawley Avenue,<br />
                                    Belvedere <br />
                                    Harare
                                </p>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: isMobile ? 'center' : 'center',
                            gap: '10px',
                            flexDirection: isMobile ? 'column' : 'row',
                            textAlign: isMobile ? 'center' : 'left'
                        }}>
                            <span style={{ color: green2, fontSize: '20px' }}>📞</span>
                            <div>
                                <p style={{ color: '#aaa', margin: 0, fontSize: isMobile ? '14px' : '16px' }}>Phone numbers</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0', fontSize: isMobile ? '14px' : '16px' }}>+263 77 608 9167</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0', fontSize: isMobile ? '14px' : '16px' }}>+263 77 234 6409</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0', fontSize: isMobile ? '14px' : '16px' }}>+263 78 786 2157</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div style={{
                    textAlign: isMobile ? 'center' : 'left',
                    gridColumn: isTablet ? 'span 2' : 'auto'
                }}>
                    <h4 style={{
                        fontSize: isMobile ? '16px' : '18px',
                        marginBottom: isMobile ? '20px' : '25px',
                        color: green2
                    }}>
                        QUICK LINKS
                    </h4>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'row' : 'column',
                        flexWrap: isMobile ? 'wrap' : 'nowrap',
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        gap: isMobile ? '15px' : '15px'
                    }}>
                        {[
                            { name: 'Services', path: '/services' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Contact', path: '/contact' },
                            // { name: 'Rate Card', path: '/rate-card' },
                            // { name: 'Join Us', path: '/join' }
                        ].map((link, i) => (
                            <Link key={i} href={link.path} style={{
                                color: '#aaa',
                                textDecoration: 'none',
                                transition: 'color 0.3s',
                                fontSize: isMobile ? '14px' : '16px',
                                padding: isMobile ? '5px 10px' : '0',
                                backgroundColor: isMobile ? 'rgba(200, 230, 212, 0.1)' : 'transparent',
                                borderRadius: isMobile ? '4px' : '0'
                            }}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                borderTop: `1px solid ${green2}20`,
                paddingTop: isMobile ? '20px' : isTablet ? '25px' : '30px',
                display: 'flex',
                flexDirection: isMobile ? 'column' : isTablet ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'center' : 'center',
                color: '#666',
                fontSize: isMobile ? '12px' : isTablet ? '13px' : '14px',
                textAlign: isMobile ? 'center' : 'left',
                gap: isMobile ? '10px' : isTablet ? '15px' : '0'
            }}>
                <span>© {currentYear} GreenPatrol Security. All rights reserved.</span>
                <span style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '5px' : '20px',
                    alignItems: 'center'
                }}>
                    <span>Licensed & Bonded</span>
                    <span style={{
                        display: isMobile ? 'none' : 'inline',
                        color: '#444'
                    }}>|</span>
                    <span>Privacy Policy</span>
                    <span style={{
                        display: isMobile ? 'none' : 'inline',
                        color: '#444'
                    }}>|</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </footer>
    )
}