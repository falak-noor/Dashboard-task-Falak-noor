import { User, Users, ShoppingCart, TrendingDown } from 'lucide-react';

const ICON_MAP = {
  user: User,
  users: Users,
  revenue: TrendingDown,
  orders: ShoppingCart,
};

export const KpiCard = ({
  title,
  value,
  change,
  isPositive = true,
  comparison,
  iconType = 'user',
  icon: CustomIcon,
  className = '',
}) => {
  const IconComponent = CustomIcon || ICON_MAP[iconType] || User;

  return (
    <div
      className={`bg-white rounded-lg border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between ${className}`}
    >
      <div className="text-center mb-3">
        <h3 className="text-xs font-bold text-gray-800 tracking-wide">{title}</h3>
      </div>

      <div className="flex items-center justify-center gap-4 py-1">
        <div className="p-2 text-gray-800">
          <IconComponent className="w-6 h-6 stroke-[1.8]" />
        </div>

        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          {value}
        </div>

        {change && (
          <div
            className={`text-xs font-semibold flex items-center gap-0.5 ${
              isPositive ? 'text-emerald-600' : 'text-emerald-700'
            }`}
          >
            <span>{change}</span>
          </div>
        )}
      </div>

      {comparison && (
        <div className="text-center mt-3 pt-2">
          <span className="text-[11px] text-gray-500 font-medium">
            {comparison}
          </span>
        </div>
      )}
    </div>
  );
};

export default KpiCard;
