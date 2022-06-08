import './App.css';

const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Cadastrar Cliente</button>
const hasCustomer = true;

function App() {

  const renderShowHistory = () => {
    return <div>
      Clique no botao abaixo para visualizar o histórico de clientes<br />
      {buttonA}
    </div>
  }

  const renderShowCustomer = () => {
    return <div>
      Clique abaixo para cadastrar os clientes<br />
      {buttonB}
    </div>
  }

  const customer = 'Eduardo Augusto';
  const showCustomer = () => {
    if(!hasCustomer) return null;
    return (
      <div>
        <h1>Nome do Cliente: {customer}</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Digital Inovation One</p>
        <p>Bem-vindo à nossa aula =D.</p>
        Valor da variável hasCustomer { hasCustomer ? 'true' : 'false' }
        {hasCustomer ? renderShowHistory() : renderShowCustomer() }
        <div>
          {showCustomer()}
        </div>
      </header>
    </div>
  );
}

export default App;
