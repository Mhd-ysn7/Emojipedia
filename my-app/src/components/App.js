import './App.css';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import emojis
 from './emojis';
function CreateCard(emoji){
  return(
    <Card 
      key={emoji.id}
      icon={emoji.icon}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div className="App">
    <Header />
    <div className='Cards'>
    {emojis.map(CreateCard)}
    </div>
    <footer>
    <Footer />
    </footer>
    </div>
  );
}

export default App;
