'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/public/hero.png'

export default function Home() {
  const green1 = '#0f4d36'
  const green2 = '#c8e6d4'

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#0a251a'
    }}>
      <Navbar />

      {/* Hero Section - IMPROVED: cleaner, more trustworthy, layman-friendly */}
      <section style={{
        minHeight: '90vh',
        background: `radial-gradient(ellipse at 20% 40%, #0e3b2a, #071a12)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem'
      }}>
        {/* Abstract background pattern - subtle shield motif */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '48px',
          pointerEvents: 'none'
        }} />

        {/* Soft ambient glows */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: 'absolute',
            right: '-10%',
            top: '20%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${green2}, transparent 70%)`,
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          style={{
            position: 'absolute',
            left: '-5%',
            bottom: '0%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${green1}, transparent 70%)`,
            filter: 'blur(50px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'clamp(2rem, 5vw, 3rem)',
            justifyContent: 'space-between'
          }}>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                flex: '1.2',
                minWidth: '280px'
              }}
            >
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  display: 'inline-block',
                  background: `rgba(200, 230, 212, 0.15)`,
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 1rem',
                  borderRadius: '40px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  color: green2,
                  marginBottom: '1.5rem',
                  border: `0.5px solid ${green2}40`
                }}
              >
                ✓ LICENSED & INSURED PROTECTION
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.15',
                  color: 'white',
                  marginBottom: '1.2rem',
                  letterSpacing: '-0.02em'
                }}
              >
                Your Safety,<br />
                <span style={{ color: green2, borderBottom: `3px solid ${green2}`, display: 'inline-block' }}>
                  Our Mission.
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.9 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  lineHeight: '1.5',
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: '550px',
                  marginBottom: '2rem'
                }}
              >
                Professional security guards, 24/7 emergency response, and smart surveillance.
                We keep your family, business, and assets safe — day and night.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                  marginBottom: '2.5rem'
                }}
              >
                {/* <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: green2,
                      color: green1,
                      fontWeight: '700',
                      padding: '0.9rem 2rem',
                      borderRadius: '60px',
                      border: 'none',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      boxShadow: '0 10px 20px -5px rgba(0,0,0,0.3)'
                    }}
                  >
                    Free Security Assessment →
                  </motion.button>
                </Link>
                <Link href="#services" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>
                  Explore services ↓
                </Link> */}
              </motion.div>

              {/* Trust stats - great for layman */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <span style={{ fontWeight: '800', fontSize: '1.6rem', color: green2 }}>500+</span><br />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>CLIENTS PROTECTED</span>
                </div>
                <div>
                  <span style={{ fontWeight: '800', fontSize: '1.6rem', color: green2 }}>24/7</span><br />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>EMERGENCY DISPATCH</span>
                </div>
                <div>
                  <span style={{ fontWeight: '800', fontSize: '1.6rem', color: green2 }}>100%</span><br />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>TRAINED PROFESSIONALS</span>
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                flex: '1',
                minWidth: '280px',
                position: 'relative'
              }}
            >
              <div style={{
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 30px 40px -20px rgba(0,0,0,0.5)',
                border: `1px solid ${green2}30`,
                background: '#124632'
              }}>
                <Image
                  src={Hero}
                  alt='Professional security guard protecting property'
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - keeping your original but slightly cleaner */}
      <section style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 50px)',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              background: '#eef6f2',
              color: green1,
              padding: '0.25rem 1rem',
              borderRadius: '40px',
              fontWeight: '600',
              fontSize: '0.8rem',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              WHAT WE OFFER
            </span>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              Security Solutions <span style={{ color: green1 }}>For Every Need</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              From commercial sites to personal VIP protection — tailored to your environment
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(20px, 3vw, 30px)'
          }}>
            {[
             { title: 'Static Guards', desc: 'Visible, uniformed officers at your premises. Deterrence & immediate response.', icon: '🛡️', tag: '24/7 presence' },

{ title: 'Armed Response', desc: 'Licensed tactical units for high-risk assets, banks, and valuable shipments.', icon: '⚔️', tag: 'Rapid deployment' },

{ title: 'Investigations', desc: 'Professional investigative services including surveillance, background checks, and fraud investigations.', icon: '🔍', tag: 'Discreet operations' },

{ title: 'VIP Protection', desc: 'Executive protection specialists for celebrities, executives, and diplomats.', icon: '👤', tag: 'Risk assessment' },

{ title: 'Canine Security', desc: 'Highly trained detection dogs for patrol, explosives & narcotics detection.', icon: '🐕', tag: 'Enhanced deterrence' },

{ title: 'CCTV Monitoring', desc: '24/7 remote surveillance monitoring with instant alerts and rapid response coordination.', icon: '📹', tag: 'Remote monitoring' }].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: '#ffffff',
                  padding: 'clamp(30px, 4vw, 40px) clamp(20px, 3vw, 30px)',
                  borderRadius: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: `1px solid #e2e8f0`,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '24px', color: green1, marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>{service.desc}</p>
                <span style={{
                  background: '#eef6f2',
                  color: green1,
                  padding: '4px 12px',
                  borderRadius: '30px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  {service.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Security Section - REDESIGNED WITH 2 IMAGES */}
      <section style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 50px)',
        backgroundColor: '#f8fbf9'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 5vw, 70px)',
          alignItems: 'center'
        }}>
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span style={{
              background: green2,
              color: green1,
              padding: '0.2rem 1rem',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '0.75rem',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              MODERN PROTECTION
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 42px)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              Security That Works<br /><span style={{ color: green1 }}>With You, Not Against You</span>
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#2d3e35',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              GreenPatrol blends old-school vigilance with cutting-edge technology. Our control room monitors
              live feeds, GPS-tracked patrols, and wearables to ensure rapid response times under 5 minutes.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#2d5a46' }}>
              <li style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                <span>✅</span> <span>Custom security plans for each client</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                <span>✅</span> <span>Background-checked, trained & insured officers</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                <span>✅</span> <span>Regular drills & continuous improvement</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Side - 2 Images stacked vertically */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {/* Image 1 */}
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 15px 30px -12px rgba(0,0,0,0.15)',
              border: `1px solid ${green2}60`,
              background: '#ffffff'
            }}>
              <div style={{
                background: '#e9f3ef',
                padding: '1rem',
                textAlign: 'center'
              }}>
                  <img src={'/20260507_101000.webp'} alt="Image 1" className='rounded-2xl' />
              </div>
            </div>

            {/* Image 2 */}
            {/* <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 15px 30px -12px rgba(0,0,0,0.15)',
              border: `1px solid ${green2}60`,
              background: '#ffffff'
            }}>
              <div style={{
                background: '#e9f3ef',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, ${green2}20, ${green1}20)`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: green1,
                  fontSize: '48px'
                }}>
                  <img src={'/20260507_101000.webp'} alt="Image 2" />
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Operational Standards Section - NEW */}
      <section style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 50px)',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              background: '#eef6f2',
              color: green1,
              padding: '0.25rem 1rem',
              borderRadius: '40px',
              fontWeight: '600',
              fontSize: '0.8rem',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              OUR OPERATIONAL EXCELLENCE
            </span>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              How We Deliver <span style={{ color: green1 }}>World-Class Security</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              From hiring to incident response — a systematic approach that guarantees your safety
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: 'clamp(25px, 3vw, 35px)'
          }}>
            {[
              { 
                title: 'Recruitment & Vetting', 
                desc: `All applicants are strictly vetted in coordination with ZR
Police CID. The company prioritises mature, responsible
and trustworthy personnel capable of representing Green
Patrol professionally.`,
                icon: '🔍',
                color: '#e8f0fe'
              },
              { 
                title: 'Training & Supervision', 
                desc: `Continuous training and disciplined supervision support
strong presentation, site control, reporting quality and
alignment with client expectations.`,
                icon: '🎓',
                color: '#e6f4ea'
              },
              { 
                title: 'Communication & Response', 
                desc:  `Green Patrol places high value on communication, timely
operational updates, incident escalation and dependable
client support.`,
                icon: '📡',
                color: '#fef7e0'
              },
              { 
                title: 'Security Risk Support', 
                desc: `Professional security surveys and risk assessments are
available to help clients identify vulnerabilities and
strengthen protection planning.`,
                icon: '🛡️',
                color: '#fce8e6'
              }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '28px',
                  padding: 'clamp(30px, 4vw, 40px)',
                  border: `1px solid #e9ecef`,
                  boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: standard.color,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  marginBottom: '24px'
                }}>
                  {standard.icon}
                </div>
                <h3 style={{
                  fontSize: 'clamp(22px, 3vw, 26px)',
                  fontWeight: '700',
                  color: green1,
                  marginBottom: '15px',
                  lineHeight: '1.3'
                }}>
                  {standard.title}
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.7',
                  fontSize: '0.95rem'
                }}>
                  {standard.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manager's Message - COMMENTED OUT AS REQUESTED */}
      {/* <section style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(15px, 4vw, 20px)',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(30px, 5vw, 50px)',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(135deg, ${green1}, ${green2})`,
              borderRadius: '32px',
              padding: '2rem',
              textAlign: 'center',
              color: 'white',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>
            <div style={{ fontWeight: '700', fontSize: '1.3rem' }}>Issac Zhou</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem' }}>General Manager</div>
            <hr style={{ width: '50px', margin: '1rem auto', borderColor: green2 }} />
            <div style={{ fontSize: '0.9rem' }}>"We don't just watch over your property — we become your trusted partner in safety."</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '700',
              marginBottom: '20px',
              color: green1
            }}>
              A Word From Our General Manager
            </h2>
            <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#2d3e3a' }}>
              At GreenPatrol, we understand that security isn't just about alarms and locks —
              it's about peace of mind. My team and I have one mission: making you feel safe,
              whether at your home, office, or special event.
            </p>
            <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#2d3e3a' }}>
              Every guard is trained with empathy, professionalism, and crisis management.
              We invest in ongoing education because your safety is non-negotiable.
            </p>
            <div style={{ borderLeft: `4px solid ${green1}`, paddingLeft: '1.25rem', marginTop: '1.5rem' }}>
              <strong style={{ color: green1, fontSize: '1.1rem' }}>Issac Zhou</strong><br />
              <span style={{ color: '#6b7280' }}>General Manager, GreenPatrol</span>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 50px)',
        background: `linear-gradient(115deg, #092b1d, #123f2c)`,
        color: 'white',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            marginBottom: 'clamp(20px, 3vw, 30px)'
          }}>
            Get in touch <span style={{ color: green2 }}>with us</span>
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            opacity: 0.9,
            marginBottom: 'clamp(30px, 4vw, 40px)',
            lineHeight: '1.6'
          }}>
            No obligation, just expert advice. We'll analyze your current setup and recommend improvements. 24/7 support guaranteed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: green2,
                  color: green1,
                  border: 'none',
                  padding: 'clamp(15px, 2vw, 18px) clamp(40px, 5vw, 50px)',
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: '700',
                  borderRadius: '60px',
                  cursor: 'pointer'
                }}
              >
                Request Consultation →
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                border: `1.5px solid ${green2}`,
                color: 'white',
                padding: 'clamp(15px, 2vw, 18px) clamp(40px, 5vw, 50px)',
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: '700',
                borderRadius: '60px',
                cursor: 'pointer'
              }}
            >
              Call Now: +263 242 257 156/7
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}