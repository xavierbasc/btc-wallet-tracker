
interface BadgeProps {
  label: string;
  variant?: 'orange' | 'green' | 'zinc';
}

const variantClasses = {
  orange: 'bg-btc-orange/10 border-btc-orange/30 text-btc-orange',
  green: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  zinc: 'bg-zinc-800 border-zinc-700 text-zinc-400',
};

export function Badge({ label, variant = 'orange' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center font-mono text-xs px-3 py-1 rounded-full border ${variantClasses[variant]}`}>
      {label}
    </span>
  );
}
