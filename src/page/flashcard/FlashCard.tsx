import { useState } from 'react';
import './flashcard.css';

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

const FlashCard = (props: { card: Card }) => {
  const [active, setActive] = useState(false);
  const { card } = props;
  return (
    <button
      onClick={() => {
        setActive((a) => !a);
      }}
      className={active ? 'selected' : ''}
    >
      <p>{active ? card.answer : card.question}</p>
    </button>
  );
};

const FlashCardApp = () => {
  const renderCard = questions.map((c) => <FlashCard key={c.id} card={c} />);
  return <div className="flashcards">{renderCard}</div>;
};

type Card = {
  id: number;
  question: string;
  answer: string;
};

export default FlashCardApp;
