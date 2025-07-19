import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Lock, Eye, Users, CheckCircle, Menu, X, ArrowRight, Star, Globe, Zap } from 'lucide-react'
import './App.css'

// Import images
import abstractBg1 from './assets/abstract-bg-1.jpg'
import abstractBg2 from './assets/abstract-bg-2.jpg'
import abstractBg3 from './assets/abstract-bg-3.jpg'
import networkBg from './assets/network-bg.jpg'
import techBg1 from './assets/tech-bg-1.jpg'
import techBg2 from './assets/tech-bg-2.jpg'
import techBg3 from './assets/tech-bg-3.jpg'
import businessBg from './assets/business-bg.jpg'
import zenaegisLogo from './assets/logo.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Threat Detection & Response",
      subtitle: "Advanced AI-powered threat detection to protect your digital assets 24/7"
    },
    {
      title: "Cybersecurity Excellence",
      subtitle: "Comprehensive security solutions tailored for your business needs"
    },
    {
      title: "24/7 Security Monitoring",
      subtitle: "Round-the-clock protection with real-time threat analysis and response"
    },
    {
      title: "Advanced Protection Suite",
      subtitle: "Next-generation security technologies to safeguard your digital infrastructure"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [heroSlides.length])

  const services = [
    {
      icon: Shield,
      title: "Threat Detection",
      description: "Advanced monitoring and detection of cyber threats using AI and machine learning technologies.",
      image: techBg1
    },
    {
      icon: Lock,
      title: "Vulnerability Assessments and Penetration Testing",
      description: "Identifies Security Weaknesses and Simulates Real-world Attacks to Ensure Your Network is Protected Against Potential Threats",
      image: techBg2
    },
    {
      icon: Eye,
      title: "Security Consulting",
      description: "Expert Consultation to Assess and Improve Your Organization's Security Posture.",
      image: techBg3
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Comprehensive training programs to educate your team on cybersecurity best practices.",
      image: abstractBg1
    },
    {
      icon: Globe,
      title: "Mobile Application Security Audit",
      description: "Comprehensive Assessment to Identify and Mitigate Security Vulnerabilities in Mobile Apps Across Platforms and Environments",
      image: abstractBg2
    },
    {
      icon: Zap,
      title: "Penetration Testing",
      description: "Proactive security testing to identify vulnerabilities before attackers do.",
      image: abstractBg3
    }
  ]

  const stats = [
    { number: "65+", label: "Web & Mobile Apps Tested" },
    { number: "100+", label: "VAPT Completed" },
    { number: "99.9%", label: "Uptime Guaranteed" },
    { number: "25+", label: "Happy Clients" }
  ]

  const testimonials = [
    {
      name: "x",
      company: "x.org",
      text: "ZenAegis transformed our security posture. Their proactive approach gave us the peace of mind we needed.",
      rating: 5
    },
    {
      name: "y",
      company: "y.org",
      text: "Outstanding incident response time. When we needed them most, ZenAegis was there within minutes.",
      rating: 5
    },
    {
      name: "z",
      company: "z.org",
      text: "The security consulting services helped us identify critical vulnerabilities we never knew existed.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/50 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-white">Zen</span>
                <span className="text-red-500">Aegis</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#contact" className="text-foreground hover:text-primary transition-colors"><Button variant="outline">Contact Us</Button></a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
                <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="w-full">Get Quote</Button>
                  <Button className="w-full">Contact Us</Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <iframe 
          src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" 
          frameBorder="0" 
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ease-in-out">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 transition-all duration-1000 ease-in-out">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 button">
              Discover More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Shape the Perfect <br />
              Security Solutions <span className="text-primary">.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are committed to providing comprehensive cybersecurity services to our clients with the full potential of our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden glassmorphism-card">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${networkBg})` }}
              >
                <div className="h-full bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Shield className="h-24 w-24 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Trusted Security</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Badge className="mb-4">About ZenAegis</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We are the best agency for cybersecurity <span className="text-primary">.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We will continue to provide the best possible service with years of experience, providing exceptional cybersecurity solutions to our customers.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Advanced Threat Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>24/7 Security Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Rapid Incident Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Expert Security Consulting</span>
                </div>
              </div>
              <Button size="lg">
                Discover More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-black-red text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say <span className="text-primary">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center glassmorphism-card">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-muted-foreground">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-black-red text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Get Your Security <br />
            Started!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a comprehensive security assessment and customized protection plan.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Contact with Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-foreground">ZenAegis</span>
              </div>
              <p className="text-muted-foreground mb-4">
                We are ZenAegis. We provide comprehensive cybersecurity solutions including threat detection, incident response, security consulting, and more.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Twitter</Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Threat Detection</div>
                <div>Incident Response</div>
                <div>Security Consulting</div>
                <div>Security Training</div>
                <div>Compliance Management</div>
                <div>Penetration Testing</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>About Us</div>
                <div>Our Team</div>
                <div>Careers</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>📧 info@zenaegis.com</div>
                <div>📞 +1 (555) 123-4567</div>
                <div>📍 123 Security St, Cyber City, CC 12345</div>
                <div>🕒 24/7 Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ZenAegis. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


