import { useFamilySession } from '../hooks/useFamilySession';
import { useMockApi } from '../hooks/useMockApi';
import { getCareerPath } from '../services/mockApi';
import Section from '../components/common/Section';
import { ArrowDown } from 'lucide-react';

export default function CareerPathSection() {
  const { session } = useFamilySession();
  const isHi = session.language === 'hi';
  
  const tradeId = session.selectedTradeId || 'electrician';
  const { data: pathNodes } = useMockApi(() => getCareerPath(tradeId), [tradeId]);

  return (
    <Section id="career-path" background="cream-light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            {isHi ? 'यह करियर कहां ले जा सकता है?' : 'Where can this career lead?'}
          </h2>
          <p className="text-text-muted text-lg">
            {isHi ? 'प्रशिक्षण से लेकर विशेषज्ञता तक संभावित प्रगति।' : 'Potential progression from training to specialization.'}
          </p>
        </div>

        {/* Path Visualization */}
        <div className="relative pl-6 sm:pl-12 py-4">
          <div className="absolute top-0 bottom-0 left-[35px] sm:left-[67px] w-px bg-border z-0" />
          
          <div className="space-y-8 relative z-10">
            {pathNodes?.map((node, index) => (
              <div key={node.id} className="relative">
                <div className="absolute -left-6 sm:-left-12 top-4 w-6 h-6 rounded-full border-4 border-cream-light bg-primary flex items-center justify-center transform -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-cream-light rounded-full" />
                </div>
                
                <div className={`bg-cream border border-border p-5 rounded ${node.isOptional ? 'border-dashed border-border/70' : ''}`}>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {isHi ? node.stageHi : node.stage}
                    </span>
                    {(node.duration || node.nsqfLevel) && (
                      <div className="flex gap-2">
                        {node.duration && <span className="text-[10px] px-2 py-0.5 bg-cream-light border border-border rounded">{node.duration}</span>}
                        {node.nsqfLevel && <span className="text-[10px] px-2 py-0.5 bg-soft-blue text-primary border border-soft-blue rounded">NSQF {node.nsqfLevel}</span>}
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-editorial text-xl text-primary mb-2">
                    {isHi ? node.titleHi : node.title}
                  </h4>
                  
                  <p className="text-sm text-text-muted">
                    {isHi ? node.descriptionHi : node.description}
                  </p>
                </div>

                {index < pathNodes.length - 1 && (
                  <div className="absolute -bottom-6 left-0 flex items-center justify-center text-text-muted/50 -translate-x-[22px] sm:-translate-x-[42px] bg-cream-light z-20 w-8 h-8">
                    <ArrowDown size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-text-muted">
          {isHi 
            ? 'प्रगति की गारंटी नहीं है और यह व्यक्तिगत प्रदर्शन और अवसरों पर निर्भर करती है।' 
            : 'Progression is not guaranteed and depends on individual performance and opportunities.'}
        </div>
      </div>
    </Section>
  );
}

