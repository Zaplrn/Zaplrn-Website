export default function StoreButton({ icon, alt, label, iconSize = 22 }) {
  return (
    <button className="store-btn">
      <img src={icon} alt={alt} width={iconSize} height={iconSize} />
      {label}
    </button>
  );
}