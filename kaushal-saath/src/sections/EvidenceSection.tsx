import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import { ShieldCheck, MapPin, Search } from 'lucide-react';

export default function EvidenceSection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';

  const states = [
    { level: isHi ? 'जिला' : 'DISTRICT', status: 'UNAVAILABLE', color: 'text-danger' },
    { level: isHi ? 'राज्य' : 'STATE', status: 'AVAILABLE', color: 'text-success' },
    { level: isHi ? 'राष्ट्रीय' : 'NATIONAL', status: 'AVAILABLE', color: 'text-success' },
  ];

  return (
    <Section id="evidence" background="cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            {isHi ? 'जानें कि साक्ष्य कितना मजबूत है।' : 'Know how strong the evidence is.'}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {isHi
              ? 'मंच अनुपलब्ध डेटा का आविष्कार नहीं करता है। यह स्पष्ट रूप से संचार करता है जब साक्ष्य सीमित होता है।'
              : 'The platform does not invent missing data. It clearly communicates when evidence is limited and falls back to broader verified information.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="border border-border bg-cream-light p-8 relative">
            <h3 className="font-editorial text-2xl text-primary mb-6">
              {isHi ? 'स्थानीय डेटा पदानुक्रम' : 'Local Data Hierarchy'}
            </h3>
            
            <div className="space-y-4">
              {states.map((s, i) => (
                <div key={s.level} className="flex items-center justify-between p-4 border border-border bg-cream rounded">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-text-muted" />
                    <span className="font-medium text-sm">{s.level}</span>
                  </div>
                  <span className={`text-xs font-bold tracking-wider ${s.color}`}>
                    {s.status}
                  </span>
                  {i < states.length - 1 && (
                    <div className="absolute left-10 -ml-px w-0.5 h-4 bg-border -bottom-4 z-10" />
                  )}
                </div>
              ))}
            </div>
            
            <p className="annotation absolute -right-6 top-1/2 rotate-90 origin-left text-sm whitespace-nowrap">
              {isHi ? 'व्यापक जानकारी पर वापस लौटें' : 'Fallback to broader info'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-text mb-1">{isHi ? 'सत्यापित साक्ष्य' : 'Verified Evidence'}</h4>
                <p className="text-sm text-text-muted">
                  {isHi ? 'आधिकारिक स्रोतों और हाल के सर्वेक्षणों से सीधे जुड़ा हुआ।' : 'Directly linked to official sources and recent surveys.'}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-soft-amber flex items-center justify-center flex-shrink-0 mt-1">
                <Search size={20} className="text-warning" />
              </div>
              <div>
                <h4 className="font-medium text-text mb-1">{isHi ? 'पारदर्शी डेटा स्रोत' : 'Transparent Sources'}</h4>
                <p className="text-sm text-text-muted">
                  {isHi ? 'हर संख्या का एक उद्धरण होता है जिसे आप देख सकते हैं।' : 'Every number has a citation you can inspect.'}
                </p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-soft-rose/30 border border-danger/20 rounded">
              <p className="text-xs text-text-muted">
                <span className="font-medium text-danger">{isHi ? 'प्रोटोटाइप नोट: ' : 'Prototype Note: '}</span>
                {isHi 
                  ? 'इस डेमो में सभी साक्ष्य निदर्शी हैं और वास्तविक प्रणाली में वास्तविक डेटाबेस से खींचे जाएंगे।' 
                  : 'All evidence in this demo is illustrative and would be drawn from actual databases in a real system.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

