import CaseStudyLayout from '../../components/CaseStudyLayout'

export default function ScholorAI(){
  const data = {
    title: 'ScholorAI',
    subtitle: 'AI-driven student insights platform for personalized learning and analytics.',
    heroImg: '/images/scholorai.svg',
    challenge: 'Educators lacked timely insights into student performance and engagement, making interventions slow and manual.',
    solution: 'We built ScholorAI — ingesting LMS data, running predictive models, and surfacing personalized recommendations through dashboards and alerts.',
    results: [
      'Reduced time-to-intervention by 3x',
      'Improved course completion rates by 18%',
      'Automated weekly reports for instructors'
    ],
    testimonial: { quote: 'ScholorAI gave us visibility into student learning patterns that transformed how we teach.', author: 'Dr. Nisha Rao', meta: 'Head of Learning — Regional University' },
    tags: ['AI/ML','Education','Dashboards']
  }

  return (
    <div style={{padding:'24px 20px'}}>
      <CaseStudyLayout {...data} />
    </div>
  )
}
