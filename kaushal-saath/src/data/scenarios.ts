import type { CareerScenario } from '../types/counselling';

export const scenarios: CareerScenario[] = [
  {
    id: 'scenario-no-local-job',
    question: 'What if there is no local job?',
    questionHi: 'अगर स्थानीय नौकरी न मिले तो?',
    description: 'Explore alternative pathways if jobs are not available in the home district.',
    descriptionHi: 'यदि गृह जिले में नौकरियां उपलब्ध नहीं हैं तो वैकल्पिक रास्ते खोजें।',
    tradeId: 'electrician',
    steps: [
      { title: 'Complete Training', titleHi: 'प्रशिक्षण पूरा करें', description: 'Finish your vocational training program', descriptionHi: 'अपना व्यावसायिक प्रशिक्षण कार्यक्रम पूरा करें' },
      { title: 'Nearby District Opportunities', titleHi: 'आस-पास के जिलों में अवसर', description: 'Look for opportunities in neighboring districts with industrial activity', descriptionHi: 'औद्योगिक गतिविधि वाले पड़ोसी जिलों में अवसर तलाशें' },
      { title: 'Apprenticeship Programs', titleHi: 'शिक्षुता कार्यक्रम', description: 'Government-supported apprenticeships in state capital or industrial hubs', descriptionHi: 'राज्य की राजधानी या औद्योगिक केंद्रों में सरकार-समर्थित शिक्षुता' },
      { title: 'Alternative Related Role', titleHi: 'वैकल्पिक संबंधित भूमिका', description: 'Consider related trades that have more local demand', descriptionHi: 'उन संबंधित ट्रेडों पर विचार करें जिनकी स्थानीय मांग अधिक है' },
      { title: 'Further Qualification', titleHi: 'अतिरिक्त योग्यता', description: 'Upgrade skills through additional certifications', descriptionHi: 'अतिरिक्त प्रमाणन के माध्यम से कौशल उन्नयन करें' },
    ],
  },
  {
    id: 'scenario-migration',
    question: 'What if the learner needs to move?',
    questionHi: 'अगर शिक्षार्थी को स्थानांतरित होना पड़े तो?',
    description: 'Understand what migration involves and available support systems.',
    descriptionHi: 'समझें कि प्रवास में क्या शामिल है और उपलब्ध सहायता प्रणालियां।',
    tradeId: 'electrician',
    steps: [
      { title: 'Assess Migration Distance', titleHi: 'प्रवास दूरी का आकलन करें', description: 'Review opportunities within preferred travel distance', descriptionHi: 'पसंदीदा यात्रा दूरी के भीतर अवसरों की समीक्षा करें' },
      { title: 'Hostel & Housing Support', titleHi: 'छात्रावास और आवास सहायता', description: 'Check if training providers offer hostel facilities', descriptionHi: 'जांचें कि प्रशिक्षण प्रदाता छात्रावास सुविधाएं प्रदान करते हैं या नहीं' },
      { title: 'Stipend & Financial Aid', titleHi: 'वजीफा और वित्तीय सहायता', description: 'Government stipends and financial support during training', descriptionHi: 'प्रशिक्षण के दौरान सरकारी वजीफा और वित्तीय सहायता' },
      { title: 'Family Stay Options', titleHi: 'परिवार रहने के विकल्प', description: 'Explore whether family can relocate or visit', descriptionHi: 'पता करें कि क्या परिवार स्थानांतरित हो सकता है या आ सकता है' },
    ],
  },
  {
    id: 'scenario-further-education',
    question: 'What if we want further education?',
    questionHi: 'अगर हम आगे पढ़ाई करना चाहें तो?',
    description: 'Explore pathways from vocational training to higher education.',
    descriptionHi: 'व्यावसायिक प्रशिक्षण से उच्च शिक्षा तक के रास्ते खोजें।',
    tradeId: 'electrician',
    steps: [
      { title: 'Complete Trade Certificate', titleHi: 'ट्रेड सर्टिफिकेट पूरा करें', description: 'National Trade Certificate after ITI completion', descriptionHi: 'आईटीआई पूर्ण होने के बाद राष्ट्रीय ट्रेड सर्टिफिकेट' },
      { title: 'Diploma (Lateral Entry)', titleHi: 'डिप्लोमा (लेटरल एंट्री)', description: 'Join diploma programs through lateral entry scheme', descriptionHi: 'लेटरल एंट्री योजना के माध्यम से डिप्लोमा कार्यक्रमों में शामिल हों' },
      { title: 'B.Voc Degree', titleHi: 'बी.वोक डिग्री', description: 'Bachelor of Vocation degree programs', descriptionHi: 'बैचलर ऑफ वोकेशन डिग्री कार्यक्रम' },
      { title: 'Advanced Certification', titleHi: 'उन्नत प्रमाणन', description: 'Industry-specific advanced certifications', descriptionHi: 'उद्योग-विशिष्ट उन्नत प्रमाणन' },
    ],
  },
  {
    id: 'scenario-training-far',
    question: 'What if the training centre is far away?',
    questionHi: 'अगर प्रशिक्षण केंद्र दूर हो तो?',
    description: 'Options when the nearest training centre requires travel.',
    descriptionHi: 'जब निकटतम प्रशिक्षण केंद्र के लिए यात्रा की आवश्यकता हो तो विकल्प।',
    tradeId: 'electrician',
    steps: [
      { title: 'Check Nearby ITIs', titleHi: 'आस-पास के ITI जांचें', description: 'Search for training centres within 50km radius', descriptionHi: '50 किमी दायरे में प्रशिक्षण केंद्र खोजें' },
      { title: 'Online / Hybrid Options', titleHi: 'ऑनलाइन / हाइब्रिड विकल्प', description: 'Some theory modules may be available online', descriptionHi: 'कुछ सिद्धांत मॉड्यूल ऑनलाइन उपलब्ध हो सकते हैं' },
      { title: 'Government Transport Support', titleHi: 'सरकारी परिवहन सहायता', description: 'Check state government travel support schemes', descriptionHi: 'राज्य सरकार यात्रा सहायता योजनाओं की जांच करें' },
      { title: 'Residential Training', titleHi: 'आवासीय प्रशिक्षण', description: 'Apply for residential training programs with hostel', descriptionHi: 'छात्रावास के साथ आवासीय प्रशिक्षण कार्यक्रमों के लिए आवेदन करें' },
    ],
  },
];
