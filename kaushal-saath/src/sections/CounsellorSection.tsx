import { useState } from 'react';
import { useFamilySession } from '../hooks/useFamilySession';
import { useMockApi } from '../hooks/useMockApi';
import { getCounsellors } from '../services/mockApi';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Modal from '../components/common/Modal';
import { UserPlus, Clock } from 'lucide-react';

export default function CounsellorSection() {
  const { session, counsellorModalOpen, setCounsellorModal } = useFamilySession();
  const isHi = session.language === 'hi';
  const { data: counsellors } = useMockApi(getCounsellors);
  
  const [requestStatus, setRequestStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleRequest = () => {
    setRequestStatus('sending');
    setTimeout(() => {
      setRequestStatus('sent');
      setTimeout(() => {
        setCounsellorModal(false);
        setRequestStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <Section id="counsellor" background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
            <UserPlus size={28} className="text-primary" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            {isHi ? 'क्या एआई साक्ष्य पर्याप्त नहीं है?' : 'Is AI evidence not enough?'}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
            {isHi 
              ? 'जटिल पारिवारिक चिंताओं के लिए मानवीय समझ की आवश्यकता होती है। जब डेटा आपके सवालों का जवाब नहीं दे सकता, तो हम आपको एक विशेषज्ञ मानव परामर्शदाता से जोड़ते हैं।' 
              : 'Complex family concerns require human empathy. When data cannot answer your questions, we connect you to an expert human counsellor.'}
          </p>
          <Button size="lg" onClick={() => setCounsellorModal(true)}>
            {isHi ? 'मानव परामर्शदाता से बात करें' : 'Speak to a Human Counsellor'}
          </Button>
        </div>
      </Section>

      <Modal 
        isOpen={counsellorModalOpen} 
        onClose={() => setCounsellorModal(false)}
        title={isHi ? 'परामर्शदाता से जुड़ें' : 'Connect with a Counsellor'}
      >
        {requestStatus === 'sent' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={28} className="text-primary" />
            </div>
            <h4 className="font-editorial text-2xl text-primary mb-2">
              {isHi ? 'अनुरोध भेजा गया' : 'Request Sent'}
            </h4>
            <p className="text-sm text-text-muted">
              {isHi 
                ? 'एक परामर्शदाता जल्द ही आपके परिवार से संपर्क करेगा। आपका सारा संदर्भ उनके साथ साझा कर दिया गया है ताकि आपको खुद को दोहराना न पड़े।' 
                : 'A counsellor will contact your family soon. All your context has been shared with them so you don\'t have to repeat yourself.'}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-text-muted">
              {isHi 
                ? 'आपका एआई परामर्श इतिहास स्वचालित रूप से भेजा जाएगा ताकि परामर्शदाता को पता चले कि आपने पहले ही क्या चर्चा की है।' 
                : 'Your AI counselling history will be automatically forwarded so the counsellor knows exactly what you have already discussed.'}
            </p>
            
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
                {isHi ? 'उपलब्ध परामर्शदाता' : 'Available Counsellors'}
              </h4>
              <div className="space-y-3">
                {counsellors?.slice(0, 2).map(c => (
                  <Card key={c.id} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-text">{c.name}</p>
                      <p className="text-xs text-text-muted mt-0.5">{c.languages.join(', ')}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1 text-xs text-text-muted mb-1">
                        <Clock size={12} /> {c.availability.split(',')[1]}
                      </div>
                      <span className="text-[10px] px-2 py-0.5 bg-sage text-primary rounded border border-primary/20">
                        {c.specialization}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Button 
              className="w-full" 
              onClick={handleRequest}
              disabled={requestStatus === 'sending'}
            >
              {requestStatus === 'sending' 
                ? (isHi ? 'भेजा जा रहा है...' : 'Sending...') 
                : (isHi ? 'परामर्श का अनुरोध करें' : 'Request Counselling')}
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}

// Inline CheckCircle component to avoid adding more files
function CheckCircle({ size, className }: { size: number, className: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

