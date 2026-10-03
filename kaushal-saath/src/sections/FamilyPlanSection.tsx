import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { trades } from '../data/trades';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export default function FamilyPlanSection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';
  
  const trade = trades.find(t => t.id === session.selectedTradeId);

  return (
    <Section id="family-plan" background="cream-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            {isHi ? 'पारिवारिक करियर योजना' : 'The Family Career Plan'}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {isHi 
              ? 'चर्चा की गई हर चीज़ का सारांश एक ऐसे दस्तावेज़ में जो परिवार साझा और संदर्भ ले सकता है।' 
              : 'A summary of everything discussed in a document the family can share and reference.'}
          </p>
        </div>

        <div className="bg-white border border-border shadow-sm p-8 lg:p-12 max-w-3xl mx-auto relative overflow-hidden">
          {/* Decorative stamp */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-[4px] border-danger/10 rounded-full flex items-center justify-center transform rotate-12 pointer-events-none">
            <span className="text-danger/20 font-bold uppercase tracking-widest text-lg">DRAFT</span>
          </div>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
            <FileText size={24} className="text-primary" />
            <div>
              <h3 className="font-editorial text-2xl text-text">{isHi ? 'कौशल साथ सारांश' : 'Kaushal Saath Summary'}</h3>
              <p className="text-xs text-text-muted">ID: {session.id} • {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
                {isHi ? 'शिक्षार्थी प्रोफ़ाइल' : 'Learner Profile'}
              </h4>
              <ul className="space-y-2 text-sm text-text">
                <li><span className="text-text-muted w-24 inline-block">{isHi ? 'शिक्षा:' : 'Education:'}</span> {session.learner.education}</li>
                <li><span className="text-text-muted w-24 inline-block">{isHi ? 'लक्ष्य:' : 'Goal:'}</span> {session.learner.careerGoal || 'Not specified'}</li>
                <li><span className="text-text-muted w-24 inline-block">{isHi ? 'स्थान:' : 'Location:'}</span> {session.location.district || session.location.state || 'Not set'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
                {isHi ? 'पारिवारिक संदर्भ' : 'Family Context'}
              </h4>
              <ul className="space-y-2 text-sm text-text">
                <li><span className="text-text-muted w-24 inline-block">{isHi ? 'आय:' : 'Income:'}</span> {session.family.householdIncomeBracket}</li>
                <li><span className="text-text-muted w-24 inline-block">{isHi ? 'प्रवास:' : 'Migration:'}</span> {session.family.migrationPreference}</li>
              </ul>
            </div>
          </div>

          <div className="bg-cream p-4 border border-border rounded mb-8">
            <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
              {isHi ? 'अन्वेषित करियर पथ' : 'Explored Career Path'}
            </h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-text mb-1">{trade ? (isHi ? trade.nameHi : trade.name) : (isHi ? 'कोई ट्रेड नहीं चुना गया' : 'No trade selected')}</p>
                <p className="text-xs text-text-muted">{trade ? `NSQF ${trade.nsqfLevel} • ${trade.duration}` : ''}</p>
              </div>
              <CheckCircle2 size={24} className="text-success" />
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <Download size={16} /> {isHi ? 'पीडीएफ डाउनलोड करें' : 'Download PDF Plan'}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

