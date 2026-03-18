'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ServicesPage() {
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    const services = [
        {
            title: 'Static Guards',
            desc: 'Professional on-site security personnel for constant vigilance at your location. Our guards are trained to monitor, report, and respond to any security concerns.',
            icon: '🛡️',
            features: ['24/7 Presence', 'Access Control', 'Incident Reporting', 'Patrol Services']
        },
        {
            title: 'Armed Guards',
            desc: 'Highly trained armed professionals for high-risk security situations. Licensed and certified with extensive experience in threat assessment.',
            icon: '⚔️',
            features: ['Firearms Trained', 'Tactical Response', 'Risk Assessment', 'Emergency Protocols']
        },
        {
            title: 'Undercover Guards',
            desc: 'Discreet plain-clothes security operatives for subtle protection. Blend in seamlessly while monitoring for suspicious activity.',
            icon: '🕵️',
            features: ['Covert Surveillance', 'Loss Prevention', 'Investigation', 'Plain Clothes']
        },
        {
            title: 'VIP Protection',
            desc: 'Executive protection services for high-profile individuals and events. Personal security details trained in advance security protocols.',
            icon: '👤',
            features: ['Close Protection', 'Route Security', 'Event Security', 'Advance Work']
        },
        {
            title: 'Canine Security',
            desc: 'Trained K-9 units for enhanced detection and patrol capabilities. Dogs trained in explosive detection, tracking, and apprehension.',
            icon: '🐕',
            features: ['Explosive Detection', 'Patrol K9', 'Search Operations', 'Handler Teams']
        },
        {
            title: 'Event Coverage',
            desc: 'Comprehensive security planning and execution for events of any size. From concerts to corporate gatherings, we ensure safety.',
            icon: '📋',
            features: ['Crowd Control', 'Access Management', 'Emergency Planning', 'VIP Areas']
        },
        {
            title: 'CCTV Monitoring',
            desc: '24/7 remote monitoring of your premises with instant alert response. State-of-the-art surveillance technology.',
            icon: '📹',
            features: ['Remote Monitoring', 'Motion Detection', 'Cloud Storage', 'Mobile Access']
        },
        {
            title: 'Security Consulting',
            desc: 'Expert security assessments and recommendations to improve your overall security posture.',
            icon: '💼',
            features: ['Risk Analysis', 'Security Audits', 'Policy Development', 'Training Programs']
        },
        {
            title: 'Rapid Response',
            desc: 'Quick deployment teams ready to respond to any security breach or emergency situation.',
            icon: '🚨',
            features: ['24/7 Dispatch', 'GPS Tracked', 'Intervention Teams', 'Police Liaison']
        }
    ]

    // Responsive styles object
    const styles = {
        heroSection: {
            padding: '120px 20px 60px',
            background: `linear-gradient(135deg, ${green1}, #0a251a)`,
            color: 'white'
        },
        heroTitle: {
            fontSize: 'clamp(32px, 8vw, 52px)',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
        },
        heroDescription: {
            fontSize: 'clamp(16px, 4vw, 18px)',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 15px'
        },
        servicesSection: {
            padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px)'
        },
        servicesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(15px, 3vw, 30px)',
            maxWidth: '1400px',
            margin: '0 auto'
        },
        serviceCard: {
            backgroundColor: '#f8f8f8',
            padding: 'clamp(25px, 5vw, 40px)',
            borderRadius: '12px',
            border: `1px solid ${green2}`,
            transition: 'all 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column' as const
        },
        serviceIcon: {
            fontSize: 'clamp(40px, 6vw, 48px)',
            marginBottom: '20px'
        },
        serviceTitle: {
            fontSize: 'clamp(20px, 4vw, 24px)',
            color: green1,
            marginBottom: '15px'
        },
        serviceDesc: {
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '20px',
            fontSize: 'clamp(14px, 3vw, 16px)'
        },
        featureTitle: {
            fontSize: 'clamp(14px, 3vw, 16px)',
            color: green1,
            marginBottom: '10px'
        },
        featureList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        featureItem: {
            color: '#666',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 'clamp(13px, 2.5vw, 14px)'
        },
        ctaSection: {
            padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px)',
            backgroundColor: '#f0f7f3',
            textAlign: 'center' as const
        },
        ctaTitle: {
            fontSize: 'clamp(24px, 6vw, 36px)',
            color: green1,
            marginBottom: '20px'
        },
        ctaText: {
            color: '#666',
            marginBottom: '30px',
            fontSize: 'clamp(14px, 3vw, 16px)',
            padding: '0 15px'
        },
        ctaButton: {
            background: green1,
            color: 'white',
            border: 'none',
            padding: 'clamp(12px, 3vw, 15px) clamp(30px, 6vw, 40px)',
            fontSize: 'clamp(14px, 3vw, 16px)',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer',
            width: 'fit-content',
            margin: '0 auto'
        }
    }

    return (
        <div style={{
            fontFamily: 'Inter, sans-serif',
            margin: 0,
            padding: 0,
            backgroundColor: 'white',
            overflowX: 'hidden'
        }}>
            <Navbar />

            {/* Hero Section */}
            <section style={styles.heroSection}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h1 style={styles.heroTitle}>
                        OUR <span style={{ color: green2 }}>SERVICES</span>
                    </h1>
                    <p style={styles.heroDescription}>
                        Comprehensive security solutions tailored to meet your specific needs.
                        Each service is delivered by highly trained professionals.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section style={styles.servicesSection}>
                <div style={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            style={styles.serviceCard}
                        >
                            <div style={styles.serviceIcon}>{service.icon}</div>
                            <h3 style={styles.serviceTitle}>{service.title}</h3>
                            <p style={styles.serviceDesc}>{service.desc}</p>

                            <h4 style={styles.featureTitle}>KEY FEATURES:</h4>
                            <ul style={styles.featureList}>
                                {service.features.map((feature, i) => (
                                    <li key={i} style={styles.featureItem}>
                                        <span style={{ color: 'green', flexShrink: 0 }}>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section style={styles.ctaSection}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '700px', margin: '0 auto' }}
                >
                    <h2 style={styles.ctaTitle}>
                        Need a Custom Solution?
                    </h2>
                    <p style={styles.ctaText}>
                        We can create a tailored security package for your specific requirements.
                    </p>
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={styles.ctaButton}
                        >
                            CONTACT US
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </div>
    )
}