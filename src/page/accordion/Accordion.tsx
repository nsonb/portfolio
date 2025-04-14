import { act, useState } from 'react';
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

const AccordionItem = (props: { index: number; faq: FAQ }) => {
  const { index, faq } = props;
  const [active, setActive] = useState(false);
  return (
    <div
      className={active ? 'item open' : 'item'}
      onClick={() => setActive((a) => !a)}
    >
      <p className="number">{index}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{active ? '-' : '+'}</p>
      {active && <div className="content-box">{faq.text}</div>}
    </div>
  );
};

const Accordion = () => {
  const renderFAQ = faqs.map((f, index) => {
    return <AccordionItem index={index} faq={f} key={f.title + index} />;
  });
  return (
    <div className="p-[20px] accordionApp">
      <h1 className="border border-4 border-black w-fit p-4">Accordion</h1>
      <div className="accordion">{renderFAQ}</div>
    </div>
  );
};

export default Accordion;
