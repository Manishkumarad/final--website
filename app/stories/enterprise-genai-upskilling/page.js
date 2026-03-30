import CaseStudyLayout from '../../components/CaseStudyLayout'

export default function EnterpriseGenAI(){
  const data = {
    title: 'Enterprise GenAI Upskilling',
    subtitle: 'Upskilling digital experts across the organisation with hands-on GenAI programs.',
    heroImg: '/images/marriott-mockup.jpg',
    challenge: 'Teams lacked practical experience applying GenAI to real business problems, slowing adoption.',
    solution: 'We delivered structured curriculum, hands-on labs, and coached pilots to accelerate internal capability.',
    results: ['24 AI user stories extracted', '48 components scaffolded with design system', '12 pipeline integrations automated'],
    testimonial: { quote: 'The upskilling program accelerated our AI initiatives and empowered internal teams.', author: 'Kavita Sharma', meta: 'Head of Data — Global Retail' },
    tags: ['Training','GenAI','Change Management']
  }

  return (
    <div style={{padding:'24px 20px'}}>
      <CaseStudyLayout {...data} />
    </div>
  )
}
