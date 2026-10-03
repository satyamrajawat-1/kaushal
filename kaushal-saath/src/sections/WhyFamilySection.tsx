import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import { NumberBadge } from '../components/common/Badge';
import Card from '../components/common/Card';
import { Users, ShieldQuestion, FileSearch } from 'lucide-react';

export default function WhyFamilySection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';

  const steps = [
    {
      num: '01',
      icon: Users,
      heading: isHi ? 'करियर का फ़ैसला शायद ही कभी एक व्यक्ति करता है।' : 'A career decision is rarely made by one person.',
      text: isHi
        ? '"शिक्षार्थी की रुचि निर्णय का केवल एक हिस्सा है। स्थान, आय, सुरक्षा, यात्रा और पारिवारिक अपेक्षाएं तय करती हैं कि क्या व्यावहारिक लगता है।"'
        : '"A learner\'s interest is only one part of the decision. Location, income, safety, travel and family expectations shape what feels practical."',
    },
    {
      num: '02',
      icon: ShieldQuestion,
      heading: isHi ? 'अभिभावक अलग सवाल पूछते हैं।' : 'Parents ask different questions.',
      text: isHi
        ? '"आय। नौकरी की सुरक्षा। सुरक्षा। प्रवास। सामाजिक धारणा। भविष्य का विकास।"'
        : '"Income. Job security. Safety. Migration. Social perception. Future growth."',
      concerns: isHi
        ? ['आय', 'नौकरी सुरक्षा', 'सुरक्षा', 'प्रवास', 'सामाजिक धारणा', 'विकास']
        : ['Income', 'Job Security', 'Safety', 'Migration', 'Social Perception', 'Growth'],
    },
    {
      num: '03',
      icon: FileSearch,
      heading: isHi ? 'उत्तर को सामान्य सलाह से ज़्यादा की ज़रूरत है।' : 'The answer needs more than generic advice.',
      text: isHi
        ? '"इसके लिए शिक्षार्थी के ट्रेड, स्थान और स्थिति से प्रासंगिक साक्ष्य की आवश्यकता है।"'
        : '"It needs evidence relevant to the learner\'s trade, location and situation."',
    },
  ];

  return (
    <Section id="why-family" background="cream-light">
      <div className="space-y-24 lg:space-y-32">
        {steps.map((step, i) => (
          <div key={step.num} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="flex items-start gap-5 mb-6">
                <NumberBadge number={step.num} />
                <div className="border-l border-border/40 h-24 hidden lg:block" />
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-5 leading-tight">
                {step.heading}
              </h2>
              <p className="text-base lg:text-lg text-text-muted leading-relaxed">{step.text}</p>
            </div>
            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              {step.concerns ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {step.concerns.map((c) => (
                    <Card key={c} className="p-4 text-center">
                      <p className="text-sm font-medium text-text">{c}</p>
                    </Card>
                  ))}
                </div>
              ) : i === 0 ? (
                <Card className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-soft-amber flex items-center justify-center">
                      <span className="text-lg">👨‍👩‍👦</span>
                    </div>
                    <div>
                      <p className="font-medium">{isHi ? 'एक परिवार' : 'A Family'}</p>
                      <p className="text-xs text-text-muted">{isHi ? 'जयपुर, राजस्थान' : 'Jaipur, Rajasthan'}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-text-muted">
                    <p>{isHi ? 'शिक्षार्थी: 18 वर्ष, 10वीं पास' : 'Learner: 18 years, 10th pass'}</p>
                    <p>{isHi ? 'रुचि: इलेक्ट्रिकल कार्य' : 'Interest: Electrical work'}</p>
                    <p>{isHi ? 'अभिभावक चिंता: कमाई, नौकरी स्थिरता' : 'Parent concern: earnings, job stability'}</p>
                  </div>
                </Card>
              ) : (
                <div className="evidence-card">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {isHi ? 'साक्ष्य कार्ड' : 'Evidence Card'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-soft-amber text-warning border border-warning/20 rounded">
                      {isHi ? 'प्रोटोटाइप डेटा' : 'Prototype Data'}
                    </span>
                  </div>
                  <p className="font-medium text-sm mb-1">{isHi ? 'इलेक्ट्रीशियन — राजस्थान' : 'Electrician — Rajasthan'}</p>
                  <p className="text-2xl font-editorial text-primary mb-1">₹12,000 – ₹18,000</p>
                  <p className="text-xs text-text-muted mb-3">{isHi ? 'प्रारंभिक स्तर, प्रति माह' : 'Entry-level, per month'}</p>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-sage text-primary rounded">{isHi ? 'स्थानीय' : 'Local'}</span>
                    <span className="px-2 py-0.5 bg-cream border border-border rounded">{isHi ? 'सीमित' : 'Limited'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

