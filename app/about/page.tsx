'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

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

    // Leadership team data
    const leadershipTeam = {
        chairman: {
            name: 'Eng. Tafadzwa Muguti',
            title: 'Group Chairman',
            quote: '"Security is not just about protecting assets — it\'s about protecting dreams, families, and futures. At GreenPatrol, we build trust through action, not promises."',
            image: '/chairman.jpg'
        },
        generalManager: {
            name: 'Issac Zhou',
            title: 'General Manager',
            image: '/gm.jpg'
        },
        managers: [
            {
                name: 'Sarah Moyo',
                title: 'Operations Manager',
                bio: 'Expert in security logistics and tactical deployment with over 10 years of field experience.',
                image: '/manager1.jpg'
            },
            {
                name: 'David Ncube',
                title: 'Training & Compliance Manager',
                bio: 'Certified security trainer with international certification in risk management.',
                image: '/manager2.jpg'
            },
            {
                name: 'Patricia Zhou',
                title: 'Client Relations Manager',
                bio: 'Ensuring seamless communication and client satisfaction with a customer-first approach.',
                image: '/manager3.jpg'
            }
        ]
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

            {/* Message from Chairman - LARGEST IMAGE with rounded-lg */}
            <section style={{
                padding: isMobile ? '60px 20px' : '80px 50px',
                backgroundColor: '#f0f7f3'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '30px' : '50px',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: '24px',
                            padding: isMobile ? '30px 20px' : '50px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                        }}
                    >
                        {/* Chairman Image - Largest with rounded-lg */}
                        <div style={{
                            flex: '0 0 auto',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: isMobile ? '200px' : '300px',
                                height: isMobile ? '200px' : '300px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                backgroundColor: green2,
                                border: `4px solid ${green1}`,
                                margin: '0 auto',
                                position: 'relative'
                            }}>
                                {/* Image placeholder - uncomment when image is available */}
                                {/* <Image
                                    src={leadershipTeam.chairman.image}
                                    alt={leadershipTeam.chairman.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                /> */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: `linear-gradient(135deg, ${green1}, ${green2})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: isMobile ? '70px' : '110px',
                                    color: 'white'
                                }}>
                                    👤
                                </div>
                            </div>
                            <h3 style={{
                                fontSize: isMobile ? '22px' : '28px',
                                color: green1,
                                marginTop: '20px',
                                marginBottom: '5px'
                            }}>
                                {leadershipTeam.chairman.name}
                            </h3>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                color: '#666',
                                fontWeight: '600'
                            }}>
                                {leadershipTeam.chairman.title}
                            </p>
                        </div>

                        {/* Chairman Message */}
                        <div style={{
                            flex: '1',
                            textAlign: isMobile ? 'center' : 'left'
                        }}>
                            <h2 style={{
                                fontSize: isMobile ? '24px' : '32px',
                                color: green1,
                                marginBottom: '20px',
                                borderLeft: isMobile ? 'none' : `4px solid ${green1}`,
                                paddingLeft: isMobile ? '0' : '20px'
                            }}>
                                Message from the Chairman
                            </h2>
                            <p style={{
                                fontSize: isMobile ? '16px' : '18px',
                                lineHeight: '1.8',
                                color: '#444',
                                fontStyle: 'italic',
                                marginBottom: '20px'
                            }}>
                                {leadershipTeam.chairman.quote}
                            </p>
                            <div style={{
                                borderTop: `1px solid ${green2}`,
                                paddingTop: '20px',
                                marginTop: '10px'
                            }}>
                                <p style={{
                                    fontSize: isMobile ? '14px' : '15px',
                                    color: '#666',
                                    lineHeight: '1.6'
                                }}>
                                    Under my leadership, GreenPatrol has grown from a vision to one of the most trusted security providers in the region. 
                                    Our commitment to integrity, excellence, and innovation remains unwavering as we continue to protect what matters most to our clients.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* General Manager Section - Image Only */}
            <section style={{
                padding: isMobile ? '60px 20px' : '80px 50px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: 'center',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: isMobile ? '40px 20px' : '50px',
                            boxShadow: '0 5px 25px rgba(0,0,0,0.05)',
                            border: `1px solid ${green2}`
                        }}
                    >
                        <h2 style={{
                            fontSize: isMobile ? '24px' : '32px',
                            color: green1,
                            marginBottom: '30px'
                        }}>
                            Meet Our General Manager
                        </h2>
                        
                        {/* GM Image */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: isMobile ? '180px' : '220px',
                                height: isMobile ? '180px' : '220px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: green2,
                                border: `3px solid ${green1}`,
                                margin: '0 auto',
                                position: 'relative'
                            }}>
                                {/* Image placeholder - uncomment when image is available */}
                                {/* <Image
                                    src={leadershipTeam.generalManager.image}
                                    alt={leadershipTeam.generalManager.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                /> */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: `linear-gradient(135deg, ${green2}, ${green1}20)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: isMobile ? '60px' : '80px',
                                    color: green1
                                }}>
                                    👨‍💼
                                </div>
                            </div>
                            <h3 style={{
                                fontSize: isMobile ? '22px' : '26px',
                                color: green1,
                                marginTop: '20px',
                                marginBottom: '5px'
                            }}>
                                {leadershipTeam.generalManager.name}
                            </h3>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                color: '#666',
                                fontWeight: '600'
                            }}>
                                {leadershipTeam.generalManager.title}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Managers Section - Properly Aligned */}
            <section style={{
                padding: isMobile ? '40px 20px 60px' : '60px 50px 80px',
                backgroundColor: '#f8fbf9'
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
                            marginBottom: '15px'
                        }}>
                            Our Leadership Team
                        </h2>
                        <p style={{
                            fontSize: isMobile ? '15px' : '16px',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Dedicated professionals committed to your safety
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '30px' : '30px',
                        alignItems: 'stretch'
                    }}>
                        {leadershipTeam.managers.map((manager, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    padding: isMobile ? '30px 20px' : '35px 25px',
                                    textAlign: 'center',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                    border: `1px solid ${green2}30`,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                                whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
                            >
                                <div style={{
                                    width: isMobile ? '130px' : '160px',
                                    height: isMobile ? '130px' : '160px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    backgroundColor: green2,
                                    margin: '0 auto 20px',
                                    border: `3px solid ${green1}`,
                                    position: 'relative'
                                }}>
                                    {/* Image placeholder - uncomment when image is available */}
                                    {/* <Image
                                        src={manager.image}
                                        alt={manager.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    /> */}
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: `linear-gradient(135deg, ${green2}, ${green1}10)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: isMobile ? '50px' : '65px',
                                        color: green1
                                    }}>
                                        {index === 0 ? '👩‍💼' : index === 1 ? '👨‍🏫' : '👩‍💻'}
                                    </div>
                                </div>
                                <h3 style={{
                                    fontSize: isMobile ? '18px' : '20px',
                                    color: green1,
                                    marginBottom: '8px',
                                    fontWeight: '700'
                                }}>
                                    {manager.name}
                                </h3>
                                <p style={{
                                    fontSize: isMobile ? '13px' : '14px',
                                    color: green1,
                                    fontWeight: '600',
                                    marginBottom: '15px'
                                }}>
                                    {manager.title}
                                </p>
                                <p style={{
                                    fontSize: isMobile ? '13px' : '14px',
                                    color: '#666',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {manager.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Overview (Who We Are) */}
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