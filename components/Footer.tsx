'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    return (
        <footer style={{
            backgroundColor: '#0a251a',
            color: 'white',
            padding: '80px 50px 30px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '2fr 2fr 1.5fr',
                gap: '60px',
                marginBottom: '60px'
            }}>
                {/* Company Info */}
                <div>
                    <Link href="/">
                        <Image src={Logo} alt='Green Patrol Logo' height={60} />
                    </Link>
                    <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '20px', marginTop: '20px' }}>
                        Professional security services you can trust.
                        Protecting businesses and families since 2025.
                    </p>
                </div>

                {/* Contact Information */}
                <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '25px', color: green2 }}>CONTACT US</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ color: green2, fontSize: '20px' }}>📍</span>
                            <div>
                                <p style={{ color: '#aaa', margin: 0 }}>Head Office</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0' }}>
                                    55 Lawley Avenue,<br />
                                    Belvedere <br />
                                    Harare
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: green2, fontSize: '20px' }}>📞</span>
                            <div>
                                <p style={{ color: '#aaa', margin: 0 }}>Phone numbers</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0' }}>+263 77 608 9167</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0' }}>+263 77 234 6409</p>
                                <p style={{ color: 'white', margin: '5px 0 0 0' }}>+263 78 786 2157</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '25px', color: green2 }}>QUICK LINKS</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                            { name: 'Services', path: '/services' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Contact', path: '/contact' },
                            { name: 'Rate Card', path: '/rate-card' },
                            { name: 'Join Us', path: '/join' }
                        ].map((link, i) => (
                            <Link key={i} href={link.path} style={{
                                color: '#aaa',
                                textDecoration: 'none',
                                transition: 'color 0.3s'
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
                paddingTop: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                color: '#666',
                fontSize: '14px'
            }}>
                <span>© {currentYear} GreenPatrol Security. All rights reserved.</span>
                <span>Licensed & Bonded | Privacy Policy | Terms of Service</span>
            </div>
        </footer>
    )
}