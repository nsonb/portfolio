import Accordion from './page/accordion/Accordion';
import BillSplit from './page/billsplit/BillSplit';
import FlashCardApp from './page/flashcard/FlashCard';

const App = () => {
  return (
    <div className="py-12 font-mono">
      <h1 className="p-[20px] text-[20px]">My Apps</h1>
      <BillSplit />
      <FlashCardApp />
      <Accordion />
    </div>
  );
};

export default App;
