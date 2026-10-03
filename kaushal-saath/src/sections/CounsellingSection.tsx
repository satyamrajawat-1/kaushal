import { useState, useRef, useEffect } from 'react';
import { useFamilySession } from '../hooks/useFamilySession';
import { useCounselling } from '../hooks/useCounselling';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { ConfidenceBadge } from '../components/common/Badge';
import { trades } from '../data/trades';
import { evidenceRecords } from '../data/outcomes';
import { concerns } from '../data/concerns';
import { Send, Mic, User, Users, Bot, ArrowRight } from 'lucide-react';

export default function CounsellingSection() {
  const { session, setEvidenceDrawer } = useFamilySession();
  const { messages, isLoading, send } = useCounselling();
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isHi = session.language === 'hi';

  const trade = trades.find((t) => t.id === session.selectedTradeId);
  const tradeEvidence = evidenceRecords.filter((e) => e.tradeId === session.selectedTradeId);
  const selectedConcernNames = concerns
    .filter((c) => session.selectedConcerns.includes(c.id))
    .map((c) => (isHi ? c.nameHi : c.name));

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    send(input);
    setInput('');
  };

  const handleVoice = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      const voiceText = 'Papa ko job security ke baare mein jaana hai.';
      setInput(voiceText);
    }, 2000);
  };

  const suggestedQuestions = isHi
    ? ['नौकरी की सुरक्षा कैसी है?', 'आगे करियर ग्रोथ क्या है?', 'अगर लोकल जॉब न मिले तो?', 'क्या आगे पढ़ाई कर सकते हैं?']
    : ['Job security kaisi hai?', 'Aage career growth kya hai?', 'Agar local job na mile toh?', 'Kya further study kar sakte hain?'];

  const scrollToEvidence = () => {
    const el = document.querySelector('#evidence');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="counselling" background="cream-light">
      <div className="mb-8">
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
          {isHi ? 'पारिवारिक परामर्श' : 'Family Counselling'}
        </h2>
        {trade && (
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
            <span className="font-medium text-text">{isHi ? trade.nameHi : trade.name}</span>
            <span>·</span>
            <span>{session.location.district || session.location.state}</span>
            {selectedConcernNames.length > 0 && (
              <>
                <span>·</span>
                <span>{selectedConcernNames.join(', ')}</span>
              </>
            )}
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left — Context */}
        <div className="lg:col-span-3">
          <div className="border border-border bg-cream p-4 space-y-4 sticky top-20">
            <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted">
              {isHi ? 'पारिवारिक संदर्भ' : 'Family Context'}
            </h4>
            <div className="space-y-2 text-sm">
              <p><span className="text-text-muted">{isHi ? 'शिक्षा:' : 'Education:'}</span> {session.learner.education}</p>
              <p><span className="text-text-muted">{isHi ? 'लक्ष्य:' : 'Goal:'}</span> {session.learner.careerGoal}</p>
              <p><span className="text-text-muted">{isHi ? 'आय वर्ग:' : 'Income:'}</span> {session.family.householdIncomeBracket}</p>
              <p><span className="text-text-muted">{isHi ? 'स्थान:' : 'Location:'}</span> {session.location.district}, {session.location.state}</p>
              <p><span className="text-text-muted">{isHi ? 'प्रवास:' : 'Migration:'}</span> {session.family.migrationPreference}</p>
            </div>
            <hr className="border-border" />
            <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted">
              {isHi ? 'चिंताएं' : 'Concerns'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedConcernNames.map((n) => (
                <span key={n} className="text-xs px-2 py-0.5 bg-soft-amber border border-border rounded">{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Center — Conversation */}
        <div className="lg:col-span-5">
          <div className="border border-border bg-cream min-h-[500px] flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[500px]">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-text-muted text-sm mb-6">
                    {isHi ? 'अपना सवाल पूछें या नीचे से चुनें।' : 'Ask your question or choose from below.'}
                  </p>
                  <div className="space-y-2">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="block w-full text-left px-4 py-2.5 text-sm bg-cream-light border border-border rounded hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'system' ? '' : msg.role === 'parent' ? 'justify-end' : ''}`}>
                  {msg.role === 'system' && (
                    <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded text-sm ${
                    msg.role === 'parent' ? 'chat-bubble-parent' :
                    msg.role === 'learner' ? 'chat-bubble-learner' :
                    'chat-bubble-system'
                  }`}>
                    <p className="text-[10px] text-text-muted mb-1 flex items-center gap-1">
                      {msg.role === 'parent' && <><User size={10} /> {isHi ? 'अभिभावक' : 'Parent'}</>}
                      {msg.role === 'learner' && <><Users size={10} /> {isHi ? 'शिक्षार्थी' : 'Learner'}</>}
                      {msg.role === 'system' && (isHi ? 'कौशल साथ' : 'Kaushal Saath')}
                    </p>
                    <p>{msg.content}</p>
                    {msg.evidenceIds && msg.evidenceIds.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <button
                          onClick={scrollToEvidence}
                          className="text-xs text-primary font-medium flex items-center gap-1 bg-transparent border-none cursor-pointer hover:underline"
                        >
                          {isHi ? 'साक्ष्य देखें' : 'View Evidence'} <ArrowRight size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                  {msg.role === 'parent' && (
                    <div className="w-8 h-8 rounded-full bg-soft-amber flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-warning" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                    <Bot size={16} className="text-primary" />
                  </div>
                  <div className="chat-bubble-system p-3 rounded">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3">
              <div className="flex gap-2">
                <button
                  onClick={handleVoice}
                  className={`p-2.5 border rounded cursor-pointer transition-colors ${
                    isListening ? 'bg-danger text-cream-light border-danger' : 'bg-transparent border-border hover:bg-sage'
                  }`}
                  aria-label={isListening ? 'Listening...' : 'Speak'}
                >
                  <Mic size={18} />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                  placeholder={isListening ? (isHi ? 'सुन रहे हैं...' : 'Listening...') : (isHi ? 'अपना सवाल पूछें...' : 'Ask your question...')}
                  className="flex-1 px-3 py-2.5 bg-cream-light border border-border rounded text-sm focus:outline-none focus:border-primary"
                  aria-label="Chat input"
                />
                <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
                  <Send size={16} />
                </Button>
              </div>
              {messages.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {suggestedQuestions.slice(0, 2).map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-[11px] px-2 py-1 bg-cream-light border border-border rounded hover:border-primary/50 transition-colors cursor-pointer text-text-muted"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right — Evidence */}
        <div className="lg:col-span-4">
          <div className="space-y-4 sticky top-20">
            <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted">
              {isHi ? 'साक्ष्य' : 'Evidence'}
            </h4>
            {tradeEvidence.length > 0 ? tradeEvidence.slice(0, 3).map((ev) => (
              <div key={ev.id} className="evidence-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-text-muted font-medium">
                    {isHi ? ev.metricHi : ev.metric}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-soft-amber text-warning border border-warning/20 rounded">
                    {isHi ? 'प्रोटोटाइप' : 'Prototype Data'}
                  </span>
                </div>
                <p className="text-2xl font-editorial text-primary mb-1">{ev.value}</p>
                {ev.unit && <p className="text-xs text-text-muted mb-2">{ev.unit}</p>}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[10px] px-1.5 py-0.5 bg-cream border border-border rounded">{ev.region}</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-cream border border-border rounded">{ev.dataPeriod}</span>
                  <ConfidenceBadge confidence={ev.confidence} />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEvidenceDrawer(true, ev.id)}
                    className="text-xs text-primary font-medium bg-transparent border-none cursor-pointer hover:underline flex items-center gap-1"
                  >
                    {isHi ? 'साक्ष्य देखें' : 'View Evidence'} <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            )) : (
              <p className="text-sm text-text-muted">{isHi ? 'एक ट्रेड चुनें।' : 'Select a trade to view evidence.'}</p>
            )}
            <button
              onClick={() => { const el = document.querySelector('#career-path'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full text-center text-xs text-primary font-medium bg-transparent border border-border p-2.5 rounded cursor-pointer hover:bg-sage transition-colors flex items-center justify-center gap-1"
            >
              {isHi ? 'करियर पथ देखें' : 'See Career Path'} <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

