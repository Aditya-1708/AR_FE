// src/assets/data/certificationsData.js

export const certificationsData = [
  {
    id: 1,
    name: "ISO 9001:2015",
    description:
      "Quality Management System certification ensuring consistent product quality and customer satisfaction.",
    icon: "fas fa-certificate",
    color: "blue",
    issued: "2020",
    validUntil: "2026",
    scope: "Manufacturing",
    issuer: "International Standards Organization",
    details: {
      standard: "ISO 9001:2015",
      issued: "March 2020",
      validUntil: "March 2026",
      scope: "Design, manufacturing, and delivery of metal fabrication products",
      certifyingBody: "ISO Accredited Registrar"
    },
    benefits: [
      "Consistent quality processes",
      "Customer satisfaction focus",
      "Continuous improvement culture",
      "Risk-based thinking approach"
    ]
  },
  {
    id: 2,
    name: "Factory License",
    description:
      "Government-approved manufacturing facility license ensuring compliance with industrial regulations.",
    icon: "fas fa-industry",
    color: "amber",
    licenseNo: "FL-2024-001",
    authority: "State Industrial Board",
    category: "Heavy Manufacturing",
    details: {
      licenseNumber: "FL-2024-001",
      authority: "State Industrial Board",
      category: "Heavy Manufacturing Class A",
      issued: "January 2024",
      renewal: "Annual renewal required"
    },
    compliance: [
      "Environmental regulations",
      "Safety standards adherence",
      "Zoning compliance",
      "Building code requirements"
    ]
  },
  {
    id: 3,
    name: "OSHA Compliance",
    description:
      "Workplace safety compliance certification ensuring safe working environment for all employees.",
    icon: "fas fa-shield-alt",
    color: "green",
    standard: "29 CFR 1910",
    lastAudit: "Jan 2024",
    rating: "Excellent",
    details: {
      standard: "OSHA 29 CFR 1910 General Industry",
      lastAudit: "January 2024",
      rating: "Excellent Safety Record",
      incidentRate: "Below industry average",
      trainingHours: "2,400 annual hours"
    },
    programs: [
      "Lockout/Tagout procedures",
      "Personal protective equipment",
      "Hazard communication",
      "Emergency response planning"
    ]
  },
  {
    id: 4,
    name: "AWS Welding Certification",
    description:
      "American Welding Society certification for structural and pressure vessel welding procedures.",
    icon: "fas fa-fire",
    color: "orange",
    code: "AWS D1.1",
    welders: "15 Certified",
    processes: "GMAW/GTAW",
    details: {
      code: "AWS D1.1 Structural Welding Code",
      welders: "15 certified welders on staff",
      processes: "GMAW, GTAW, SMAW, SAW",
      positions: "All position qualified",
      testing: "Annual recertification"
    },
    capabilities: [
      "Structural steel welding",
      "Pressure vessel fabrication",
      "Pipe welding systems",
      "Repair and maintenance welding"
    ]
  },
  {
    id: 5,
    name: "Environmental ISO 14001",
    description:
      "Environmental management certification demonstrating commitment to sustainability and eco-friendly practices.",
    icon: "fas fa-leaf",
    color: "green",
    standard: "ISO 14001:2015",
    carbonNeutral: "2023",
    wasteReduction: "85%",
    details: {
      standard: "ISO 14001:2015",
      certified: "May 2023",
      carbonNeutral: "Achieved 2023",
      wasteReduction: "85% waste reduction",
      recycling: "95% material recovery"
    },
    initiatives: [
      "Energy efficiency programs",
      "Waste minimization strategies",
      "Water conservation measures",
      "Sustainable material sourcing"
    ]
  },
  {
    id: 6,
    name: "Export Certification",
    description:
      "International export certification enabling global supply chain operations and trade compliance.",
    icon: "fas fa-globe",
    color: "blue",
    countries: "25+ Markets",
    standards: "CE, CSA",
    compliance: "Full",
    details: {
      countries: "Export to 25+ countries",
      standards: "CE, CSA, JIS compliant",
      compliance: "Full trade regulation compliance",
      documentation: "Complete export documentation",
      logistics: "Worldwide shipping capability"
    },
    markets: [
      "North American markets",
      "European Union countries",
      "Asia-Pacific region",
      "Latin American countries"
    ]
  },
  {
    id: 7,
    name: "Quality Assurance Certification",
    description:
      "Third-party quality assurance verification ensuring products meet industry specifications and standards.",
    icon: "fas fa-medal",
    color: "purple",
    standard: "ASTM/AWS",
    testing: "NDT Certified",
    accuracy: "99.8%",
    details: {
      standard: "ASTM and AWS standards",
      testing: "Non-destructive testing certified",
      accuracy: "99.8% quality rate",
      inspection: "100% inspection protocols",
      traceability: "Full material traceability"
    },
    testingMethods: [
      "Dimensional inspection",
      "Material verification",
      "Mechanical testing",
      "Non-destructive evaluation"
    ]
  },
  {
    id: 8,
    name: "Training & Development",
    description:
      "Continuous professional development certification ensuring skilled workforce and latest industry knowledge.",
    icon: "fas fa-graduation-cap",
    color: "indigo",
    programsCount: "12 Active",
    hoursPerYear: "480",
    certification: "100%",
    details: {
      programs: "12 active training programs",
      hoursPerYear: "480 training hours annually",
      certification: "100% workforce certified",
      partnerships: "Industry training partnerships",
      technology: "Latest technology training"
    },
    programs: [
      "Technical skills development",
      "Safety training programs",
      "Quality system training",
      "Leadership development"
    ]
  }
];
