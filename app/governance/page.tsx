'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IoEyeSharp } from 'react-icons/io5'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { IoWarningSharp } from 'react-icons/io5'
import { IoFlashSharp } from 'react-icons/io5'
import { IoLinkSharp } from 'react-icons/io5'
import { IoDiamondSharp } from 'react-icons/io5'

export default function CorporateGovernancePage() {
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
                        CORPORATE <span style={{ color: green2 }}>GOVERNANCE</span>
                    </h1>
                    <p style={{
                        fontSize: isMobile ? '16px' : '18px',
                        opacity: 0.9,
                        maxWidth: '700px',
                        margin: '0 auto',
                        padding: isMobile ? '0 10px' : '0'
                    }}>
                        Commitment to transparency, accountability, and ethical leadership
                    </p>
                </motion.div>
            </section>

            {/* Governance Content */}
            <section style={{
                padding: isMobile ? '60px 20px' : '80px 50px'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: '#f8fbf9',
                            padding: isMobile ? '30px 20px' : '50px',
                            borderRadius: '20px',
                            border: `1px solid ${green2}`,
                            boxShadow: '0 5px 20px rgba(0,0,0,0.03)'
                        }}
                    >
                        {/* First Paragraph */}
                        <p style={{
                            fontSize: isMobile ? '16px' : '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '25px',
                            textAlign: 'justify'
                        }}>
                            GreenPatrol is committed to the highest standards of corporate governance, 
                            ensuring transparency, accountability, and ethical decision-making across 
                            all levels of the organization. The company is managed under the oversight 
                            of the Africapaciti Board, which provides strategic direction, risk oversight, 
                            and governance frameworks that align with international best practices.
                        </p>

                        {/* Second Paragraph */}
                        <p style={{
                            fontSize: isMobile ? '16px' : '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '0',
                            textAlign: 'justify'
                        }}>
                            The Board is responsible for ensuring that GreenPatrol operates with integrity, 
                            complies with all regulatory requirements, and maintains robust internal controls. 
                            Through regular board meetings, independent audits, and a commitment to stakeholder 
                            engagement, Africapaciti ensures that GreenPatrol remains a trusted and responsible 
                            security partner, dedicated to protecting people, property, and the environment 
                            while upholding the highest ethical standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Key Principles Section - Professional Icons */}
            <section style={{
                padding: isMobile ? '0 20px 80px' : '0 50px 100px'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                            gap: isMobile ? '20px' : '30px'
                        }}
                    >
                        {[
                            {
                                title: 'TRANSPARENCY',
                                description: 'Open communication and clear reporting structures',
                                icon: <IoEyeSharp size={isMobile ? 40 : 48} color={green1} />
                            },
                            {
                                title: 'ACCOUNTABILITY',
                                description: 'Clear responsibility at every level of management',
                                icon: <IoLinkSharp size={isMobile ? 40 : 48} color={green1} />
                            },
                            {
                                title: 'ETHICAL LEADERSHIP',
                                description: 'Leading with integrity and moral responsibility',
                                icon: <IoDiamondSharp size={isMobile ? 40 : 48} color={green1} />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, borderColor: green1 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '25px 15px' : '30px 20px',
                                    borderRadius: '16px',
                                    textAlign: 'center',
                                    border: `1.5px solid ${green2}60`,
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    marginBottom: '15px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{
                                    fontSize: isMobile ? '16px' : '18px',
                                    color: green1,
                                    marginBottom: '10px',
                                    fontWeight: '700',
                                    letterSpacing: '1px'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: isMobile ? '13px' : '14px',
                                    color: '#666',
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}