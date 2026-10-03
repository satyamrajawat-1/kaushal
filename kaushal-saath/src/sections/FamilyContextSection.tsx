import { useFamilySession } from '../hooks/useFamilySession';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { indianStates, stateDistricts } from '../utils/location';

export default function FamilyContextSection() {
  const { session, updateLearner, updateFamily, updateLocation, setStatus } = useFamilySession();
  const isHi = session.language === 'hi';

  const handleContinue = () => {
    setStatus('concerns');
    const el = document.querySelector('#concerns');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const inputClass = 'w-full px-3 py-2.5 bg-cream border border-border rounded text-sm text-text focus:outline-none focus:border-primary transition-colors';
  const labelClass = 'block text-xs font-medium text-text-muted uppercase tracking-wider mb-1.5';
  const districts = stateDistricts[session.location.state] || [];

  return (
    <Section id="family-context" background="cream-light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            {isHi ? 'अपने परिवार के संदर्भ से शुरू करें।' : 'Start with your family\'s context.'}
          </h2>
          <p className="text-text-muted text-lg">
            {isHi
              ? '"हम केवल वही पूछते हैं जो मार्गदर्शन को प्रासंगिक बनाने के लिए आवश्यक है।"'
              : '"We only ask what is needed to make the guidance relevant."'}
          </p>
        </div>

        <div className="bg-cream-light border border-border p-6 lg:p-8 space-y-8">
          {/* Learner */}
          <div>
            <h3 className="font-editorial text-xl text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {isHi ? 'शिक्षार्थी' : 'Learner'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>{isHi ? 'शिक्षा' : 'Education'}</label>
                <select
                  value={session.learner.education}
                  onChange={(e) => updateLearner({ education: e.target.value })}
                  className={inputClass}
                  aria-label="Education level"
                >
                  <option>8th Pass</option>
                  <option>10th Pass</option>
                  <option>12th Pass</option>
                  <option>ITI Certificate</option>
                  <option>Diploma</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>{isHi ? 'करियर लक्ष्य' : 'Career Goal'}</label>
                <input
                  type="text"
                  value={session.learner.careerGoal}
                  onChange={(e) => updateLearner({ careerGoal: e.target.value })}
                  placeholder={isHi ? 'उदा: इलेक्ट्रीशियन बनना' : 'e.g. Become an electrician'}
                  className={inputClass}
                  aria-label="Career goal"
                />
              </div>
            </div>
          </div>

          {/* Family */}
          <div>
            <h3 className="font-editorial text-xl text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {isHi ? 'परिवार' : 'Family'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>{isHi ? 'घरेलू आय वर्ग' : 'Household Income Bracket'}</label>
                <select
                  value={session.family.householdIncomeBracket}
                  onChange={(e) => updateFamily({ householdIncomeBracket: e.target.value })}
                  className={inputClass}
                  aria-label="Household income bracket"
                >
                  <option>Below ₹10,000</option>
                  <option>₹10,000 – ₹20,000</option>
                  <option>₹20,000 – ₹40,000</option>
                  <option>₹40,000 – ₹60,000</option>
                  <option>Above ₹60,000</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>{isHi ? 'यात्रा दूरी वरीयता' : 'Preferred Travel Distance'}</label>
                <select
                  value={session.family.preferredTravelDistance}
                  onChange={(e) => updateFamily({ preferredTravelDistance: e.target.value })}
                  className={inputClass}
                  aria-label="Travel distance preference"
                >
                  <option>Within District</option>
                  <option>Within State</option>
                  <option>Anywhere in India</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>{isHi ? 'प्रवास वरीयता' : 'Migration Preference'}</label>
                <select
                  value={session.family.migrationPreference}
                  onChange={(e) => updateFamily({ migrationPreference: e.target.value })}
                  className={inputClass}
                  aria-label="Migration preference"
                >
                  <option>Prefer local</option>
                  <option>Open to nearby districts</option>
                  <option>Open to migration</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-editorial text-xl text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {isHi ? 'स्थान' : 'Location'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>{isHi ? 'राज्य' : 'State'}</label>
                <select
                  value={session.location.state}
                  onChange={(e) => updateLocation({ state: e.target.value, district: '' })}
                  className={inputClass}
                  aria-label="State"
                >
                  <option value="">{isHi ? 'राज्य चुनें' : 'Select State'}</option>
                  {indianStates.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>{isHi ? 'जिला' : 'District'}</label>
                <select
                  value={session.location.district}
                  onChange={(e) => updateLocation({ district: e.target.value })}
                  className={inputClass}
                  aria-label="District"
                  disabled={!session.location.state}
                >
                  <option value="">{isHi ? 'जिला चुनें' : 'Select District'}</option>
                  {districts.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button size="lg" onClick={handleContinue} className="w-full sm:w-auto">
              {isHi ? 'जारी रखें →' : 'Continue →'}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

