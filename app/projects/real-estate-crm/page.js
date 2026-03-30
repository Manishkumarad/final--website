import CaseStudyLayout from '../../components/CaseStudyLayout'

export default function RealEstateCRM(){
  const data = {
    title: 'Real Estate CRM',
    subtitle: 'End-to-end CRM for realtors — leads, listings and transactions.',
    challenge: 'Managing incoming leads and matching them to listings was manual and error-prone, causing missed opportunities.',
    solution: 'We implemented a unified CRM with MLS integration, automated lead scoring, and property matching powered by AI.',
    results: [
      '34% increase in conversion rate (12 months post-launch)',
      '63% reduction in administrative time per agent',
      'Mobile usage accounted for 68% of interactions',
      '287% ROI within 12 months'
    ],
    testimonial: { quote: 'The CRM streamlined our sales pipeline and increased conversions quickly.', author: 'Sanjay Patel', meta: 'Regional Manager — Aawaas Real Estate' },
    tags: ['CRM','Real Estate','Automation'],
    heroImg: '/images/real-estate.png',
    images: ['/images/real-estate.png', '/images/marriott-mockup.jpg', '/images/financialcard.png'],
    sections: [
      { title: 'Executive Summary', content: (
        <>
          <p>This case study examines the implementation and impact of a modern Real Estate Customer Relationship Management (CRM) system designed to streamline property management, client interactions, and sales operations for medium to large real estate agencies. The system transformed manual workflows into an integrated digital platform, resulting in a 34% increase in conversion rates and 45% improvement in operational efficiency within the first year of deployment.</p>
          <p><strong>Project Duration:</strong> 18 months (6 months development, 12 months post-launch monitoring) — <strong>Investment:</strong> $850,000 — <strong>ROI:</strong> 287% after 12 months — <strong>Team Size:</strong> 12 professionals</p>
        </>
      )},

      { title: 'Background & Context', content: (
        <>
          <p><strong>Client:</strong> Premier Properties Group — mid-to-large brokerage covering residential and commercial markets across 8 branches; 127 agents.</p>
          <p>The organization faced fragmented data across multiple platforms, inefficient communication, lack of real-time property insights, and manual scheduling. Agents spent an average of 3.5 hours daily on administrative tasks and the company experienced a 28% lead leakage rate.</p>
        </>
      )},

      { title: 'Project Objectives', content: (
        <>
          <p>Primary goals included centralizing property and client data, reducing administrative overhead by 40%+, increasing lead-to-client conversion by 25%+, enabling mobile access, and automating routine tasks such as follow-ups and reporting.</p>
          <p>Success metrics tracked time on admin tasks, conversion rates, deal closure times, CSAT, adoption rate, revenue per agent, and active listings.</p>
        </>
      )},

      { title: 'Solution Design & Architecture', content: (
        <>
          <p><strong>Stack:</strong> React + TypeScript, Tailwind-based UI, Redux Toolkit, Node/Express, PostgreSQL, Redis, AWS S3, JWT/OAuth, WebSockets, Snowflake analytics, PWA.</p>
          <p>The platform used a microservices pattern with services for Authentication, Property Management, Client & Lead Management, Scheduling, Document Management, Notifications, Analytics, and an Integration Layer. Services were containerized and deployed to Kubernetes for scalability.</p>
        </>
      )},

      { title: 'Implementation Process', content: (
        <>
          <p>The program ran across Discovery, Development, Testing, Deployment, and Monitoring phases. Development sprints built core infra, property and client modules, scheduling with calendar sync, and the dashboard with analytics. QA included unit, integration and UAT testing with pilot agents.</p>
          <p>Deployment used staged rollout, data migration scripts, and a training program with documentation and video tutorials.</p>
        </>
      )},

      { title: 'Challenges & Solutions', content: (
        <>
          <p><strong>Resistance to change:</strong> champion program, incentives, personalized training — adoption rose to 94% in 3 months.</p>
          <p><strong>Data migration:</strong> custom ETL scripts, staging validation — migrated 15,000+ client records with 99.2% accuracy.</p>
          <p><strong>MLS integrations:</strong> delta sync, caching, and graceful fallback — 99.7% uptime.</p>
          <p><strong>Mobile performance:</strong> lazy loading, code splitting, offline mode — load time dropped from 8.2s to 2.1s.</p>
        </>
      )},

      { title: 'Results & Impact', content: (
        <>
          <p>Within 12 months the CRM delivered measurable improvements: administrative time fell from 3.5 to 1.3 hours/day (63% reduction), lead response time shrank from 4.2 hours to 27 minutes, conversion rate rose from 26% to 34%, and revenue per agent increased 33%.</p>
          <p>Financially, first-year cost savings were $1.2M and revenue increase $5.8M — yielding a 287% ROI.</p>
        </>
      )},

      { title: 'Lessons Learned & Roadmap', content: (
        <>
          <p>Key success factors included executive sponsorship, user-centered design, and phased rollout. Future roadmap items included AI chatbot, advanced search (NLP), virtual staging, blockchain experiments, and AR tours.</p>
        </>
      )},

      { title: 'Conclusion', content: (
        <>
          <p>The Real Estate CRM project centralized data, automated workflows, and provided analytics that enabled agents and managers to work more effectively. The solution delivered strong financial returns and improved user satisfaction while establishing a foundation for further innovation.</p>
        </>
      )}
    ]
  }

  return (
    <div style={{padding:'24px 20px'}}>
      <CaseStudyLayout {...data} sections={data.sections} images={data.images} />
    </div>
  )
}
