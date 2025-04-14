import Accordion from './page/accordion/Accordion';
import FlashCardApp from './page/flashcard/FlashCard';

const App = () => {
  return (
    <div className="py-12">
      <h1 className="p-[20px] text-[20px]">My Apps</h1>
      <FlashCardApp />
      <Accordion />
    </div>
  );
};

export default App;
