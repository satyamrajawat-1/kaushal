import { useFamilySession } from '../hooks/useFamilySession';
import { useMockApi } from '../hooks/useMockApi';
import { 
  getAdminAnalytics, 
  getDistrictInsights, 
  getTradeInsights,
  getConcernShift
} from '../services/mockApi';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Activity, TrendingDown, Users, AlertTriangle } from 'lucide-react';

export default function AdminInsightsSection() {
  const { session, demoRole } = useFamilySession();
  const isHi = session.language === 'hi';
  
  const { data: summary } = useMockApi(getAdminAnalytics);
  const { data: districtData } = useMockApi(getDistrictInsights);
  const { data: tradeData } = useMockApi(getTradeInsights);
  const { data: shiftData } = useMockApi(getConcernShift);

  if (demoRole !== 'admin') return null;

  return (
    <Section id="admin-insights" background="cream">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 border-b border-border pb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-editorial text-3xl sm:text-4xl text-text">
              {isHi ? 'प्रणाली अंतर्दृष्टि' : 'System Insights'}
            </h2>
            <span className="text-xs px-2 py-1 bg-soft-blue text-primary-light border border-soft-blue rounded font-medium">
              {isHi ? 'केवल व्यवस्थापक दृश्य' : 'Admin View Only'}
            </span>
          </div>
          <p className="text-text-muted text-lg max-w-3xl">
            {isHi 
              ? 'देखें कि परिवार किन चिंताओं का सामना कर रहे हैं, कहां साक्ष्य का अभाव है, और किन क्षेत्रों में अधिक मानव परामर्शदाताओं की आवश्यकता है।' 
              : 'See what concerns families are facing, where evidence is lacking, and which regions need more human counsellors.'}
          </p>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Card className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <Users size={18} className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-text-muted">Total Counselled</span>
            </div>
            <p className="font-editorial text-3xl text-text">{summary?.familiesCounselled || 0}</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <Activity size={18} className="text-success" />
              <span className="text-xs font-medium uppercase tracking-wider text-text-muted">AI Resolved</span>
            </div>
            <p className="font-editorial text-3xl text-text">{summary?.sessionsResolved || 0}</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown size={18} className="text-warning" />
              <span className="text-xs font-medium uppercase tracking-wider text-text-muted">Human Escalated</span>
            </div>
            <p className="font-editorial text-3xl text-text">{summary?.humanEscalations || 0}</p>
          </Card>
          <Card className="p-5 bg-soft-rose/30">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle size={18} className="text-danger" />
              <span className="text-xs font-medium uppercase tracking-wider text-text-muted">Unresolved</span>
            </div>
            <p className="font-editorial text-3xl text-danger">{summary?.unresolvedConcerns || 0}</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Chart */}
          <div className="bg-white border border-border p-6 rounded">
            <h3 className="font-editorial text-xl text-primary mb-6">Concern Resolution (Before/After AI)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={shiftData || []} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFE3C5" />
                  <XAxis dataKey="concern" tick={{ fontSize: 10 }} interval={0} angle={-45} textAnchor="end" height={60} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#FAF8F1', borderColor: '#CFC8B8', fontSize: '12px' }} />
                  <Bar dataKey="before" name="Initial Concern" fill="#CFC8B8" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="after" name="Still Concerned" fill="#173F35" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-text-muted text-center mt-4">
              Shows how many families entered with a concern vs how many left with it unresolved.
            </p>
          </div>

          {/* Tables */}
          <div className="space-y-6">
            <div className="bg-white border border-border rounded overflow-hidden">
              <div className="p-4 border-b border-border bg-cream-light">
                <h3 className="font-editorial text-lg text-primary">District Escalation Hotspots</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-text-muted bg-cream uppercase">
                    <tr>
                      <th className="px-4 py-3 font-medium">District</th>
                      <th className="px-4 py-3 font-medium">Top Concern</th>
                      <th className="px-4 py-3 font-medium text-right">Escalation %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districtData?.slice(0, 4).map(d => (
                      <tr key={d.district} className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium">{d.district}</td>
                        <td className="px-4 py-3 text-text-muted">{d.topConcern}</td>
                        <td className="px-4 py-3 text-right">
                          <span className={`px-2 py-0.5 rounded text-xs ${d.escalationRate > 15 ? 'bg-soft-rose text-danger' : 'bg-sage text-primary'}`}>
                            {d.escalationRate}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-border rounded overflow-hidden">
              <div className="p-4 border-b border-border bg-cream-light">
                <h3 className="font-editorial text-lg text-primary">Trade Evidence Gaps</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-text-muted bg-cream uppercase">
                    <tr>
                      <th className="px-4 py-3 font-medium">Trade</th>
                      <th className="px-4 py-3 font-medium">Evidence Quality</th>
                      <th className="px-4 py-3 font-medium">Primary Block</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradeData?.slice(0, 3).map(t => (
                      <tr key={t.trade} className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium">{t.trade}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-0.5 rounded ${t.evidenceAvailability === 'High' ? 'bg-sage text-primary' : t.evidenceAvailability === 'Medium' ? 'bg-soft-amber text-warning' : 'bg-soft-rose text-danger'}`}>
                            {t.evidenceAvailability}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-text-muted">{t.primaryConcern}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

