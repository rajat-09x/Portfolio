// components/Divider.tsx
export default function Divider({
    className = '',
    opacity = 'via-slate-400/40 dark:via-white/20',
    thickness = 'h-px',
  }: {
    className?: string;
    opacity?: string;   // tweak intensity
    thickness?: string; // e.g. 'h-px', 'h-[2px]'
  }) {
    return (
      <div
        className={`w-full ${thickness} bg-gradient-to-r from-transparent ${opacity} to-transparent ${className}`}
      />
    );
  }
  