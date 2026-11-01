import { Loader2 } from 'lucide-react';

const VARIANTS = {
  primary:
    'bg-[#1E5128] hover:bg-[#163f20] text-white shadow-xs focus:ring-2 focus:ring-[#1E5128]/30',
  secondary:
    'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-2xs focus:ring-2 focus:ring-gray-200',
  outline:
    'bg-transparent hover:bg-green-50 text-[#1E5128] border border-[#1E5128] focus:ring-2 focus:ring-[#1E5128]/20',
  ghost:
    'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-2 focus:ring-gray-200',
  danger:
    'bg-rose-600 hover:bg-rose-700 text-white shadow-xs focus:ring-2 focus:ring-rose-500/30',
};

const SIZES = {
  sm: 'text-xs px-2.5 py-1.5 gap-1.5 rounded-md font-medium',
  md: 'text-sm px-4 py-2 gap-2 rounded-md font-medium',
  lg: 'text-base px-5 py-2.5 gap-2.5 rounded-lg font-semibold',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  ...rest
}) => {
  const variantClass = VARIANTS[variant] || VARIANTS.primary;
  const sizeClass = SIZES[size] || SIZES.md;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all duration-150 outline-none select-none disabled:opacity-50 disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${className}`}
      {...rest}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!loading && Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 text-current" />
      )}
      {children && <span>{children}</span>}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 text-current" />
      )}
    </button>
  );
};

export default Button;
