import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Heart } from 'lucide-react';
import { valentineLetter } from '@/content/valentineLetter';

interface LetterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LetterModal({ open, onOpenChange }: LetterModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] bg-gradient-to-br from-white to-romantic-light/30 border-4 border-romantic-medium">
        <DialogHeader>
          <DialogTitle className="text-3xl md:text-4xl font-bold text-romantic-dark text-center flex items-center justify-center gap-3">
            <Heart className="w-8 h-8" fill="currentColor" />
            A Letter For You
            <Heart className="w-8 h-8" fill="currentColor" />
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 p-6">
            {valentineLetter.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              )
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
