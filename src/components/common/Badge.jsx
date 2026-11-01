const VARIANTS = {
  success: 'bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]',
  neutral: 'bg-gray-100 text-gray-700 border border-gray-200',
  warning: 'bg-amber-50 text-amber-800 border border-amber-200',
  danger: 'bg-rose-50 text-rose-700 border border-rose-200',
  info: 'bg-blue-50 text-blue-700 border border-blue-200',
  workspace: 'bg-[#bbf7d0] text-[#14532d] font-semibold text-xs px-2.5 py-1 rounded-md',
};

export const Badge = ({
  children,
  variant = 'neutral',
  className = '',
  icon: Icon,
}) => {
  const variantClass = VARIANTS[variant] || VARIANTS.neutral;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors ${variantClass} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
