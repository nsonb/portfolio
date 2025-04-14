import Accordion from './page/accordion/Accordion';
import FlashCardApp from './page/flashcard/FlashCard';

const App = () => {
  return (
    <>
      <h1 className="p-[20px] text-[20px]">My Apps</h1>
      <FlashCardApp />
      <Accordion />
    </>
  );
};

export default App;
