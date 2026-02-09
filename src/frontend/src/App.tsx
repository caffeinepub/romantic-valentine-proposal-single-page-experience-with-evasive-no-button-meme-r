import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LetterModal } from '@/components/LetterModal';
import { useEvasiveButton } from '@/hooks/useEvasiveButton';

type AppState = 'question' | 'celebration';

function App() {
  const [appState, setAppState] = useState<AppState>('question');
  const [showLetter, setShowLetter] = useState(false);
  const { position, containerRef, handlePointerEnter, handlePointerDown } = useEvasiveButton();

  const handleYesClick = () => {
    setAppState('celebration');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romantic-light animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {appState === 'question' && (
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-romantic-medium">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <Heart className="w-20 h-20 text-romantic-dark animate-pulse" fill="currentColor" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-romantic-dark">
                Will you be my Valentine zia?
              </h1>

              <div ref={containerRef} className="relative min-h-[200px] flex items-center justify-center gap-6 pt-8">
                <Button
                  onClick={handleYesClick}
                  size="lg"
                  className="bg-romantic-dark hover:bg-romantic-darker text-white text-2xl md:text-3xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-bold"
                >
                  Yes! 💖
                </Button>

                <Button
                  onPointerEnter={handlePointerEnter}
                  onPointerDown={handlePointerDown}
                  onTouchStart={handlePointerDown}
                  size="lg"
                  variant="outline"
                  className="absolute border-romantic-medium text-romantic-medium hover:bg-romantic-light/20 text-xl md:text-2xl px-10 py-6 rounded-full transition-all duration-200"
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        )}

        {appState === 'celebration' && (
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-romantic-medium">
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-2">
                <Heart className="w-12 h-12 text-romantic-dark animate-bounce" fill="currentColor" />
                <Heart className="w-12 h-12 text-romantic-dark animate-bounce delay-100" fill="currentColor" />
                <Heart className="w-12 h-12 text-romantic-dark animate-bounce delay-200" fill="currentColor" />
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-romantic-dark leading-tight">
                YAYYAYYY I KNEW YOU'D SAY YES ILOVEYOUSMM
              </h1>

              <div className="pt-6">
                <Button
                  onClick={() => setShowLetter(true)}
                  size="lg"
                  className="bg-romantic-dark hover:bg-romantic-darker text-white text-xl md:text-2xl px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Open Letter 💌
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <LetterModal open={showLetter} onOpenChange={setShowLetter} />

      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-romantic-medium/70">
        <p>
          © {new Date().getFullYear()} • Built with{' '}
          <Heart className="inline w-4 h-4 text-romantic-dark" fill="currentColor" />{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-romantic-dark transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
