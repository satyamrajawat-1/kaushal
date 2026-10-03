import { useState } from 'react';
import { useFamilySession } from '../hooks/useFamilySession';
import { useMockApi } from '../hooks/useMockApi';
import { getScenarios } from '../services/mockApi';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function WhatIfSection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';
  
  const tradeId = session.selectedTradeId || 'electrician';
  const { data: scenarios } = useMockApi(() => getScenarios(tradeId), [tradeId]);
  
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);

  const activeScenario = scenarios?.find(s => s.id === activeScenarioId);

  return (
    <Section id="what-if" background="cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            {isHi ? 'अगर चीजें योजना के अनुसार न हों तो क्या होगा?' : 'What if things don\'t go as planned?'}
          </h2>
          <p className="text-text-muted text-lg">
            {isHi ? 'यथार्थवादी परिदृश्यों और वैकल्पिक मार्गों का अन्वेषण करें।' : 'Explore realistic scenarios and alternative pathways.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            {scenarios?.map((s) => (
              <Card 
                key={s.id} 
                className="p-4 flex items-center justify-between"
                onClick={() => setActiveScenarioId(s.id)}
                selected={activeScenarioId === s.id}
                hoverable
              >
                <span className="font-medium text-sm text-text">
                  {isHi ? s.questionHi : s.question}
                </span>
                <ArrowRight size={16} className={activeScenarioId === s.id ? 'text-primary' : 'text-text-muted'} />
              </Card>
            ))}
          </div>

          <div className="lg:col-span-7">
            {activeScenario ? (
              <div className="bg-cream-light border border-border p-6 lg:p-8 rounded animate-fade-in">
                <h3 className="font-editorial text-2xl text-primary mb-2">
                  {isHi ? activeScenario.questionHi : activeScenario.question}
                </h3>
                <p className="text-text-muted text-sm mb-8">
                  {isHi ? activeScenario.descriptionHi : activeScenario.description}
                </p>

                <div className="space-y-4">
                  {activeScenario.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage flex items-center justify-center text-primary text-xs font-medium border border-primary/10">
                        {index + 1}
                      </div>
                      <div className="pb-4">
                        <h4 className="font-medium text-text text-sm mb-1">{isHi ? step.titleHi : step.title}</h4>
                        <p className="text-sm text-text-muted">{isHi ? step.descriptionHi : step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-cream-light border border-border border-dashed h-full min-h-[300px] flex flex-col items-center justify-center text-text-muted p-8 text-center">
                <HelpCircle size={48} className="mb-4 opacity-20" />
                <p>{isHi ? 'वैकल्पिक रास्ते देखने के लिए बाईं ओर से एक परिदृश्य चुनें।' : 'Select a scenario from the left to see alternative pathways.'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

