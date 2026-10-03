import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import { NumberBadge } from '../components/common/Badge';

export default function HowItWorksSection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';

  const steps = [
    { num: '01', title: isHi ? 'पारिवारिक संदर्भ' : 'Family Context', desc: isHi ? 'शिक्षार्थी और परिवार की स्थिति को समझें' : 'Understand the learner and family situation' },
    { num: '02', title: isHi ? 'पारिवारिक चिंता' : 'Family Concern', desc: isHi ? 'पहचानें कि निर्णय को क्या रोक रहा है' : 'Identify what is stopping the decision' },
    { num: '03', title: isHi ? 'साक्ष्य' : 'Evidence', desc: isHi ? 'प्रासंगिक, स्थानीय साक्ष्य प्राप्त करें' : 'Retrieve relevant, localized evidence' },
    { num: '04', title: isHi ? 'करियर पथ' : 'Career Path', desc: isHi ? 'दिखाएं कि करियर कहां ले जा सकता है' : 'Show where the career can lead' },
    { num: '05', title: isHi ? 'क्या होगा अगर' : 'What-If', desc: isHi ? 'यथार्थवादी वैकल्पिक स्थितियों का पता लगाएं' : 'Explore realistic alternative situations' },
    { num: '06', title: isHi ? 'पारिवारिक निर्णय' : 'Family Decision', desc: isHi ? 'निर्धारित करें कि चिंता हल हुई या नहीं' : 'Determine whether the concern is resolved' },
    { num: '07', title: isHi ? 'आवश्यकता पर काउंसलर' : 'Counsellor If Needed', desc: isHi ? 'जब साक्ष्य अपर्याप्त हो तो एस्कलेट करें' : 'Escalate when evidence is insufficient' },
  ];

  return (
    <Section id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
          {isHi ? 'यह कैसे काम करता है' : 'How it works'}
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          {isHi
            ? 'एक संरचित यात्रा जो चिंता से समाधान तक ले जाती है।'
            : 'A structured journey from concern to resolution.'}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-6 items-start">
            <div className="flex flex-col items-center">
              <NumberBadge number={step.num} />
              {i < steps.length - 1 && (
                <div className="w-px h-16 bg-border mt-2" />
              )}
            </div>
            <div className="pb-12">
              <h3 className="font-editorial text-xl lg:text-2xl text-text mb-1">{step.title}</h3>
              <p className="text-sm text-text-muted">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

