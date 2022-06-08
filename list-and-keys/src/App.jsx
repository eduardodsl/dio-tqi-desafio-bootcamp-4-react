import './App.css';

function App() {

  let customers = [
    {
      id: 1,
      name: 'Eufazino',
      skills: ['React', 'Node', 'CSS'],
    },
    {
      id: 2,
      name: 'Pernalonga',
      skills: ['React', 'Webpack', 'Go', 'Flutter'],
    },
    {
      id: 3,
      name: 'Patolino',
      skills: ['C++', 'HTML'],
    },
    {
      id: 4,
      name: 'Gaguinho',
      skills: ['Dart'],
    },
  ];

  const renderSkill = (obj, index) => (
    <a href='#'>{obj}</a>
  );

  const renderCustomer = (obj, index) => (
    <li key={`costumer-${index}`}>
      {obj.name}<br />
      skills: {obj.skills.map(renderSkill)}
    </li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>Digital Inovation One</p>
        <p>Bem-vindo à nossa aula =D.</p>
        <ul class='customers'>
          {customers.map(renderCustomer)}
        </ul>
      </header>
    </div>
  );
}

export default App;
