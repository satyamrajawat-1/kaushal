import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import { Shield, Lock, EyeOff } from 'lucide-react';

export default function PrivacySection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';

  return (
    <Section id="privacy" background="cream">
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary text-cream-light p-8 lg:p-12 rounded-lg relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 opacity-10">
            <Shield size={240} />
          </div>

          <div className="relative z-10">
            <h2 className="font-editorial text-3xl sm:text-4xl mb-4">
              {isHi ? 'डेटा गोपनीयता और सुरक्षा' : 'Data Privacy & Security'}
            </h2>
            <p className="text-sage text-lg mb-8 max-w-2xl">
              {isHi 
                ? 'पारिवारिक संदर्भ संवेदनशील है। हम इसे इसी तरह से व्यवहार करते हैं।' 
                : 'Family context is sensitive. We treat it that way.'}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <EyeOff size={24} className="text-sage mb-3" />
                <h3 className="font-medium mb-2">{isHi ? 'कोई व्यक्तिगत डेटा नहीं' : 'No PII Required'}</h3>
                <p className="text-sm text-sage/80 leading-relaxed">
                  {isHi 
                    ? 'परामर्श शुरू करने के लिए नाम या फोन नंबर की आवश्यकता नहीं है।' 
                    : 'Names or phone numbers are not required to start counselling.'}
                </p>
              </div>
              <div>
                <Lock size={24} className="text-sage mb-3" />
                <h3 className="font-medium mb-2">{isHi ? 'स्थानीय प्रसंस्करण' : 'Local Processing'}</h3>
                <p className="text-sm text-sage/80 leading-relaxed">
                  {isHi 
                    ? 'डेटा का उपयोग केवल प्रासंगिक साक्ष्य प्राप्त करने और संदर्भ प्रदान करने के लिए किया जाता है।' 
                    : 'Data is only used to retrieve relevant evidence and provide context.'}
                </p>
              </div>
              <div>
                <Shield size={24} className="text-sage mb-3" />
                <h3 className="font-medium mb-2">{isHi ? 'सुरक्षित एस्केलेशन' : 'Secure Escalation'}</h3>
                <p className="text-sm text-sage/80 leading-relaxed">
                  {isHi 
                    ? 'मानव परामर्शदाता के अनुरोध पर ही संपर्क विवरण एकत्र किए जाते हैं।' 
                    : 'Contact details are only collected upon explicit request for a human counsellor.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

