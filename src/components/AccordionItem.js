import { useState } from "react";

export default function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <li onClick={handleOpen} className={`item${isOpen ? " open" : ""}`}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </li>
  );
}
