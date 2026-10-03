import { useFamilySession } from '../hooks/useFamilySession';
import { useMockApi } from '../hooks/useMockApi';
import { getCounsellingCases } from '../services/mockApi';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { BadgeAlert, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function CounsellorWorkspaceSection() {
  const { session, demoRole } = useFamilySession();
  const isHi = session.language === 'hi';
  const { data: cases } = useMockApi(getCounsellingCases);

  if (demoRole === 'family') return null;

  return (
    <Section id="counsellor-workspace" background="cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 border-b border-border pb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-editorial text-3xl sm:text-4xl text-text">
              {isHi ? 'काउंसलर कार्यक्षेत्र' : 'Counsellor Workspace'}
            </h2>
            <span className="text-xs px-2 py-1 bg-soft-amber text-warning border border-warning/20 rounded font-medium">
              {isHi ? 'केवल काउंसलर दृश्य' : 'Counsellor View Only'}
            </span>
          </div>
          <p className="text-text-muted text-lg max-w-3xl">
            {isHi 
              ? 'मानव परामर्शदाता एस्केलेटेड पारिवारिक मामलों की समीक्षा कर सकते हैं, संपूर्ण एआई संदर्भ देख सकते हैं, और अनुत्तरित चिंताओं को सीधे संबोधित कर सकते हैं।' 
              : 'Human counsellors can review escalated family cases, see full AI context, and directly address unanswered concerns.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-muted mb-4">
              {isHi ? 'सक्रिय एस्केलेशन' : 'Active Escalations'}
            </h3>
            {cases?.map(c => (
              <Card 
                key={c.id} 
                className="p-4 border-l-4" 
                style={{ borderLeftColor: c.status === 'active' ? 'var(--color-primary)' : c.status === 'pending' ? 'var(--color-warning)' : 'var(--color-success)' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-text">{c.sessionId}</span>
                  {c.status === 'active' && <BadgeAlert size={14} className="text-primary" />}
                  {c.status === 'pending' && <Clock size={14} className="text-warning" />}
                  {c.status === 'resolved' && <CheckCircle2 size={14} className="text-success" />}
                </div>
                <p className="font-medium text-sm text-text mb-1">{c.trade}</p>
                <p className="text-xs text-text-muted mb-3">{c.location}</p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] px-1.5 py-0.5 bg-cream border border-border rounded">
                    {c.primaryConcern}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border border-border p-6 rounded">
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-border">
                <div>
                  <h3 className="font-editorial text-2xl text-primary mb-1">FAM-2025-0042</h3>
                  <p className="text-sm text-text-muted">Electrician • Jaipur, Rajasthan</p>
                </div>
                <div className="text-right">
                  <span className="text-xs px-2 py-1 bg-sage text-primary font-medium rounded">
                    Active Escalation
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-2">Family Context</h4>
                  <p className="text-sm text-text bg-cream p-3 rounded">
                    Learner age 18, father is a shopkeeper. Family income ₹15,000/month. Interested in electrical work but family worried about earnings.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-2">AI Conversation Summary</h4>
                  <p className="text-sm text-text bg-cream p-3 rounded">
                    Parent asked about post-training earnings. Evidence shown for Rajasthan electrician income range. Parent still concerned about initial low income during apprenticeship.
                  </p>
                </div>

                <div className="bg-soft-amber border border-warning/20 p-4 rounded">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-warning mb-2 flex items-center gap-1">
                    <AlertCircle size={14} /> Unresolved Question
                  </h4>
                  <p className="text-sm font-medium text-text">
                    "Is there financial support available during the apprenticeship period?"
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex justify-end gap-3">
                  <Button variant="outline" size="sm">Mark Resolved</Button>
                  <Button size="sm">Call Family</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

