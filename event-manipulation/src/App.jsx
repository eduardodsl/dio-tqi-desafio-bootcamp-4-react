import './App.css';
import mock from './mock';
import List from './components/CustomerList';

const handleClick = (id) => {
  alert(`${id} Deletado`);
};

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Digital Inovation One</p>
        <p>Bem-vindo à nossa aula =D.</p>
      </header>
      <section>
        {List(mock, handleClick)}
      </section>
    </div>
  );
}

export default App;