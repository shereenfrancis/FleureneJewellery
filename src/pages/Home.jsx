import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Jewelry for the 
                <span className="highlight"> free-spirited</span>
              </h1>
              <p className="hero-subtitle">
                Crafted to express your quiet magic. Each piece tells a story of dreams, 
                wildflowers, and the beautiful moments that make you uniquely you.
              </p>
              <div className="hero-actions">
                <Link to="/shop" className="btn btn-primary">
                  Explore Your Story in Beads
                </Link>
                <Link to="/quiz" className="btn btn-secondary">
                  Find Your Vibe
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src="/api/placeholder/600/700" 
                  alt="Delicate bracelet sparkling in dappled sunlight"
                  className="hero-img"
                />
                <div className="image-overlay">
                  <div className="sparkle sparkle-1">✨</div>
                  <div className="sparkle sparkle-2">✨</div>
                  <div className="sparkle sparkle-3">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>Discover Your Magic</h2>
            <p>Each collection captures a different facet of your beautiful spirit</p>
          </div>
          
          <div className="collections-grid">
            <div className="collection-card">
              <div className="card-image">
                <img src="/api/placeholder/400/500" alt="Wildflower Dreams Collection" />
                <div className="card-overlay">
                  <h3>Wildflower Dreams</h3>
                  <p>For the free spirit who dances with nature</p>
                  <Link to="/shop?collection=wildflower" className="btn btn-primary">
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="collection-card">
              <div className="card-image">
                <img src="/api/placeholder/400/500" alt="Moonlit Whispers Collection" />
                <div className="card-overlay">
                  <h3>Moonlit Whispers</h3>
                  <p>Delicate pieces for quiet moments of reflection</p>
                  <Link to="/shop?collection=moonlit" className="btn btn-primary">
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="collection-card">
              <div className="card-image">
                <img src="/api/placeholder/400/500" alt="Golden Hour Collection" />
                <div className="card-overlay">
                  <h3>Golden Hour</h3>
                  <p>Warm, radiant pieces that capture life's magic</p>
                  <Link to="/shop?collection=golden" className="btn btn-primary">
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Fleurene Experience */}
      <section className="experience fade-in-section" ref={featuresRef}>
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <h2>More Than Jewelry</h2>
              <p>
                Every Fleurene piece is crafted with intention, designed to be a companion 
                on your journey of self-expression. From our dreamy packaging to the story 
                behind each bead, we create experiences that touch your heart.
              </p>
              
              <div className="experience-features">
                <div className="feature">
                  <div className="feature-icon">🌸</div>
                  <div className="feature-content">
                    <h4>Intentionally Crafted</h4>
                    <p>Each piece is made with love and attention to detail</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">💌</div>
                  <div className="feature-content">
                    <h4>Magical Packaging</h4>
                    <p>Wax seals, handwritten notes, and dreamy unboxing</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">✨</div>
                  <div className="feature-content">
                    <h4>Your Story</h4>
                    <p>Jewelry that reflects your unique journey and dreams</p>
                  </div>
                </div>
              </div>
              
              <Link to="/story" className="btn btn-secondary">
                Discover Our Story
              </Link>
            </div>
            
            <div className="experience-visual">
              <div className="visual-grid">
                <img src="/api/placeholder/300/200" alt="Jewelry making process" className="grid-img img-1" />
                <img src="/api/placeholder/300/200" alt="Beautiful packaging" className="grid-img img-2" />
                <img src="/api/placeholder/300/200" alt="Bracelet details" className="grid-img img-3" />
                <img src="/api/placeholder/300/200" alt="Design sketches" className="grid-img img-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Love */}
      <section className="testimonials fade-in-section">
        <div className="container">
          <h2>Stories from Our Community</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"My Fleurene bracelet feels like a little piece of magic I carry with me every day. It's not just jewelry—it's a reminder of my dreams."</p>
                <div className="testimonial-author">
                  <img src="/api/placeholder/60/60" alt="Sarah M." />
                  <div>
                    <h5>Sarah M.</h5>
                    <span>The Dreamer</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"The packaging alone made me cry happy tears. You can feel the love and intention in every detail. This is what shopping should feel like."</p>
                <div className="testimonial-author">
                  <img src="/api/placeholder/60/60" alt="Emma L." />
                  <div>
                    <h5>Emma L.</h5>
                    <span>The Romantic</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"I've never felt so understood by a brand. My custom piece perfectly captures who I am—wild, free, and beautifully imperfect."</p>
                <div className="testimonial-author">
                  <img src="/api/placeholder/60/60" alt="Luna K." />
                  <div>
                    <h5>Luna K.</h5>
                    <span>The Wildflower</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter fade-in-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join Our Magical Circle</h2>
            <p>Be the first to discover new collections, get styling tips, and receive your personal jewelry personality reading</p>
            
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email for a touch of magic"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Get My Reading ✨
              </button>
            </form>
            
            <p className="newsletter-note">
              Plus, enjoy 15% off your first order and exclusive access to limited collections
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 