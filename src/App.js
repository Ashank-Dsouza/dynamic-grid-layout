import './App.css';
import CardExample from './components/CardExample';
import GridLayout from './components/GridLayout';

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7];

  const getCards = () => {
    var cards = []
    for (let index = 0; index < list.length; index++) {
      const element = <CardExample></CardExample>
      cards.push(element)
    }

    return cards;
  }

  var cards = getCards()

  return (
    <div className="App">
      <GridLayout rowLength={4}>
        {cards}
      </GridLayout>
    </div>
  );
}

export default App;
