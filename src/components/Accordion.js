import AccordionItem from './AccordionItem';

export default function Accordion({data}){
  const renderedItems = data.map((faq, index) => <AccordionItem key={faq.title} title={faq.title} text={faq.text} num={index+1}/> )
  
  return <ul className="accordion">
    {renderedItems}
  </ul> 
}