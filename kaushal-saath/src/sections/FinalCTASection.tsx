import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { ArrowUp } from 'lucide-react';

export default function FinalCTASection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section id="cta" background="cream-light" className="border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-editorial text-4xl sm:text-5xl text-text mb-6">
          {isHi ? 'करियर के फ़ैसले साथ मिलकर लें।' : 'Make career decisions together.'}
        </h2>
        <p className="text-text-muted text-lg mb-8">
          {isHi 
            ? 'कौशल साथ प्रोटोटाइप देखने के लिए धन्यवाद। स्मार्ट इंडिया हैकथॉन 2026 के लिए डिज़ाइन किया गया।' 
            : 'Thank you for exploring the Kaushal Saath prototype. Designed for Smart India Hackathon 2026.'}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" onClick={() => {
            const el = document.querySelector('#family-context');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            {isHi ? 'परिवार परामर्श शुरू करें' : 'Start Family Counselling'}
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToTop}>
            {isHi ? 'शीर्ष पर वापस जाएं' : 'Back to Top'} <ArrowUp size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

