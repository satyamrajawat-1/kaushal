import { useState } from 'react';
import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { NumberBadge } from '../components/common/Badge';
import { Users, MapPin, FileCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';
  const [visible] = useState(true);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pillars = [
    { icon: Users, label: isHi ? 'परिवार-प्रथम' : 'Family-First' },
    { icon: MapPin, label: isHi ? 'स्थानीय साक्ष्य' : 'Hyper-Local' },
    { icon: FileCheck, label: isHi ? 'साक्ष्य-प्रमाणित' : 'Evidence-Proven' },
    { icon: HeartHandshake, label: isHi ? 'AI + मानव' : 'AI + Human' },
  ];

  return (
    <Section id="home" className="pt-28 lg:pt-36" noPadding>
      <div className="pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className={`${visible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text mb-6 leading-[1.1]">
              {isHi ? (
                <>व्यावसायिक करियर<br />के फ़ैसले<br /><span className="text-primary">साथ मिलकर</span> लें।</>
              ) : (
                <>Make vocational<br />career decisions<br /><span className="text-primary">together.</span></>
              )}
            </h1>
            <p className="text-lg lg:text-xl text-text-muted mb-4 max-w-xl">
              {isHi
                ? 'विश्वसनीय स्थानीय साक्ष्य के माध्यम से करियर, कमाई, अवसर और विकास को समझें।'
                : 'Understand careers, earnings, opportunities and growth through trusted local evidence.'}
            </p>
            <p className="text-base text-text-muted mb-8 max-w-xl leading-relaxed">
              {isHi
                ? '"कौशल साथ शिक्षार्थियों और परिवारों को एक ही बातचीत में लाता है — स्थानीय करियर साक्ष्य, सरल व्याख्या और आवश्यकता पड़ने पर मानव परामर्श को मिलाकर।"'
                : '"Kaushal Saath brings learners and families into the same conversation — combining local career evidence, simple explanations and human counselling when needed."'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" onClick={() => scrollTo('#family-context')}>
                {isHi ? 'परिवार परामर्श शुरू करें' : 'Start Family Counselling'} <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => scrollTo('#how-it-works')}>
                {isHi ? 'कैसे काम करता है देखें' : 'See How It Works'}
              </Button>
            </div>
          </div>

          {/* Right — Editorial Illustration */}
          <div className={`hidden lg:block ${visible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
            <div className="relative">
              {/* Diagram-style illustration */}
              <div className="border border-border bg-cream-light p-8 relative">
                <div className="space-y-6">
                  {/* Parent + Learner */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-soft-amber border border-border flex items-center justify-center">
                      <Users size={20} className="text-warning" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{isHi ? 'अभिभावक + शिक्षार्थी' : 'Parent + Learner'}</p>
                      <p className="text-xs text-text-muted">{isHi ? 'परिवार निर्णय इकाई' : 'Family Decision Unit'}</p>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-border ml-6" />
                  {/* Career Path */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage border border-border flex items-center justify-center">
                      <FileCheck size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{isHi ? 'करियर पथ + साक्ष्य' : 'Career Path + Evidence'}</p>
                      <p className="text-xs text-text-muted">{isHi ? 'स्थानीय डेटा' : 'Local Data'}</p>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-border ml-6" />
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-soft-blue border border-border flex items-center justify-center">
                      <MapPin size={20} className="text-primary-light" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{isHi ? 'स्थान + अवसर' : 'Location + Opportunities'}</p>
                      <p className="text-xs text-text-muted">{isHi ? 'जिला → राज्य → राष्ट्रीय' : 'District → State → National'}</p>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-border ml-6" />
                  {/* Decision */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <HeartHandshake size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{isHi ? 'सूचित पारिवारिक निर्णय' : 'Informed Family Decision'}</p>
                      <p className="text-xs text-text-muted">{isHi ? 'AI + मानव परामर्शदाता' : 'AI + Human Counsellor'}</p>
                    </div>
                  </div>
                </div>
                {/* Annotation */}
                <p className="annotation absolute -right-4 top-4 -rotate-3 text-sm">
                  {isHi ? 'परिवार ही निर्णय लेता है।' : 'The family makes the decision.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Strip */}
        <div className="mt-16 border-t border-b border-border py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <NumberBadge number={<Icon size={18} />} />
                <span className="text-sm font-medium text-text">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

