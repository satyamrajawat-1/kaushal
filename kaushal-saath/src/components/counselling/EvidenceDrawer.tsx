import { useFamilySession } from '../../hooks/useFamilySession';
import Drawer from '../common/Drawer';
import { ConfidenceBadge, SourceBadge } from '../common/Badge';
import { evidenceRecords } from '../../data/outcomes';
import { AlertCircle, Info } from 'lucide-react';
import { getVerificationLabel, getVerificationColor } from '../../utils/confidence';

export default function EvidenceDrawer() {
  const { session, evidenceDrawerOpen, setEvidenceDrawer, selectedEvidenceId } = useFamilySession();
  const isHi = session.language === 'hi';

  const ev = evidenceRecords.find(e => e.id === selectedEvidenceId);

  if (!ev) return null;

  return (
    <Drawer
      isOpen={evidenceDrawerOpen}
      onClose={() => setEvidenceDrawer(false)}
      title={isHi ? 'साक्ष्य विवरण' : 'Evidence Details'}
    >
      <div className="space-y-6">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-2">
            {isHi ? 'क्या मापा गया' : 'What was measured'}
          </h4>
          <p className="font-editorial text-2xl text-primary mb-1">
            {isHi ? ev.metricHi : ev.metric}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-medium">{ev.value}</span>
            {ev.unit && <span className="text-text-muted">{ev.unit}</span>}
          </div>
        </div>

        <hr className="border-border" />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-text-muted mb-1">{isHi ? 'स्रोत' : 'Source'}</p>
            <SourceBadge source={ev.source} />
          </div>
          <div>
            <p className="text-xs text-text-muted mb-1">{isHi ? 'क्षेत्र' : 'Region'}</p>
            <p className="text-sm font-medium">{ev.district ? `${ev.district}, ${ev.region}` : ev.region}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-1">{isHi ? 'डेटा अवधि' : 'Data Period'}</p>
            <p className="text-sm font-medium">{ev.dataPeriod}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-1">{isHi ? 'नमूना आकार' : 'Sample Size'}</p>
            <p className="text-sm font-medium">{ev.sampleSize ? ev.sampleSize : 'N/A'}</p>
          </div>
        </div>

        <hr className="border-border" />

        <div>
          <p className="text-xs text-text-muted mb-2">{isHi ? 'डेटा गुणवत्ता' : 'Data Quality'}</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">{isHi ? 'सत्यापन स्थिति' : 'Verification Status'}</span>
              <span 
                className="text-sm font-medium px-2 py-0.5 rounded"
                style={{ color: getVerificationColor(ev.verificationStatus), backgroundColor: `${getVerificationColor(ev.verificationStatus)}15` }}
              >
                {getVerificationLabel(ev.verificationStatus)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">{isHi ? 'विश्वास स्तर' : 'Confidence Level'}</span>
              <ConfidenceBadge confidence={ev.confidence} />
            </div>
          </div>
        </div>

        <div className="bg-soft-blue p-4 border border-blue-200 mt-4 rounded relative">
          <div className="flex gap-3">
            <Info size={20} className="text-primary-light flex-shrink-0" />
            <div>
              <p className="font-medium text-sm text-primary mb-1">
                {isHi ? 'मुझे यह क्यों दिख रहा है?' : 'Why am I seeing this?'}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {isHi 
                  ? 'मंच स्थानीय साक्ष्य को प्राथमिकता देता है। जब जिला-स्तरीय साक्ष्य अनुपलब्ध होता है, तो यह व्यापक राज्य या राष्ट्रीय साक्ष्य पर निर्भर करता है।'
                  : 'The platform prioritizes local evidence. When district-level evidence is unavailable, it falls back to broader state or national evidence.'}
              </p>
            </div>
          </div>
          <p className="annotation absolute -top-3 right-4 bg-cream-light px-2 border border-border text-xs">
            {isHi ? 'पारदर्शिता' : 'Transparency'}
          </p>
        </div>

        <div className="bg-soft-amber border border-warning/20 p-4 rounded text-xs text-text-muted">
          <div className="flex gap-2">
            <AlertCircle size={14} className="text-warning flex-shrink-0 mt-0.5" />
            <p>
              {isHi
                ? 'महत्वपूर्ण: ये आंकड़े केवल प्रोटोटाइप/प्रदर्शन उद्देश्यों के लिए हैं और वास्तविक सरकारी आंकड़ों का प्रतिनिधित्व नहीं करते हैं। किसी विशिष्ट वेतन या प्लेसमेंट की गारंटी नहीं है।'
                : 'IMPORTANT: These figures are for prototype/demo purposes only and do not represent actual government statistics. No specific salary or placement is guaranteed.'}
            </p>
          </div>
        </div>

      </div>
    </Drawer>
  );
}
