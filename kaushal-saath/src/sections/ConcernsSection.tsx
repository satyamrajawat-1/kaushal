import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { concerns } from '../data/concerns';
import { trades } from '../data/trades';
import * as LucideIcons from 'lucide-react';

export default function ConcernsSection() {
  const { session, toggleConcern, setTrade, setStatus } = useFamilySession();
  const isHi = session.language === 'hi';

  const handleContinue = () => {
    setStatus('counselling');
    const el = document.querySelector('#counselling');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName];
    return Icon ? <Icon size={22} className="text-primary" /> : null;
  };

  return (
    <Section id="concerns">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            {isHi ? 'आप सबसे ज़्यादा किस बारे में चिंतित हैं?' : 'What are you most concerned about?'}
          </h2>
          <p className="text-text-muted text-lg">
            {isHi ? 'अपनी प्रमुख चिंताएं चुनें।' : 'Select your primary concerns.'}
          </p>
        </div>

        {/* Concern Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {concerns.map((c) => {
            const isSelected = session.selectedConcerns.includes(c.id);
            return (
              <Card
                key={c.id}
                onClick={() => toggleConcern(c.id)}
                selected={isSelected}
                className="p-5 text-center"
              >
                <div className={`w-11 h-11 mx-auto mb-3 rounded-full flex items-center justify-center ${isSelected ? 'bg-primary/10' : 'bg-sage'}`}>
                  {getIcon(c.icon)}
                </div>
                <h4 className="font-medium text-sm text-text mb-1">{isHi ? c.nameHi : c.name}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{isHi ? c.descriptionHi : c.description}</p>
              </Card>
            );
          })}
        </div>

        {session.selectedConcerns.length > 0 && (
          <div className="text-center text-sm text-text-muted mb-6">
            {session.selectedConcerns.length} {isHi ? 'चिंताएं चुनी गईं' : 'concerns selected'}
          </div>
        )}

        {/* Trade Selection */}
        <div className="mb-8">
          <h3 className="font-editorial text-xl text-text mb-4 text-center">
            {isHi ? 'कौन सा ट्रेड रुचिकर है?' : 'Which trade are you interested in?'}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {trades.map((t) => (
              <Card
                key={t.id}
                onClick={() => setTrade(t.id)}
                selected={session.selectedTradeId === t.id}
                className="p-4"
              >
                <h4 className="font-medium text-sm mb-1">{isHi ? t.nameHi : t.name}</h4>
                <p className="text-xs text-text-muted">NSQF {t.nsqfLevel} · {t.duration}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={session.selectedConcerns.length === 0 || !session.selectedTradeId}
          >
            {isHi ? 'परामर्श शुरू करें →' : 'Start Counselling →'}
          </Button>
        </div>
      </div>
    </Section>
  );
}

