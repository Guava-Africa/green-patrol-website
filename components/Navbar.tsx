'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/'
        return pathname?.startsWith(path)
    }

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                padding: scrolled ? '15px 50px' : '20px 50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                width: '100%',
                boxSizing: 'border-box',
                zIndex: 100,
                backgroundColor: scrolled ? 'rgba(10, 37, 26, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? `1px solid ${green2}20` : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <Link href="/">
                <Image src={Logo} alt='Green Patrol Logo' height={80} />
            </Link>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Link href="/services" style={{
                    color: isActive('/services') ? green2 : 'white',
                    textDecoration: 'none',
                    fontWeight: isActive('/services') ? '600' : '400'
                }}>
                    Services
                </Link>
                <Link href="/about" style={{
                    color: isActive('/about') ? green2 : 'white',
                    textDecoration: 'none',
                    fontWeight: isActive('/about') ? '600' : '400'
                }}>
                    About
                </Link>
                <Link href="/contact" style={{
                    color: isActive('/contact') ? green2 : 'white',
                    textDecoration: 'none',
                    fontWeight: isActive('/contact') ? '600' : '400'
                }}>
                    Contact Us
                </Link>
                <Link href="/rate-card" style={{
                    color: isActive('/rate-card') ? green2 : 'white',
                    textDecoration: 'none',
                    fontWeight: isActive('/rate-card') ? '600' : '400'
                }}>
                    Rate Card
                </Link>
                {/* <Link href="/join" style={{
                    background: green2,
                    color: green1,
                    padding: '10px 25px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: '700'
                }}>
                    Join Us
                </Link> */}
            </div>
        </motion.div>
    )
}