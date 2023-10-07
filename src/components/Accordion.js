import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion({ data }) {
  const [isOpenIndex, setIsOpenIndex] = useState(-1);

  const handleOpen = (nextIndex) => {
    setIsOpenIndex((currentIndex) =>
      currentIndex === nextIndex ? -1 : nextIndex
    );
  };

  const renderedItems = data.map((faq, index) => {
    const isOpen = index === isOpenIndex;
    const icon = isOpen ? "-" : "+";
    const num = index + 1 < 9 ? `0${index + 1}` : index + 1;

    return (
      <AccordionItem
        key={faq.title}
        title={faq.title}
        onOpenItem={handleOpen}
        isOpen={isOpen}
        index={index}
        icon={icon}
        num={num}
      >
        {faq.text}
      </AccordionItem>
    );
  });

  return <ul className="accordion">{renderedItems}</ul>;
}
