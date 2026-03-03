'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

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

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        background: `radial-gradient(circle at 30% 50%, ${green1}, #0a251a)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated gradient orbs */}
        <div style={{
          position: 'absolute',
          right: '5%',
          top: '10%',
          width: '600px',
          height: '600px',
          zIndex: 2
        }}>
          {/* Large orb */}
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              right: '50px',
              top: '50px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, ${green2}, transparent 70%)`,
              opacity: 0.15,
              filter: 'blur(20px)'
            }}
          />
          {/* Medium orb */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              position: 'absolute',
              right: '200px',
              top: '200px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: `radial-gradient(circle at 70% 70%, ${green2}, transparent 70%)`,
              opacity: 0.12,
              filter: 'blur(15px)'
            }}
          />
          {/* Small orb */}
          <motion.div
            animate={{
              y: [0, 30, 0, -30, 0],
              x: [0, -15, 0, 15, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              right: '350px',
              top: '350px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: green2,
              opacity: 0.1,
              filter: 'blur(10px)'
            }}
          />
          {/* Tiny orb */}
          <motion.div
            animate={{
              y: [0, 35, 0, -35, 0],
              x: [0, 30, 0, -30, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{
              position: 'absolute',
              right: '400px',
              top: '100px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: green2,
              opacity: 0.08,
              filter: 'blur(8px)'
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            left: '10%',
            top: '25%',
            transform: 'translateY(-50%)',
            color: 'white',
            maxWidth: '600px',
            zIndex: 3
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '14px',
              letterSpacing: '4px',
              marginBottom: '15px',
              display: 'block'
            }}
          >
            PROTECTION • SECURITY • TRUST
          </motion.span>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '72px',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '12px',
              textShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            STANDING<br />BEHIND THE<br /><span style={{ color: green2 }}>SHIELD</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: '18px',
              marginBottom: '40px',
              lineHeight: '1.8',
              maxWidth: '500px'
            }}
          >
            Professional security guards, 24/7 monitoring, and instant response.
            Your safety is our mission.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section style={{
        padding: '100px 50px',
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
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              OUR <span style={{ color: green1 }}>SERVICES</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive security solutions tailored to your needs
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {[
              { title: 'Static Guards', desc: 'Professional on-site security personnel for constant vigilance at your location', icon: '🛡️' },
              { title: 'Armed Guards', desc: 'Highly trained armed professionals for high-risk security situations', icon: '⚔️' },
              { title: 'Undercover Guards', desc: 'Discreet plain-clothes security operatives for subtle protection', icon: '🕵️' },
              { title: 'VIP Protection', desc: 'Executive protection services for high-profile individuals and events', icon: '👤' },
              { title: 'Canine Security', desc: 'Trained K-9 units for enhanced detection and patrol capabilities', icon: '🐕' },
              { title: 'Event Coverage', desc: 'Comprehensive security planning and execution for events of any size', icon: '📋' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: '#f8f8f8',
                  padding: '40px 30px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: `1px solid ${green2}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '24px', color: green1, marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Security Section - RESTORED */}
      <section style={{
        padding: '100px 50px',
        backgroundColor: '#f0f7f3'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '30px',
              lineHeight: '1.2'
            }}>
              MODERN SECURITY<br /><span style={{ color: green1 }}>FOR MODERN TIMES</span>
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '25px'
            }}>
              GreenPatrol was founded in 2025 with a fresh approach to security services.
              We combine traditional protection values with cutting-edge technology to
              deliver unparalleled safety solutions.
            </p>

            {/* <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '35px'
            }}>
              In just one year, we've assembled a team of over 50 licensed security
              professionals who share our vision of proactive, client-focused protection.
            </p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}
          >
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} style={{
                height: '200px',
                backgroundColor: green1,
                opacity: 0.1 + (i * 0.05),
                borderRadius: '12px',
                backgroundImage: `radial-gradient(circle at 30% 30%, ${green2}, transparent)`
              }} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manager's Message */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          <div style={{
            height: '300px',
            borderRadius: '20px',
            background: `linear-gradient(135deg, ${green1}, ${green2})`
          }} />

          <div>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '700',
              marginBottom: '20px',
              color: green1
            }}>
              A WORD FROM OUR MANAGER
            </h2>

            <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#444' }}>
              At Green Patrol, we understand the importance of
              safeguarding people, assets, and properties. As Operations
              Manager, I am committed to delivering exceptional security
              solutions that meet the unique needs of our clients.
            </p>

            <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#444' }}>
              With a team of highly trained and dedicated security
              professionals, we pride ourselves on providing responsive,
              reliable, and results-driven services. Our goal is to give you
              peace of mind, knowing that your security is in good hands.
            </p>

            <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#444' }}>
              We value integrity, professionalism, and excellence in
              everything we do. Our commitment to these core values has
              earned us a reputation as a trusted and respected security
              provider.
            </p>

            <strong style={{ color: green1 }}>
              — MUTAKAYA.S<br />
              <span style={{ fontWeight: '400', color: '#666' }}>
                Operations Manager
              </span>
            </strong>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 50px',
        background: `linear-gradient(135deg, ${green1}, #0a251a)`,
        color: 'white',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '30px' }}>
            READY TO BE <span style={{ color: green2 }}>PROTECTED?</span>
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '40px', lineHeight: '1.8' }}>
            Get a free security assessment and consultation today.
            Our team is standing by 24/7.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: green2,
                color: green1,
                border: 'none',
                padding: '18px 50px',
                fontSize: '18px',
                fontWeight: '700',
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