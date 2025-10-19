import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Lock, Eye, Users, CheckCircle, Menu, X, ArrowRight, Star, Globe, Zap, Terminal, Code, Activity } from 'lucide-react'
import ChatBot from '@/components/ChatBot.jsx'
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
  const [matrixChars, setMatrixChars] = useState([])
  const canvasRef = useRef(null)

  const heroSlides = [
    {
      title: ">> THREAT DETECTION ACTIVE <<",
      subtitle: "AI-POWERED NEURAL NETWORKS MONITORING YOUR DIGITAL PERIMETER 24/7",
      glitch: true
    },
    {
      title: ">> CYBERSECURITY PROTOCOL <<",
      subtitle: "QUANTUM-ENCRYPTED SECURITY MATRIX DEPLOYED FOR MAXIMUM PROTECTION",
      glitch: false
    },
    {
      title: ">> REAL-TIME MONITORING <<",
      subtitle: "ADVANCED SENTINEL SYSTEMS ANALYZING 10M+ THREAT VECTORS PER SECOND",
      glitch: true
    },
    {
      title: ">> PROTECTION SUITE ONLINE <<",
      subtitle: "NEXT-GEN FIREWALL & INTRUSION DETECTION SYSTEMS FULLY OPERATIONAL",
      glitch: false
    }
  ]

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const charArray = chars.split('')
    
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#00ff88'
      ctx.font = `${fontSize}px monospace`
      
      drops.forEach((y, index) => {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const x = index * fontSize
        ctx.fillStyle = Math.random() > 0.98 ? '#ffffff' : '#00ff88'
        ctx.fillText(text, x, y * fontSize)
        
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0
        }
        drops[index]++
      })
    }

    const matrixInterval = setInterval(draw, 50)
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(matrixInterval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

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
    <div className="min-h-screen bg-background relative">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="matrix-rain" />
      
      {/* Cyber Grid Overlay */}
      <div className="cyber-grid fixed inset-0 z-0 pointer-events-none opacity-20"></div>
      
      {/* Header */}
      <header className="fixed top-0 w-full glassmorphism-card border-b border-border z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Terminal className="h-8 w-8 text-cyber-green pulse-glow" />
                <div className="absolute -inset-1 bg-cyber-green/20 rounded-full blur-sm"></div>
              </div>
              <span className="text-2xl font-bold">
                <span className="neon-text">Zen</span>
                <span className="neon-text-red">Aegis</span>
              </span>
              <div className="flex items-center space-x-1 text-xs text-cyber-green">
                <Activity className="h-3 w-3 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-cyber-green hover:neon-text transition-all duration-300 relative group">
                <span className="relative z-10">[ HOME ]</span>
                <div className="absolute inset-0 bg-cyber-green/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
              </a>
              <a href="#about" className="text-cyber-blue hover:neon-text-blue transition-all duration-300 relative group">
                <span className="relative z-10">[ ABOUT ]</span>
                <div className="absolute inset-0 bg-cyber-blue/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
              </a>
              <a href="#services" className="text-cyber-green hover:neon-text transition-all duration-300 relative group">
                <span className="relative z-10">[ SERVICES ]</span>
                <div className="absolute inset-0 bg-cyber-green/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
              </a>
              <a href="#testimonials" className="text-cyber-blue hover:neon-text-blue transition-all duration-300 relative group">
                <span className="relative z-10">[ REVIEWS ]</span>
                <div className="absolute inset-0 bg-cyber-blue/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
              </a>
              <a href="#contact" className="text-cyber-red hover:neon-text-red transition-all duration-300 relative group">
                <span className="relative z-10">[ CONTACT ]</span>
                <div className="absolute inset-0 bg-cyber-red/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button className="cyber-button px-6 py-2">
                <Code className="h-4 w-4 mr-2" />
                CONNECT
              </Button>
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
            <nav className="md:hidden mt-4 pb-4 border-t border-cyber-green/30 pt-4 glassmorphism-card">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-cyber-green hover:neon-text transition-colors font-mono p-2 rounded border border-transparent hover:border-cyber-green/30">
                  [ HOME ]
                </a>
                <a href="#about" className="text-cyber-blue hover:neon-text-blue transition-colors font-mono p-2 rounded border border-transparent hover:border-cyber-blue/30">
                  [ ABOUT ]
                </a>
                <a href="#services" className="text-cyber-green hover:neon-text transition-colors font-mono p-2 rounded border border-transparent hover:border-cyber-green/30">
                  [ SERVICES ]
                </a>
                <a href="#testimonials" className="text-cyber-blue hover:neon-text-blue transition-colors font-mono p-2 rounded border border-transparent hover:border-cyber-blue/30">
                  [ REVIEWS ]
                </a>
                <a href="#contact" className="text-cyber-red hover:neon-text-red transition-colors font-mono p-2 rounded border border-transparent hover:border-cyber-red/30">
                  [ CONTACT ]
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button className="w-full cyber-button">
                    <Terminal className="mr-2 h-4 w-4" />
                    ESTABLISH LINK
                  </Button>
                  <Button className="w-full button">
                    <Shield className="mr-2 h-4 w-4" />
                    SECURE CONNECT
                  </Button>
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
          className="absolute inset-0 w-full h-full opacity-70"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background"></div>
        
        {/* Animated lines and particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-32 h-px bg-gradient-to-r from-transparent via-cyber-red to-transparent animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-cyber-green/10 border border-cyber-green/30 rounded-full px-4 py-2 mb-6">
              <Activity className="h-4 w-4 text-cyber-green animate-pulse" />
              <span className="text-cyber-green text-sm font-mono">SYSTEM STATUS: OPERATIONAL</span>
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ease-in-out font-mono ${
            heroSlides[currentSlide].glitch ? 'glitch neon-text' : 'neon-text-blue'
          }`}>
            {heroSlides[currentSlide].title}
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-cyber-green/80 transition-all duration-1000 ease-in-out font-mono">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="button text-lg px-8 py-6 relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                ENGAGE PROTOCOL
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
            <Button size="lg" className="cyber-button text-lg px-8 py-6">
              <Terminal className="mr-2 h-5 w-5" />
              ACCESS SYSTEMS
            </Button>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'border-cyber-green bg-cyber-green shadow-lg shadow-cyber-green/50' 
                    : 'border-cyber-green/30 bg-transparent hover:border-cyber-green/60'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-cyber relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full px-4 py-2 mb-6">
              <Code className="h-4 w-4 text-cyber-blue" />
              <span className="text-cyber-blue text-sm font-mono">[ SECURITY PROTOCOLS ]</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="neon-text">ADVANCED CYBER</span><br />
              <span className="neon-text-blue">DEFENSE MATRIX</span>
              <span className="neon-text-red">.</span>
            </h2>
            <p className="text-xl text-cyber-green/70 max-w-3xl mx-auto font-mono">
              {`>> DEPLOYING MILITARY-GRADE SECURITY PROTOCOLS WITH QUANTUM-LEVEL ENCRYPTION AND AI-POWERED THREAT ANALYSIS <<`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-500 overflow-hidden glassmorphism-card relative">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-red opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg blur-sm"></div>
                
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-cyber-green/20 to-cyber-blue/40 group-hover:from-cyber-red/30 group-hover:to-cyber-green/50 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <service.icon className="h-16 w-16 text-white drop-shadow-lg group-hover:text-cyber-green transition-colors duration-300" />
                      <div className="absolute -inset-2 bg-cyber-green/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </div>
                
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-mono text-cyber-green group-hover:neon-text transition-all duration-300">
                    {`>> ${service.title.toUpperCase()}`}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base text-cyber-blue/80 font-mono">
                    {service.description}
                  </CardDescription>
                  
                  {/* Status indicator */}
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyber-green font-mono">STATUS: ACTIVE</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-cyber-red relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-lg shadow-2xl glassmorphism-card overflow-hidden"
                style={{ backgroundImage: `url(${networkBg})` }}
              >
                <div className="h-full bg-gradient-to-b from-cyber-green/20 to-cyber-blue/30 rounded-lg flex items-center justify-center relative">
                  {/* Scanning lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-cyber-blue animate-pulse delay-500"></div>
                  
                  <div className="text-center text-white relative z-10">
                    <div className="relative inline-block">
                      <Shield className="h-24 w-24 mx-auto mb-4 text-cyber-green drop-shadow-lg" />
                      <div className="absolute -inset-4 bg-cyber-green/20 rounded-full blur-lg animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl font-bold font-mono neon-text">SECURE PERIMETER</h3>
                    <p className="text-cyber-blue font-mono text-sm mt-2">[ ENCRYPTION LEVEL: QUANTUM ]</p>
                  </div>
                  
                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-green"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyber-green"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyber-green"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-green"></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyber-red/10 border border-cyber-red/30 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-cyber-red" />
                <span className="text-cyber-red text-sm font-mono">[ ABOUT ZENAEGIS ]</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                <span className="neon-text-red">ELITE CYBER</span><br />
                <span className="neon-text">SECURITY AGENCY</span>
                <span className="neon-text-blue">.</span>
              </h2>
              
              <p className="text-lg text-cyber-green/80 mb-6 font-mono">
                {`>> MILITARY-GRADE CYBERSECURITY PROTOCOLS WITH YEARS OF COMBAT-TESTED EXPERIENCE IN DIGITAL WARFARE AND THREAT NEUTRALIZATION <<`}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <CheckCircle className="h-5 w-5 text-cyber-green" />
                    <div className="absolute -inset-1 bg-cyber-green/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-cyber-blue font-mono">[✓] AI-POWERED THREAT DETECTION</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <CheckCircle className="h-5 w-5 text-cyber-green" />
                    <div className="absolute -inset-1 bg-cyber-green/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-cyber-blue font-mono">[✓] 24/7 SENTINEL MONITORING</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <CheckCircle className="h-5 w-5 text-cyber-green" />
                    <div className="absolute -inset-1 bg-cyber-green/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-cyber-blue font-mono">[✓] QUANTUM INCIDENT RESPONSE</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <CheckCircle className="h-5 w-5 text-cyber-green" />
                    <div className="absolute -inset-1 bg-cyber-green/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-cyber-blue font-mono">[✓] EXPERT SECURITY PROTOCOLS</span>
                </div>
              </div>
              
              <Button size="lg" className="cyber-button">
                <Eye className="mr-2 h-5 w-5" />
                ANALYZE SYSTEMS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-black-red text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-red to-transparent opacity-50"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-mono neon-text-red mb-2">[ SYSTEM STATISTICS ]</h3>
            <p className="text-cyber-green/70 font-mono">REAL-TIME OPERATIONAL DATA</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="glassmorphism-card p-6 h-full">
                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyber-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyber-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyber-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="text-4xl md:text-5xl font-bold mb-2 font-mono neon-text group-hover:glitch">
                    {stat.number}
                  </div>
                  <div className="text-sm text-cyber-blue font-mono opacity-90">
                    {stat.label.toUpperCase()}
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-cyber relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyber-green/10 border border-cyber-green/30 rounded-full px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-cyber-green" />
              <span className="text-cyber-green text-sm font-mono">[ CLIENT TESTIMONIALS ]</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="neon-text-blue">SECURITY VERIFIED</span><br />
              <span className="neon-text">CLIENT REPORTS</span>
              <span className="neon-text-red">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center glassmorphism-card relative group">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
                
                <CardHeader className="relative">
                  {/* Security rating display */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-cyber-green/10 border border-cyber-green/30 rounded-full px-3 py-1">
                      <span className="text-cyber-green font-mono text-sm">
                        SECURITY RATING: {testimonial.rating}/5
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-cyber-green fill-current" />
                    ))}
                  </div>
                  
                  <CardDescription className="text-base font-mono text-cyber-blue/80">
                    <span className="text-cyber-green">"</span>
                    {testimonial.text}
                    <span className="text-cyber-green">"</span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardTitle className="text-lg font-mono text-cyber-green">
                    {`>> ${testimonial.name.toUpperCase()}`}
                  </CardTitle>
                  <p className="text-cyber-blue/70 font-mono text-sm">
                    [ {testimonial.company.toUpperCase()} ]
                  </p>
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyber-green font-mono">VERIFIED</span>
                  </div>
                </CardContent>
                
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-black-red text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-cyber-green/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-cyber-blue/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 right-1/6 w-16 h-16 border border-cyber-red/20 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="glassmorphism-card p-12 max-w-4xl mx-auto">
            {/* Alert indicator */}
            <div className="inline-flex items-center space-x-2 bg-cyber-red/20 border border-cyber-red/40 rounded-full px-4 py-2 mb-8">
              <Activity className="h-4 w-4 text-cyber-red animate-pulse" />
              <span className="text-cyber-red text-sm font-mono">[ INITIATE SECURE CONNECTION ]</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="neon-text-red">ACTIVATE DEFENSE</span> <br />
              <span className="neon-text">PROTOCOL NOW</span>
              <span className="neon-text-blue">!</span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90 font-mono text-cyber-green/80">
              {`>> INITIATE COMPREHENSIVE SECURITY SCAN AND DEPLOY CUSTOM PROTECTION MATRIX FOR YOUR DIGITAL INFRASTRUCTURE <<`}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="button text-lg px-8 py-6">
                <Terminal className="mr-2 h-5 w-5" />
                ESTABLISH SECURE LINK
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="cyber-button text-lg px-8 py-6">
                <Shield className="mr-2 h-5 w-5" />
                EMERGENCY RESPONSE
              </Button>
            </div>
            
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-green/50"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyber-green/50"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyber-green/50"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-green/50"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-cyber relative py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Animated background lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glassmorphism-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Terminal className="h-6 w-6 text-cyber-green" />
                  <div className="absolute -inset-1 bg-cyber-green/20 rounded-full blur-sm animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold font-mono">
                  <span className="neon-text">Zen</span>
                  <span className="neon-text-red">Aegis</span>
                </span>
              </div>
              <p className="text-cyber-blue/80 mb-4 font-mono text-sm">
                {`>> ELITE CYBERSECURITY FORCE PROVIDING QUANTUM-ENCRYPTED PROTECTION WITH AI-POWERED THREAT NEUTRALIZATION SYSTEMS <<`}
              </p>
              <div className="flex space-x-2">
                <Button className="cyber-button text-xs px-3 py-1">
                  <Globe className="h-3 w-3 mr-1" />
                  FACEBOOK
                </Button>
                <Button className="cyber-button text-xs px-3 py-1">
                  <Users className="h-3 w-3 mr-1" />
                  LINKEDIN
                </Button>
                <Button className="cyber-button text-xs px-3 py-1">
                  <Activity className="h-3 w-3 mr-1" />
                  TWITTER
                </Button>
              </div>
            </div>
            
            <div className="glassmorphism-card p-6">
              <h3 className="font-semibold mb-4 font-mono text-cyber-green">[ SECURITY SERVICES ]</h3>
              <div className="space-y-2 text-cyber-blue/80 text-sm font-mono">
                <div className="hover:text-cyber-green transition-colors cursor-pointer">• THREAT DETECTION</div>
                <div className="hover:text-cyber-green transition-colors cursor-pointer">• INCIDENT RESPONSE</div>
                <div className="hover:text-cyber-green transition-colors cursor-pointer">• SECURITY CONSULTING</div>
                <div className="hover:text-cyber-green transition-colors cursor-pointer">• SECURITY TRAINING</div>
                <div className="hover:text-cyber-green transition-colors cursor-pointer">• COMPLIANCE MGMT</div>
                <div className="hover:text-cyber-green transition-colors cursor-pointer">• PENETRATION TESTING</div>
              </div>
            </div>
            
            <div className="glassmorphism-card p-6">
              <h3 className="font-semibold mb-4 font-mono text-cyber-blue">[ ORGANIZATION ]</h3>
              <div className="space-y-2 text-cyber-green/80 text-sm font-mono">
                <div className="hover:text-cyber-blue transition-colors cursor-pointer">• ABOUT ZENAEGIS</div>
                <div className="hover:text-cyber-blue transition-colors cursor-pointer">• CYBER TEAM</div>
                <div className="hover:text-cyber-blue transition-colors cursor-pointer">• JOIN FORCE</div>
                <div className="hover:text-cyber-blue transition-colors cursor-pointer">• INTEL BLOG</div>
                <div className="hover:text-cyber-blue transition-colors cursor-pointer">• CONTACT HQ</div>
              </div>
            </div>
            
            <div className="glassmorphism-card p-6">
              <h3 className="font-semibold mb-4 font-mono text-cyber-red">[ SECURE CHANNELS ]</h3>
              <div className="space-y-3 text-cyber-green/80 text-sm font-mono">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                  <span>info@zenaegislabs.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
                  <span>+94 71 922 9098</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-red rounded-full animate-pulse"></div>
                  <span>Colombo,Sri Lanka.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyber-green/30 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-cyber-blue/70 font-mono text-sm mb-4 md:mb-0">
                <span className="text-cyber-green">©</span> 2025 ZENAEGIS SECURITY FORCE. ALL PROTOCOLS SECURED.
              </div>
              <div className="flex space-x-6 text-cyber-green/60 font-mono text-xs">
                <span className="hover:text-cyber-green transition-colors cursor-pointer">PRIVACY PROTOCOL</span>
                <span className="hover:text-cyber-green transition-colors cursor-pointer">TERMS OF SERVICE</span>
                <span className="hover:text-cyber-green transition-colors cursor-pointer">SECURITY POLICY</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* AI ChatBot */}
      <ChatBot />
    </div>
  )
}

export default App


