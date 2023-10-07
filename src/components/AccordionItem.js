export default function AccordionItem({
  index,
  title,
  isOpen,
  onOpenItem,
  children,
  icon,
  num,
}) {
  return (
    <li
      onClick={() => onOpenItem(index)}
      className={`item${isOpen ? " open" : ""}`}
    >
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{icon}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </li>
  );
}
