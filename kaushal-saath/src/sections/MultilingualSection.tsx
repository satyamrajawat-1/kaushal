import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import { Languages, Volume2, Mic, Accessibility } from 'lucide-react';

export default function MultilingualSection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';

  const features = [
    {
      icon: Languages,
      title: isHi ? 'बहुभाषी UI' : 'Multilingual UI',
      desc: isHi ? 'अंग्रेजी और क्षेत्रीय भाषाओं के बीच निर्बाध रूप से स्विच करें।' : 'Switch seamlessly between English and regional languages.'
    },
    {
      icon: Volume2,
      title: isHi ? 'आवाज प्रतिक्रिया' : 'Voice Feedback',
      desc: isHi ? 'परामर्शदाता प्रतिक्रियाओं को ज़ोर से सुना जा सकता है।' : 'Counsellor responses can be read aloud.'
    },
    {
      icon: Mic,
      title: isHi ? 'आवाज इनपुट' : 'Voice Input',
      desc: isHi ? 'टाइप करने के बजाय अपनी भाषा में सवाल पूछें।' : 'Ask questions in your language instead of typing.'
    },
    {
      icon: Accessibility,
      title: isHi ? 'सरल मोड' : 'Simple Mode',
      desc: isHi ? 'कम साक्षरता वाले उपयोगकर्ताओं के लिए बड़े पाठ और सरल लेआउट।' : 'Larger text and simpler layouts for low literacy users.'
    }
  ];

  return (
    <Section id="accessibility" background="cream-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl text-text mb-4">
            {isHi ? 'हर परिवार के लिए सुलभ' : 'Accessible for every family'}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {isHi 
              ? 'भाषा या साक्षरता कभी भी करियर मार्गदर्शन में बाधा नहीं बननी चाहिए।' 
              : 'Language or literacy should never be a barrier to career guidance.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 p-6 bg-cream border border-border rounded">
              <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                <f.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-text mb-1">{f.title}</h3>
                <p className="text-sm text-text-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

