import CaseStudyLayout from '../../components/CaseStudyLayout'

export default function FinanceCard(){
  const data = {
    title: 'FinanceCard',
    subtitle: 'Smart card UX and finance product design for seamless payments and insights.',
    heroImg: '/images/financialcard.png',
    images: ['/images/financialcard.png','/images/42-ai-agent-1.svg','/images/real-estate.png'],
    challenge: 'Users needed clearer spending insights and a seamless, secure payments UX across devices.',
    solution: 'We designed a modern card UX with real-time analytics, intelligent notifications, and streamlined onboarding.',
    results: ['Reduced payment friction by 22%', 'Increased feature adoption by 30%', 'Positive NPS uplift'],
    testimonial: { quote: 'FinanceCard made payments intuitive for our customers and reduced support load.', author: 'Priya Menon', meta: 'Product Lead — FinServ' },
    tags: ['Payments','UX','Product Design']
  }

  // Add richer sections so the layout shows images and detailed content inside the main flow
  const sections = [
    { title: 'Overview', content: 'FinanceCard is a modern payments product that unifies spending insights, budgeting and card management into a single, delightful experience.' },
    { title: 'Approach', content: 'We ran discovery workshops, built interactive prototypes, and validated flows with a cohort of target users. The design emphasized clarity, progressive disclosure, and trust signals.' },
    { title: 'Outcome', content: 'The product shipped with a refreshed card onboarding, contextual insights, and push notifications — resulting in measurable drops in friction and higher engagement.' }
  ]

  return (
    <div style={{padding:'24px 20px'}}>
      <CaseStudyLayout {...data} sections={sections} />
    </div>
  )
}
