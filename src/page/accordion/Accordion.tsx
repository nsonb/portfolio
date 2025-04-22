import { JSX, useState } from 'react';
import './accordion.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

type FAQ = {
  title: string;
  text: string;
};

interface AccordionItemProps {
  index: number;
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
  children: JSX.Element;
}

const AccordionItem = (props: AccordionItemProps) => {
  const { index, faq, isOpen, onClick, children } = props;
  return (
    <div className={isOpen ? 'item open' : 'item'} onClick={onClick}>
      <p className="number">{index}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

const Accordion = () => {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  const setOpen = (index: number) => {
    setCurrentOpen(index);
  };

  const close = () => {
    setCurrentOpen(null);
  };
  const renderFAQ = faqs.map((f, index) => {
    return (
      <AccordionItem
        index={index}
        faq={f}
        key={f.title + index}
        isOpen={index === currentOpen}
        onClick={() => (index === currentOpen ? close() : setOpen(index))}
      >
        <p>{f.text}</p>
      </AccordionItem>
    );
  });
  return (
    <div className="p-[20px] accordionApp">
      <h1 className="border border-4 border-black w-fit p-4">Accordion</h1>
      <div className="accordion">{renderFAQ}</div>
    </div>
  );
};

export default Accordion;
