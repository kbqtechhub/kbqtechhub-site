import React from 'react'
import { FaSearch, FaHashtag, FaAdversal, FaFileAlt } from 'react-icons/fa'

export default function DigitalMarketingPage() {
    return (
        <div className="digital-marketing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="headline">Dominate the Digital Landscape with Our Expert Marketing Strategies</h1>
                    <p className="subheading">We craft bespoke digital marketing solutions to elevate your brand, drive targeted traffic, and maximize conversions.</p>
                    <button className="cta-button primary-button">Request a Free Audit</button>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="services-section">
                <div className="section-header">
                    <h2>Our Core Services</h2>
                    <p className="section-description">From SEO to social media, discover how our integrated services can transform your online presence.</p>
                </div>
                <div className="services-grid">
                    <div className="service-item">
                        <div className="service-icon"><FaSearch size={32} /></div>
                        <h3>Search Engine Optimization (SEO)</h3>
                        <p>Improve your visibility on search engines and attract organic traffic with our proven SEO techniques.</p>
                        <a href="#" className="service-link">Learn more →</a>
                    </div>
                    <div className="service-item">
                        <div className="service-icon"><FaHashtag size={32} /></div>
                        <h3>Social Media Marketing</h3>
                        <p>Engage your audience and build a loyal community through strategic social media campaigns.</p>
                        <a href="#" className="service-link">Learn more →</a>
                    </div>
                    <div className="service-item">
                        <div className="service-icon"><FaAdversal size={32} /></div>
                        <h3>Pay-Per-Click (PPC) Advertising</h3>
                        <p>Drive immediate results with targeted PPC campaigns designed to maximize your ROI.</p>
                        <a href="#" className="service-link">Learn more →</a>
                    </div>
                    <div className="service-item">
                        <div className="service-icon"><FaFileAlt size={32} /></div>
                        <h3>Content Marketing</h3>
                        <p>Attract and retain customers with valuable and engaging content that establishes your brand as an industry leader.</p>
                        <a href="#" className="service-link">Learn more →</a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us-section">
                <div className="section-header">
                    <h2>Why Partner with Us?</h2>
                    <p className="section-description">Experience the difference of working with a results-driven digital marketing agency.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-number">01</div>
                        <h3>Data-Driven Strategy</h3>
                        <p>We analyze trends and metrics to develop strategies that deliver measurable results.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-number">02</div>
                        <h3>Industry Expertise</h3>
                        <p>Our team of experts stays on top of industry changes to keep your business ahead.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-number">03</div>
                        <h3>Custom Approach</h3>
                        <p>We tailor our services to meet the unique needs and goals of your business.</p>
                    </div>
                </div>

                <div className="case-studies">
                    <div className="case-study-item">
                        <span className="case-study-tag">Success Story</span>
                        <h3>Increased Conversion Rates by 40%</h3>
                        <p>Learn how we helped a client achieve a 40% increase in conversion rates through targeted marketing strategies.</p>
                        <button className="outlined-button">View Case Study</button>
                    </div>
                </div>
            </section>

            {/* Client Testimonials Section */}
            <section className="testimonials-section">
                <div className="section-header">
                    <h2>What Our Clients Say</h2>
                    <p className="section-description">Read testimonials from our satisfied clients and discover the impact of our digital marketing services.</p>
                </div>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-text">Their expertise in SEO dramatically improved our website ranking within just three months of working together.</p>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-details">
                                <p className="author-name">John Doe</p>
                                <p className="author-title">CEO, Tech Solutions Inc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="quote-mark">"</div>
                        <p className="testimonial-text">The social media campaign they created for our brand increased our engagement by 75% and led to a significant boost in sales.</p>
                        <div className="testimonial-author">
                            <div className="author-avatar"></div>
                            <div className="author-details">
                                <p className="author-name">Jane Smith</p>
                                <p className="author-title">Marketing Director, Retail Brand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans Section */}
            <section className="pricing-section">
                <div className="section-header">
                    <h2>Flexible Pricing Options</h2>
                    <p className="section-description">Choose a pricing plan that aligns with your business needs and budget.</p>
                </div>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3>Starter</h3>
                            <p className="pricing-price">$499<span>/mo</span></p>
                        </div>
                        <ul className="pricing-features">
                            <li>Basic SEO Optimization</li>
                            <li>2 Social Media Platforms</li>
                            <li>Monthly Performance Report</li>
                            <li>Email Support</li>
                        </ul>
                        <button className="pricing-button">Get Started</button>
                    </div>
                    <div className="pricing-card featured">
                        <div className="popular-tag">Most Popular</div>
                        <div className="pricing-header">
                            <h3>Professional</h3>
                            <p className="pricing-price">$999<span>/mo</span></p>
                        </div>
                        <ul className="pricing-features">
                            <li>Advanced SEO Strategy</li>
                            <li>4 Social Media Platforms</li>
                            <li>Content Creation</li>
                            <li>PPC Campaign Management</li>
                            <li>Bi-weekly Performance Reports</li>
                            <li>Priority Support</li>
                        </ul>
                        <button className="pricing-button featured">Get Started</button>
                    </div>
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3>Enterprise</h3>
                            <p className="pricing-price">Custom</p>
                        </div>
                        <ul className="pricing-features">
                            <li>Full Digital Marketing Suite</li>
                            <li>Custom Strategy Development</li>
                            <li>Dedicated Account Manager</li>
                            <li>Unlimited Revisions</li>
                            <li>24/7 Priority Support</li>
                        </ul>
                        <button className="pricing-button">Contact Us</button>
                    </div>
                </div>
            </section>

            {/* Contact & CTA Section */}
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Ready to Transform Your Online Presence?</h2>
                        <p className="section-description">Contact us today for a free consultation and discover how we can help your business thrive in the digital world.</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-label">Email:</span>
                                <a href="mailto:info@kbqtechhub.com">info@kbqtechhub.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Phone:</span>
                                <a href="tel:+15555555555">(555) 555-5555</a>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows={4} required></textarea>
                        </div>
                        <button type="submit" className="cta-button primary-button">Request a Free Consultation</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
