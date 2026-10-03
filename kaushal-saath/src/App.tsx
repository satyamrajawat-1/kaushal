import { useFamilySession } from './hooks/useFamilySession';
import Navbar from './components/navbar/Navbar';
import EvidenceDrawer from './components/counselling/EvidenceDrawer';
import HeroSection from './sections/HeroSection';
import WhyFamilySection from './sections/WhyFamilySection';
import HowItWorksSection from './sections/HowItWorksSection';
import FamilyContextSection from './sections/FamilyContextSection';
import ConcernsSection from './sections/ConcernsSection';
import CounsellingSection from './sections/CounsellingSection';
import EvidenceSection from './sections/EvidenceSection';
import CareerPathSection from './sections/CareerPathSection';
import WhatIfSection from './sections/WhatIfSection';
import CounsellorSection from './sections/CounsellorSection';
import FamilyPlanSection from './sections/FamilyPlanSection';
import CareersSection from './sections/CareersSection';
import CounsellorWorkspaceSection from './sections/CounsellorWorkspaceSection';
import AdminInsightsSection from './sections/AdminInsightsSection';
import MultilingualSection from './sections/MultilingualSection';
import PrivacySection from './sections/PrivacySection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './components/common/Footer';

function App() {
  const { isSimpleMode } = useFamilySession();

  return (
    <div className={`min-h-screen ${isSimpleMode ? 'simple-mode' : ''}`}>
      <Navbar />
      <main>
        <HeroSection />
        <WhyFamilySection />
        <HowItWorksSection />
        <FamilyContextSection />
        <ConcernsSection />
        <CounsellingSection />
        <EvidenceSection />
        <CareerPathSection />
        <WhatIfSection />
        <CounsellorSection />
        <FamilyPlanSection />
        <CareersSection />
        <CounsellorWorkspaceSection />
        <AdminInsightsSection />
        <MultilingualSection />
        <PrivacySection />
        <FinalCTASection />
      </main>
      <Footer />
      <EvidenceDrawer />
    </div>
  );
}

export default App;
