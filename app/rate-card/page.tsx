'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RateCardPage() {
    const green1 = '#0f4d36'
    const green2 = '#c8e6d4'

    const services = [
        {
            name: 'Static Guards',
            '12hrRate': '$340.00',
            '24hrRate': '$680.00',
            'vat12': '$51.00',
            'vat24': '$102.00',
            'total12': '$391.00',
            'total24': '$782.00',
        },
        {
            name: 'Armed Guards',
            '12hrRate': '$370.00',
            '24hrRate': '$730.00',
            'vat12': '$55.50',
            'vat24': '$109.00',
            'total12': '$425.50',
            'total24': '$839.50',
        },
        {
            name: 'Canine Security Services',
            '12hrRate': '$400.00',
            '24hrRate': '$800.00',
            'vat12': '$60.00',
            'vat24': '$120.00',
            'total12': '$460.00',
            'total24': '$920.00',
        },
        {
            name: 'Mobile Security Services',
            '12hrRate': '$1050.00',
            '24hrRate': '$1900.00',
            'vat12': '$157.50',
            'vat24': '$285.00',
            'total12': '$1207.00',
            'total24': '$2185.00',
        },
        {
            name: 'Loss Prevention Officers & Undercover Surveillance',
            '12hrRate': '$600.00',
            '24hrRate': '-',
            'vat12': '$90.00',
            'vat24': '-',
            'total12': '$690.00',
            'total24': '-',
        },
        {
            name: 'VIP Protection',
            isVIP: true,
            bulletPoints: [
                'Less than a week: $115.00 per day',
                '1 week +: $100.00 per day',
                'Monthly: $1950.00'
            ]
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
                        RATE <span style={{ color: green2 }}>CARD</span>
                    </h1>
                    <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        Fixed rates with 15% VAT
                    </p>
                </motion.div>
            </section>

            {/* Rate Table */}
            <section style={{ padding: '80px 50px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ overflowX: 'auto' }}
                    >
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <thead>
                                <tr style={{ backgroundColor: green1, color: 'white' }}>
                                    <th rowSpan={2} style={{ padding: '20px', textAlign: 'left', borderRight: `2px solid ${green2}` }}>
                                        SERVICE
                                    </th>
                                    <th colSpan={3} style={{ padding: '20px', textAlign: 'center', borderRight: `2px solid ${green2}` }}>
                                        12-HOUR SHIFT
                                    </th>
                                    <th colSpan={3} style={{ padding: '20px', textAlign: 'center' }}>
                                        24-HOUR SHIFT
                                    </th>
                                </tr>
                                <tr style={{ backgroundColor: green1, color: 'white' }}>
                                    <th style={{ padding: '15px', textAlign: 'center', borderRight: `1px solid ${green2}` }}>
                                        Base Rate
                                    </th>
                                    <th style={{ padding: '15px', textAlign: 'center', borderRight: `1px solid ${green2}` }}>
                                        VAT (15%)
                                    </th>
                                    <th style={{ padding: '15px', textAlign: 'center', borderRight: `2px solid ${green2}` }}>
                                        GRAND TOTAL
                                    </th>
                                    <th style={{ padding: '15px', textAlign: 'center', borderRight: `1px solid ${green2}` }}>
                                        Base Rate
                                    </th>
                                    <th style={{ padding: '15px', textAlign: 'center', borderRight: `1px solid ${green2}` }}>
                                        VAT (15%)
                                    </th>
                                    <th style={{ padding: '15px', textAlign: 'center' }}>
                                        GRAND TOTAL
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, index) => {
                                    if (service.isVIP) {
                                        return (
                                            <>
                                                <tr key={`vip-${index}`} style={{
                                                    backgroundColor: '#f0f7f3',
                                                    borderBottom: '1px solid #e0e0e0'
                                                }}>
                                                    <td style={{
                                                        padding: '18px 20px',
                                                        fontWeight: '700',
                                                        color: green1,
                                                        borderRight: `2px solid #e0e0e0`
                                                    }}>
                                                        {service.name}
                                                    </td>
                                                    <td colSpan={6} style={{
                                                        padding: '18px 20px'
                                                    }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '8px'
                                                        }}>
                                                            {service.bulletPoints?.map((point, idx) => (
                                                                <div key={idx} style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '10px'
                                                                }}>
                                                                    <span style={{
                                                                        color: green1,
                                                                        fontSize: '18px'
                                                                    }}>•</span>
                                                                    <span style={{
                                                                        color: '#444',
                                                                        fontSize: '15px'
                                                                    }}>{point}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* <tr style={{
                                                    backgroundColor: '#f0f7f3',
                                                    borderBottom: '1px solid #e0e0e0'
                                                }}>
                                                    <td colSpan={7} style={{
                                                        padding: '0 20px 15px 20px',
                                                        color: '#666',
                                                        fontSize: '13px',
                                                        fontStyle: 'italic'
                                                    }}>
                                                        * VIP Protection rates vary based on contract length. 15% VAT applicable.
                                                    </td>
                                                </tr> */}
                                            </>
                                        )
                                    }

                                    return (
                                        <tr
                                            key={index}
                                            style={{
                                                borderBottom: '1px solid #e0e0e0',
                                                backgroundColor: index % 2 === 0 ? '#fff' : '#f8f8f8'
                                            }}
                                        >
                                            <td style={{
                                                padding: '18px 20px',
                                                fontWeight: '500',
                                                color: '#333',
                                                borderRight: `2px solid #e0e0e0`
                                            }}>
                                                {service.name}
                                            </td>

                                            {/* 12-Hour Columns */}
                                            <td style={{
                                                padding: '18px 15px',
                                                color: green1,
                                                fontWeight: '500',
                                                textAlign: 'center',
                                                borderRight: `1px solid #e0e0e0`
                                            }}>
                                                {service['12hrRate']}
                                            </td>
                                            <td style={{
                                                padding: '18px 15px',
                                                color: '#d32f2f',
                                                fontWeight: '500',
                                                textAlign: 'center',
                                                borderRight: `1px solid #e0e0e0`
                                            }}>
                                                {service.vat12}
                                            </td>
                                            <td style={{
                                                padding: '18px 15px',
                                                color: green1,
                                                fontWeight: '700',
                                                textAlign: 'center',
                                                borderRight: `2px solid #e0e0e0`,
                                                backgroundColor: 'rgba(15, 77, 54, 0.05)'
                                            }}>
                                                {service.total12}
                                            </td>

                                            {/* 24-Hour Columns */}
                                            <td style={{
                                                padding: '18px 15px',
                                                color: service['24hrRate'] === '-' ? '#999' : green1,
                                                fontWeight: service['24hrRate'] === '-' ? '400' : '500',
                                                textAlign: 'center',
                                                borderRight: `1px solid #e0e0e0`,
                                                fontStyle: service['24hrRate'] === '-' ? 'italic' : 'normal'
                                            }}>
                                                {service['24hrRate']}
                                            </td>
                                            <td style={{
                                                padding: '18px 15px',
                                                color: service.vat24 === '-' ? '#999' : '#d32f2f',
                                                fontWeight: service.vat24 === '-' ? '400' : '500',
                                                textAlign: 'center',
                                                borderRight: `1px solid #e0e0e0`,
                                                fontStyle: service.vat24 === '-' ? 'italic' : 'normal'
                                            }}>
                                                {service.vat24}
                                            </td>
                                            <td style={{
                                                padding: '18px 15px',
                                                color: service.total24 === '-' ? '#999' : green1,
                                                fontWeight: service.total24 === '-' ? '400' : '700',
                                                textAlign: 'center',
                                                backgroundColor: service.total24 === '-' ? 'transparent' : 'rgba(15, 77, 54, 0.05)',
                                                fontStyle: service.total24 === '-' ? 'italic' : 'normal'
                                            }}>
                                                {service.total24}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <p style={{
                            textAlign: 'center',
                            marginTop: '30px',
                            color: '#666',
                            fontSize: '14px'
                        }}>
                            All rates in US Dollars (USD) • 15% VAT included in grand total
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}