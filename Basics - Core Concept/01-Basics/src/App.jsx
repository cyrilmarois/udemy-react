import reactPicture from './assets/react-core-concepts.png';
import componentImage from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactPicture} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            <CoreConcept
              title='Components'
              description='The core UI'
              image={componentImage}
            />
            <CoreConcept
              title='JSX'
              description='The core build'
              image={componentImage}
            />
            <CoreConcept
              title='PROPS'
              description='The data passing'
              image={componentImage}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
