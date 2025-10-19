// ZenAegis Company Knowledge Base
export const companyKnowledge = {
  company: {
    name: "ZenAegis",
    tagline: "Cybersecurity Solutions - Providing peace of mind through proactive and robust digital defense",
    mission: "To provide advanced cybersecurity solutions that protect businesses from digital threats while ensuring operational continuity and peace of mind.",
    vision: "To be the leading cybersecurity partner that enables organizations to thrive in the digital world without fear of cyber threats.",
    founded: "Established to address the growing need for comprehensive cybersecurity solutions in an increasingly digital world"
  },
  
  services: {
    "threat-detection": {
      name: "Threat Detection",
      description: "Advanced monitoring and detection of cyber threats using AI and machine learning technologies",
      details: [
        "24/7 real-time monitoring systems",
        "AI-powered threat analysis",
        "Machine learning-based anomaly detection",
        "Advanced persistent threat (APT) identification",
        "Behavioral analysis and pattern recognition",
        "Automated threat response protocols"
      ],
      benefits: [
        "Early threat identification",
        "Reduced false positives",
        "Automated response capabilities",
        "Continuous monitoring coverage"
      ]
    },
    
    "vulnerability-assessment": {
      name: "Vulnerability Assessments and Penetration Testing",
      description: "Identifies Security Weaknesses and Simulates Real-world Attacks to Ensure Your Network is Protected Against Potential Threats",
      details: [
        "Comprehensive network vulnerability scanning",
        "Web application security testing",
        "Infrastructure penetration testing",
        "Social engineering assessments",
        "Wireless network security testing",
        "Cloud infrastructure security evaluation",
        "Detailed reporting with remediation recommendations"
      ],
      benefits: [
        "Proactive security weakness identification",
        "Compliance requirement fulfillment",
        "Risk mitigation strategies",
        "Security posture improvement"
      ]
    },
    
    "security-consulting": {
      name: "Security Consulting",
      description: "Expert Consultation to Assess and Improve Your Organization's Security Posture",
      details: [
        "Security strategy development",
        "Risk assessment and management",
        "Compliance framework implementation",
        "Security policy development",
        "Incident response planning",
        "Security architecture design",
        "Regulatory compliance guidance (GDPR, HIPAA, PCI-DSS, etc.)"
      ],
      benefits: [
        "Tailored security strategies",
        "Expert guidance and best practices",
        "Compliance assurance",
        "Cost-effective security improvements"
      ]
    },
    
    "security-training": {
      name: "Security Training",
      description: "Comprehensive training programs to educate your team on cybersecurity best practices",
      details: [
        "Employee security awareness training",
        "Phishing simulation exercises",
        "Security best practices workshops",
        "Incident response training",
        "Custom training programs",
        "Security certification preparation",
        "Regular security updates and briefings"
      ],
      benefits: [
        "Reduced human error risks",
        "Enhanced security culture",
        "Improved incident response",
        "Better compliance adherence"
      ]
    },
    
    "mobile-app-security": {
      name: "Mobile Application Security Audit",
      description: "Comprehensive Assessment to Identify and Mitigate Security Vulnerabilities in Mobile Apps Across Platforms and Environments",
      details: [
        "iOS and Android application testing",
        "OWASP Mobile Top 10 assessment",
        "API security testing",
        "Data protection analysis",
        "Authentication and authorization testing",
        "Reverse engineering protection evaluation",
        "App store security compliance"
      ],
      benefits: [
        "Mobile-specific threat protection",
        "App store approval assurance",
        "User data protection",
        "Brand reputation protection"
      ]
    },
    
    "penetration-testing": {
      name: "Penetration Testing",
      description: "Proactive security testing to identify vulnerabilities before attackers do",
      details: [
        "External network penetration testing",
        "Internal network assessment",
        "Web application penetration testing",
        "API security testing",
        "Wireless network testing",
        "Social engineering testing",
        "Red team exercises"
      ],
      benefits: [
        "Real-world attack simulation",
        "Vulnerability prioritization",
        "Security control validation",
        "Compliance requirements fulfillment"
      ]
    }
  },
  
  stats: {
    "web-mobile-apps": {
      number: "65+",
      description: "Web & Mobile Apps Tested",
      details: "Successfully tested and secured over 65 web and mobile applications across various industries"
    },
    "vapt-completed": {
      number: "100+",
      description: "VAPT Completed",
      details: "Completed over 100 Vulnerability Assessment and Penetration Testing projects with comprehensive security improvements"
    },
    "uptime": {
      number: "99.9%",
      description: "Uptime Guaranteed",
      details: "Maintaining 99.9% uptime for our monitoring and security services with redundant infrastructure"
    },
    "clients": {
      number: "25+",
      description: "Happy Clients",
      details: "Serving over 25 satisfied clients across various industries with ongoing security partnerships"
    }
  },
  
  technologies: [
    "AI-powered threat detection",
    "Machine learning algorithms",
    "Neural networks for pattern recognition",
    "Quantum-level encryption protocols",
    "Advanced firewall systems",
    "Intrusion detection systems (IDS)",
    "Security Information and Event Management (SIEM)",
    "Endpoint detection and response (EDR)",
    "Cloud security platforms",
    "Mobile security frameworks"
  ],
  
  industries: [
    "Financial services",
    "Healthcare",
    "E-commerce",
    "Technology startups",
    "Manufacturing",
    "Government agencies",
    "Educational institutions",
    "Small and medium businesses"
  ],
  
  certifications: [
    "ISO 27001 aligned practices",
    "PCI-DSS compliance expertise",
    "GDPR compliance guidance",
    "HIPAA security requirements",
    "SOC 2 Type II frameworks",
    "NIST Cybersecurity Framework"
  ],
  
  contact: {
    availability: "24/7 security monitoring and support",
    response_time: "Emergency incidents: Within 15 minutes",
    consultation: "Free initial security assessment available",
    support_channels: ["Email support", "Phone support", "Emergency hotline", "Live chat"]
  },
  
  faqs: [
    {
      question: "What makes ZenAegis different from other cybersecurity companies?",
      answer: "ZenAegis combines cutting-edge AI technology with human expertise, offering 24/7 monitoring, personalized security strategies, and rapid incident response. Our proactive approach focuses on preventing threats before they impact your business."
    },
    {
      question: "How quickly can you respond to a security incident?",
      answer: "We guarantee response to emergency incidents within 15 minutes. Our 24/7 monitoring systems ensure continuous protection, and our incident response team is always ready to act immediately."
    },
    {
      question: "Do you work with small businesses or just large enterprises?",
      answer: "We serve businesses of all sizes, from small startups to large enterprises. Our scalable solutions are designed to meet the specific needs and budget constraints of each organization."
    },
    {
      question: "What compliance standards do you help with?",
      answer: "We help organizations achieve and maintain compliance with various standards including GDPR, HIPAA, PCI-DSS, SOC 2, ISO 27001, and NIST Cybersecurity Framework."
    },
    {
      question: "How do you stay updated with the latest cyber threats?",
      answer: "Our team continuously monitors global threat intelligence feeds, participates in cybersecurity communities, and uses AI-powered systems to identify emerging threats in real-time."
    }
  ]
};

// Helper function to search knowledge base
export const searchKnowledge = (query) => {
  const queryLower = query.toLowerCase();
  const results = [];
  
  // Search services
  Object.values(companyKnowledge.services).forEach(service => {
    if (service.name.toLowerCase().includes(queryLower) || 
        service.description.toLowerCase().includes(queryLower) ||
        service.details.some(detail => detail.toLowerCase().includes(queryLower))) {
      results.push({
        type: 'service',
        data: service
      });
    }
  });
  
  // Search FAQs
  companyKnowledge.faqs.forEach(faq => {
    if (faq.question.toLowerCase().includes(queryLower) || 
        faq.answer.toLowerCase().includes(queryLower)) {
      results.push({
        type: 'faq',
        data: faq
      });
    }
  });
  
  return results;
};

// Generate system prompt for the AI
export const getSystemPrompt = () => {
  return `You are ZenAegis AI Assistant, a helpful cybersecurity expert representing ZenAegis Cybersecurity Solutions.

COMPANY OVERVIEW:
${companyKnowledge.company.name} - ${companyKnowledge.company.tagline}
Mission: ${companyKnowledge.company.mission}

OUR SERVICES:
${Object.values(companyKnowledge.services).map(service => 
  `- ${service.name}: ${service.description}`
).join('\n')}

KEY STATISTICS:
${Object.values(companyKnowledge.stats).map(stat => 
  `- ${stat.description}: ${stat.number}`
).join('\n')}

PERSONALITY & TONE:
- Professional yet approachable
- Knowledgeable about cybersecurity
- Proactive in offering help
- Use some technical terminology but keep it accessible
- Be confident about ZenAegis capabilities
- Always prioritize customer security and peace of mind

INSTRUCTIONS:
1. Always identify yourself as the ZenAegis AI Assistant
2. Focus on cybersecurity topics and ZenAegis services
3. Provide specific, actionable information when possible
4. If asked about services not offered, politely redirect to what ZenAegis can help with
5. Encourage users to contact ZenAegis for detailed consultations
6. Keep responses concise but informative
7. Use cyber-themed language occasionally (but don't overdo it)

When users ask about ZenAegis services, pricing, or want to get in touch, provide helpful information and encourage them to reach out for a consultation.`;
};