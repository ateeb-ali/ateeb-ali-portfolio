/* ============================================================
   CONTENT DATA
   Everything here is drawn directly from the uploaded CV.
   Update this file to change site content without touching markup.
   ============================================================ */

const CONSOLE_LINES = [
  "> role: BS Cybersecurity, Dawood UET (2023 - Present)",
  "> focus: penetration testing, digital forensics",
  "> ctf: Ignite, picoCTF, CyberGon (crypto / OSINT)",
  "> recent: Cyber Risk Management Intern, State Bank of Pakistan",
  "> also: presenting security topics to non-security audiences",
  "> status: building, testing, still learning"
];

const TIMELINE = [
  {
    date: "Jun 2026 \u2013 Aug 2026",
    tag: "6 weeks",
    org: "State Bank of Pakistan",
    role: "Cyber Risk Management Intern",
    bullets: [
      "Analysed a banking case study to identify security weaknesses and reviewed the security controls the organisation had in place.",
      "Calculated risk scores as part of a structured risk assessment process.",
      "Researched cybersecurity policies and frameworks, including UK cybersecurity approaches, to inform governance and risk discussions.",
      "Presented research findings and risk-related material to the department."
    ]
  }
];

const PROJECTS = [
  {
    name: "Simple Network Intrusion Detection System",
    date: "Jan 2026",
    featured: true,
    description: "A Scapy based IDS that watches live network traffic, flags port scans and anomalies, and raises real time alerts for DDoS-style activity.",
    tech: ["Python", "Scapy", "Network Security"],
    security_angle: "Built to understand detection logic from the defender's side, not just how the attacks it flags actually work."
  },
  {
    name: "Resume Parser",
    date: "Apr 2025",
    featured: false,
    description: "An automated parser that extracts structured candidate data (contact info, education, skills) out of PDF resumes.",
    tech: ["Python", "PyMuPDF", "Regex"],
    security_angle: null
  }
];

const PRACTICE_AREAS = [
  {
    id: "web",
    label: "Web",
    heading: "Web application penetration testing",
    body: "Identified SQL injection, XSS, and broken authentication issues on real-world websites using Burp Suite, GoBuster, and SQLMap.",
    tools: ["Burp Suite", "GoBuster", "SQLMap"]
  },
  {
    id: "mobile",
    label: "Mobile",
    heading: "Mobile application penetration testing",
    body: "Reverse engineered Android APKs with JADX, identifying insecure hashing algorithms, missing SSL pinning, and exposed cryptographic keys.",
    tools: ["JADX", "APKTool"]
  },
  {
    id: "network",
    label: "Network",
    heading: "Network penetration testing",
    body: "Executed attack scenarios across OSI layers, including MAC spoofing, ARP poisoning, IP spoofing, ICMP flood, DNS poisoning, and man-in-the-middle attacks.",
    tools: ["Wireshark", "NetworkMiner"]
  },
  {
    id: "infra",
    label: "Infrastructure",
    heading: "Infrastructure penetration testing",
    body: "Conducted OSI 7-layer security assessments in a controlled lab environment, covering misconfigurations, weak authentication, and exposed services.",
    tools: []
  },
  {
    id: "forensics",
    label: "Forensics",
    heading: "Digital forensics",
    body: "Network forensics with Wireshark and NetworkMiner to reconstruct attack timelines. Memory forensics with Magnet RAM Capture to pull processes and indicators from RAM dumps. Mobile forensics with Cellebrite to recover call logs, messages, and deleted artefacts. Disk image analysis with Autopsy and FTK Imager to recover deleted files and build case timelines.",
    tools: ["Wireshark", "NetworkMiner", "Magnet RAM Capture", "Cellebrite", "Autopsy", "FTK Imager"]
  }
];

const SPEAKING = [
  {
    title: "Red Team vs Blue Team Strategies",
    org: "Khadim Ali Shah Bukhari Institute of Technology (KASBIT)",
    description: "Presented offensive and defensive security operations, real-world workflows, and case studies to undergraduate students."
  },
  {
    title: "Careers in Cybersecurity",
    org: "The Saran Educational Trust (SET) School",
    description: "Mentored secondary school students on cybersecurity career paths, certifications, and the skills required to get started."
  }
];

const SKILLS = [
  { category: "Penetration Testing", items: ["Burp Suite", "Nmap", "SQLMap", "GoBuster"] },
  { category: "Mobile Analysis", items: ["JADX", "APKTool"] },
  { category: "Network Analysis", items: ["Wireshark", "NetworkMiner"] },
  { category: "Digital Forensics", items: ["Autopsy", "FTK Imager", "Magnet RAM Capture", "Cellebrite"] },
  { category: "Systems", items: ["Kali Linux", "Windows"] },
  { category: "Scripting", items: ["Python"] }
];

const CERTIFICATIONS = [
  { name: "Certified Ethical Hacker (CEH)", org: "NAVTTC" },
  { name: "Cisco Certified Network Analyst (CCNA)", org: "Training \u2014 Cisco NetAcad" },
  { name: "SC-200: Mitigate Threats using Microsoft Security Copilot", org: "Training \u2014 Microsoft" },
  { name: "Google Cybersecurity Professional", org: "Coursera" },
  { name: "Google Security Fundamentals", org: "Google Cloud Skills Boost" }
];

const SHORT_COURSES = "Also completed: OSINT, Hacking Methodology, Information Security Fundamentals, English for IT, Basic Operating Systems, and IP Addressing.";
