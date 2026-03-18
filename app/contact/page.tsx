'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
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
                padding: isMobile ? '100px 20px 60px' : isTablet ? '120px 30px 70px' : '150px 50px 80px',
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
                        fontSize: isMobile ? '36px' : isTablet ? '44px' : '52px',
                        fontWeight: '700',
                        marginBottom: '20px',
                        lineHeight: '1.2'
                    }}>
                        CONTACT <span style={{ color: green2 }}>US</span>
                    </h1>
                    <p style={{
                        fontSize: isMobile ? '16px' : isTablet ? '17px' : '18px',
                        opacity: 0.9,
                        maxWidth: '700px',
                        margin: '0 auto',
                        padding: isMobile ? '0 10px' : '0'
                    }}>
                        Get in touch with us for any inquiries or to request our services
                    </p>
                </motion.div>
            </section>

            {/* Contact Information */}
            <section style={{
                padding: isMobile ? '60px 20px' : isTablet ? '70px 30px' : '80px 50px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{
                            fontSize: isMobile ? '28px' : isTablet ? '30px' : '32px',
                            color: green1,
                            marginBottom: isMobile ? '30px' : '40px',
                            textAlign: 'center'
                        }}>
                            Get In Touch
                        </h2>

                        {/* Address and Phone Section */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(2, 1fr)',
                            gap: isMobile ? '20px' : isTablet ? '30px' : '40px',
                            marginBottom: isMobile ? '20px' : isTablet ? '30px' : '40px'
                        }}>
                            {/* Address Section */}
                            <div style={{
                                backgroundColor: '#f8f8f8',
                                padding: isMobile ? '25px 20px' : '30px',
                                borderRadius: '12px',
                                border: `1px solid ${green2}`
                            }}>
                                <h3 style={{
                                    fontSize: isMobile ? '22px' : '24px',
                                    color: green1,
                                    marginBottom: isMobile ? '20px' : '25px',
                                    borderBottom: `2px solid ${green2}`,
                                    paddingBottom: '10px'
                                }}>
                                    📍 Our Locations
                                </h3>

                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{
                                        fontSize: isMobile ? '17px' : '18px',
                                        color: green1,
                                        marginBottom: '10px'
                                    }}>
                                        HEAD OFFICE
                                    </h4>
                                    <p style={{
                                        color: '#666',
                                        lineHeight: '1.8',
                                        marginBottom: '5px',
                                        fontSize: isMobile ? '15px' : '16px'
                                    }}>
                                        55 Lawley Avenue
                                    </p>
                                    <p style={{
                                        color: '#666',
                                        lineHeight: '1.8',
                                        marginBottom: '5px',
                                        fontSize: isMobile ? '15px' : '16px'
                                    }}>
                                        Belvedere
                                    </p>
                                    <p style={{
                                        color: '#666',
                                        lineHeight: '1.8',
                                        fontSize: isMobile ? '15px' : '16px'
                                    }}>
                                        Harare
                                    </p>
                                </div>
                            </div>

                            {/* Phone Numbers Section */}
                            <div style={{
                                backgroundColor: '#f8f8f8',
                                padding: isMobile ? '25px 20px' : '30px',
                                borderRadius: '12px',
                                border: `1px solid ${green2}`
                            }}>
                                <h3 style={{
                                    fontSize: isMobile ? '22px' : '24px',
                                    color: green1,
                                    marginBottom: isMobile ? '20px' : '25px',
                                    borderBottom: `2px solid ${green2}`,
                                    paddingBottom: '10px'
                                }}>
                                    📞 Call Us
                                </h3>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        fontSize: isMobile ? '17px' : '18px',
                                        color: green1,
                                        marginBottom: '10px'
                                    }}>
                                        OFFICE
                                    </h4>
                                    <p style={{
                                        color: '#666',
                                        marginBottom: '5px',
                                        fontSize: isMobile ? '15px' : '16px'
                                    }}>
                                        +263 776 089 167
                                    </p>
                                    <p style={{
                                        color: '#666',
                                        marginBottom: '5px',
                                        fontSize: isMobile ? '15px' : '16px'
                                    }}>
                                        +263 772 346 409
                                    </p>
                                    <p style={{
                                        color: '#666',
                                        fontSize: isMobile ? '15px' : '16px'
                                    }}>
                                        +263 787 862 157
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Email and Hours Section */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(2, 1fr)',
                            gap: isMobile ? '20px' : isTablet ? '30px' : '40px'
                        }}>
                            {/* Email Section */}
                            <div style={{
                                backgroundColor: '#f8f8f8',
                                padding: isMobile ? '25px 20px' : '30px',
                                borderRadius: '12px',
                                border: `1px solid ${green2}`
                            }}>
                                <h3 style={{
                                    fontSize: isMobile ? '22px' : '24px',
                                    color: green1,
                                    marginBottom: isMobile ? '20px' : '25px',
                                    borderBottom: `2px solid ${green2}`,
                                    paddingBottom: '10px'
                                }}>
                                    ✉️ Email Us
                                </h3>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    fontSize: isMobile ? '15px' : '16px'
                                }}>
                                    <strong style={{ color: green1 }}>General Inquiries:</strong><br />
                                    info@greenpatrol.co.zw
                                </p>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    fontSize: isMobile ? '15px' : '16px'
                                }}>
                                    <strong style={{ color: green1 }}>Sales:</strong><br />
                                    sales@greenpatrol.co.zw
                                </p>
                                <p style={{
                                    color: '#666',
                                    fontSize: isMobile ? '15px' : '16px'
                                }}>
                                    <strong style={{ color: green1 }}>Support:</strong><br />
                                    support@greenpatrol.co.zw
                                </p>
                            </div>

                            {/* Business Hours Section */}
                            <div style={{
                                backgroundColor: '#f8f8f8',
                                padding: isMobile ? '25px 20px' : '30px',
                                borderRadius: '12px',
                                border: `1px solid ${green2}`
                            }}>
                                <h3 style={{
                                    fontSize: isMobile ? '22px' : '24px',
                                    color: green1,
                                    marginBottom: isMobile ? '20px' : '25px',
                                    borderBottom: `2px solid ${green2}`,
                                    paddingBottom: '10px'
                                }}>
                                    🕒 Business Hours
                                </h3>
                                <div style={{
                                    color: '#666',
                                    fontSize: isMobile ? '15px' : '16px'
                                }}>
                                    <p style={{
                                        marginBottom: '15px',
                                        display: 'flex',
                                        flexDirection: isMobile ? 'column' : 'row',
                                        justifyContent: 'space-between',
                                        alignItems: isMobile ? 'flex-start' : 'center',
                                        gap: isMobile ? '5px' : '0'
                                    }}>
                                        <span>Monday - Friday:</span>
                                        <span style={{ fontWeight: '600' }}>8:00 AM - 6:00 PM</span>
                                    </p>
                                    <p style={{
                                        marginBottom: '15px',
                                        display: 'flex',
                                        flexDirection: isMobile ? 'column' : 'row',
                                        justifyContent: 'space-between',
                                        alignItems: isMobile ? 'flex-start' : 'center',
                                        gap: isMobile ? '5px' : '0'
                                    }}>
                                        <span>Saturday:</span>
                                        <span style={{ fontWeight: '600' }}>9:00 AM - 2:00 PM</span>
                                    </p>
                                    <p style={{
                                        display: 'flex',
                                        flexDirection: isMobile ? 'column' : 'row',
                                        justifyContent: 'space-between',
                                        alignItems: isMobile ? 'flex-start' : 'center',
                                        gap: isMobile ? '5px' : '0'
                                    }}>
                                        <span>Sunday:</span>
                                        <span style={{ fontWeight: '600', color: '#d32f2f' }}>Closed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}