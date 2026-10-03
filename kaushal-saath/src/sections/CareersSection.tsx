import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import { trades } from '../data/trades';
import { ArrowRight } from 'lucide-react';

export default function CareersSection() {
  const { session, setTrade } = useFamilySession();
  const isHi = session.language === 'hi';

  const handleSelect = (id: string) => {
    setTrade(id);
    const el = document.querySelector('#counselling');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="careers" background="cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
              {isHi ? 'व्यावसायिक करियर का अन्वेषण करें' : 'Explore Vocational Careers'}
            </h2>
            <p className="text-text-muted text-lg max-w-2xl">
              {isHi 
                ? 'NSQF-संरेखित कौशल प्रशिक्षण कार्यक्रमों के माध्यम से उपलब्ध विभिन्न रास्तों की खोज करें।' 
                : 'Discover the different paths available through NSQF-aligned skill training programs.'}
            </p>
          </div>
          <div className="text-xs text-text-muted bg-cream-light border border-border px-3 py-1.5 rounded self-start md:self-auto">
            {isHi ? 'प्रोटोटाइप कैटलॉग (6 ट्रेड)' : 'Prototype Catalog (6 Trades)'}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trades.map(t => (
            <Card 
              key={t.id} 
              className="p-6 flex flex-col h-full"
              hoverable
              onClick={() => handleSelect(t.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-editorial text-xl text-primary">
                  {isHi ? t.nameHi : t.name}
                </h3>
                <span className="text-[10px] px-2 py-1 bg-sage text-primary font-medium rounded">
                  NSQF {t.nsqfLevel}
                </span>
              </div>
              
              <p className="text-sm text-text-muted mb-6 flex-grow">
                {isHi ? t.descriptionHi : t.description}
              </p>
              
              <div className="space-y-2 mb-6 text-xs border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-text-muted">{isHi ? 'प्रशिक्षण अवधि:' : 'Training Duration:'}</span>
                  <span className="font-medium text-text">{t.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">{isHi ? 'न्यूनतम शिक्षा:' : 'Min Education:'}</span>
                  <span className="font-medium text-text">{t.minEducation}</span>
                </div>
              </div>
              
              <button className="text-sm font-medium text-primary flex items-center gap-1 group bg-transparent border-none cursor-pointer">
                {isHi ? 'कैरियर परामर्श देखें' : 'View Career Counselling'} 
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

