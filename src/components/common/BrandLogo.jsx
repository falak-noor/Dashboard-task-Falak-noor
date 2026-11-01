export const BrandLogo = ({
  size = 'md',
  className = '',
}) => {
  const isLarge = size === 'lg';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/Glossy Green Intrapreneur Emblem.png"
        alt="Intrapreneur Logo"
        style={{
          height: isLarge ? '120px' : '56px',
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
};

export default BrandLogo;
