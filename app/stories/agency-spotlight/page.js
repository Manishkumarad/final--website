import CaseStudyLayout from '../../components/CaseStudyLayout'

export default function AgencySpotlight(){
  const data = {
    title: 'Agency Spotlight',
    subtitle: 'How our agency drives measurable outcomes through product thinking and AI.',
    heroImg: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200',
    challenge: 'Clients needed faster delivery and clearer ROI from digital initiatives.',
    solution: 'We combined design systems, AI-assisted engineering, and lean product process to speed delivery and increase impact.',
    results: ['2–3× faster delivery', 'Improved feature adoption across pilots', 'Repeatable playbooks for new clients'],
    testimonial: { quote: 'Their approach balances speed with quality — we saw immediate improvements.', author: 'Arun Mehta', meta: 'CTO — The N Zone' },
    tags: ['Agency','Product','AI']
  }

  return (
    <div style={{padding:'24px 20px'}}>
      <CaseStudyLayout {...data} />
    </div>
  )
}
