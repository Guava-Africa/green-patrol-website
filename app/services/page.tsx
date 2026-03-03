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

    return (
        <div style={{
            fontFamily: 'Inter, sans-serif',
            margin: 0,
            padding: 0,
            backgroundColor: 'white'
        }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{
                padding: '150px 50px 80px',
                background: `linear-gradient(135deg, ${green1}, #0a251a)`,
                color: 'white'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h1 style={{ fontSize: '52px', fontWeight: '700', marginBottom: '20px' }}>
                        OUR <span style={{ color: green2 }}>SERVICES</span>
                    </h1>
                    <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        Comprehensive security solutions tailored to meet your specific needs.
                        Each service is delivered by highly trained professionals.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '80px 50px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px'
                    }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                style={{
                                    backgroundColor: '#f8f8f8',
                                    padding: '40px',
                                    borderRadius: '12px',
                                    border: `1px solid ${green2}`,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '24px', color: green1, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>{service.desc}</p>

                                <h4 style={{ fontSize: '16px', color: green1, marginBottom: '10px' }}>KEY FEATURES:</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{
                                            color: '#666',
                                            marginBottom: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}>
                                            <span style={{ color: 'green' }}>✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 50px',
                backgroundColor: '#f0f7f3',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '700px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '36px', color: green1, marginBottom: '20px' }}>
                        Need a Custom Solution?
                    </h2>
                    <p style={{ color: '#666', marginBottom: '30px' }}>
                        We can create a tailored security package for your specific requirements.
                    </p>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: green1,
                                color: 'white',
                                border: 'none',
                                padding: '15px 40px',
                                fontSize: '16px',
                                fontWeight: '600',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
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