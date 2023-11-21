export default function TabButton({ children, clicked, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={clicked}>
        {children}
      </button>
    </li>
  );
}
