'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
    const [isMobile, setIsMobile] = useState(false)
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

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
            <section style={{
                padding: isMobile ? '100px 20px 60px' : '150px 50px 80px',
                background: `linear-gradient(135deg, ${green1}, #0a251a)`,
                color: 'white'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h1 style={{
                        fontSize: isMobile ? '36px' : '52px',
                        fontWeight: '700',
                        marginBottom: '20px',
                        lineHeight: '1.2'
                    }}>
                        ABOUT <span style={{ color: green2 }}>GREENPATROL</span>
                    </h1>
                    <p style={{
                        fontSize: isMobile ? '16px' : '18px',
                        opacity: 0.9,
                        maxWidth: '700px',
                        margin: '0 auto',
                        padding: isMobile ? '0 10px' : '0'
                    }}>
                        Your trusted partner in security, committed to excellence and innovation
                    </p>
                </motion.div>
            </section>

            {/* Company Overview */}
            <section style={{
                padding: isMobile ? '60px 20px 30px' : '80px 50px 40px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}
                    >
                        <h2 style={{
                            fontSize: isMobile ? '28px' : '36px',
                            color: green1,
                            marginBottom: '20px'
                        }}>
                            WHO WE ARE
                        </h2>
                        <p style={{
                            color: '#666',
                            lineHeight: '1.8',
                            maxWidth: '900px',
                            margin: '0 auto',
                            fontSize: isMobile ? '15px' : '16px',
                            padding: isMobile ? '0 10px' : '0'
                        }}>
                            GreenPatrol is a dynamic, customer-focused security company providing dependable protection solutions for commercial, institutional, agricultural, healthcare, and high-profile environments. Built on discipline, integrity, and operational readiness, we deliver excellence through meticulous recruitment, continuous training, strategic deployment, and proactive client engagement. Backed by an experienced management team with expertise in security training, surveys, and consultancy, we provide modern, effective solutions tailored to add real value to your business. At GreenPatrol, we believe security is a partnership, working closely with our clients to achieve exceptional results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Values - Point Form */}
            <section style={{
                padding: isMobile ? '0 20px 40px' : '0 50px 60px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: '#f8f8f8',
                            padding: isMobile ? '30px 20px' : '40px',
                            borderRadius: '12px',
                            border: `1px solid ${green2}`
                        }}
                    >
                        <h2 style={{
                            fontSize: isMobile ? '28px' : '32px',
                            color: green1,
                            marginBottom: '30px',
                            textAlign: 'center',
                            borderBottom: `2px solid ${green2}`,
                            paddingBottom: '15px'
                        }}>
                            OUR VALUES
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                            gap: isMobile ? '15px' : '25px'
                        }}>
                            {[
                                {
                                    title: 'Integrity',
                                    desc: `Its recruitment and operational
                                            controls are designed to strengthen
                                            trust and reduce avoidable client
                                            risk.`
                                },
                                {
                                    title: 'Professionalism',
                                    desc: `The company is committed to
                                            disciplined presentation, proper
                                            supervision 
                                            and 
                                            service delivery.`
                                },
                                {
                                    title: 'Responsiveness',
                                    desc: `It prioritises communication, swift
                                            escalation and practical support
                                            when it matters most.`
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: 'flex',
                                        gap: '15px',
                                        alignItems: 'flex-start',
                                        padding: isMobile ? '15px' : '20px',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                                    }}
                                >
                                    <span style={{
                                        color: green1,
                                        fontSize: '24px',
                                        fontWeight: '700',
                                        lineHeight: '1'
                                    }}>•</span>
                                    <div>
                                        <h3 style={{
                                            fontSize: isMobile ? '17px' : '18px',
                                            color: green1,
                                            marginBottom: '8px',
                                            fontWeight: '700'
                                        }}>
                                            {value.title}
                                        </h3>
                                        <p style={{
                                            color: '#666',
                                            lineHeight: '1.6',
                                            fontSize: isMobile ? '14px' : '14px',
                                            margin: 0
                                        }}>
                                            {value.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section style={{
                padding: isMobile ? '40px 20px' : '60px 50px',
                backgroundColor: '#f0f7f3'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: isMobile ? '20px' : '30px'
                    }}>
                        {[
                            {
                                title: 'OUR MISSION',
                                content: `To provide high-quality security services that protect
                                            people, property and the environment while being
                                            recognised for professionalism, integrity and service
                                            excellence`,
                                icon: '🎯'
                            },
                            {
                                title: 'OUR VISION',
                                content: `To be the preferred security services provider for
                                        businesses, organisations and individuals seeking
                                        reliable, effective and environmentally responsible
                                        security solutions.`,
                                icon: '👁️'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '30px 20px' : '40px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{ fontSize: isMobile ? '40px' : '48px', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{
                                    fontSize: isMobile ? '22px' : '24px',
                                    color: green1,
                                    marginBottom: '15px'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    color: '#666',
                                    lineHeight: '1.8',
                                    fontSize: isMobile ? '15px' : '16px',
                                    padding: isMobile ? '0 10px' : '0'
                                }}>
                                    {item.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{
                padding: isMobile ? '60px 20px' : '80px 50px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}
                    >
                        <h2 style={{
                            fontSize: isMobile ? '28px' : '36px',
                            color: green1,
                            marginBottom: '20px'
                        }}>
                            WHY CHOOSE US
                        </h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: isMobile ? '30px' : '40px'
                    }}>
                        {[
                            {
                                title: 'Licensed & Insured',
                                desc: 'Fully licensed by the relevant authorities and fully insured for your peace of mind.'
                            },
                            {
                                title: '24/7 Support',
                                desc: 'Round-the-clock customer support and emergency response teams always ready.'
                            },
                            {
                                title: 'Advanced Training',
                                desc: 'Continuous training programs ensure our guards are always up to date with latest security protocols.'
                            },
                            {
                                title: 'Modern Technology',
                                desc: 'Integration of cutting-edge security technology with traditional guarding services.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    display: 'flex',
                                    gap: isMobile ? '15px' : '20px',
                                    alignItems: 'flex-start',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    textAlign: isMobile ? 'center' : 'left'
                                }}
                            >
                                <div style={{
                                    width: isMobile ? '40px' : '50px',
                                    height: isMobile ? '40px' : '50px',
                                    borderRadius: '10px',
                                    backgroundColor: green2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: isMobile ? '20px' : '24px',
                                    color: green1,
                                    margin: isMobile ? '0 auto 10px' : '0'
                                }}>
                                    ✓
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: isMobile ? '18px' : '20px',
                                        color: green1,
                                        marginBottom: '10px'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: '#666',
                                        lineHeight: '1.6',
                                        fontSize: isMobile ? '15px' : '16px'
                                    }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}