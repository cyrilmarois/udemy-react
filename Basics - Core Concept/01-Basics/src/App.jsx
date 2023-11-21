import reactPicture from './assets/react-core-concepts.png';
import { CORE_CONCEPTS as coreConcepts } from './data.js';

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
// WITH JS destructuring
// function CoreConcept({image, title, description}) {
//   return (
//     <li>
//       <img src={image} alt={description} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }

// CUSTOM props name
// function CoreConcept({concept}) {
//   return (
//     <li>
//       <img src={concept.image} alt={concept.description} />
//       <h3>{concept.title}</h3>
//       <p>{concept.description}</p>
//     </li>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            <CoreConcept
              title={coreConcepts[0].title}
              description={coreConcepts[0].description}
              image={coreConcepts[0].image}
            />
            <CoreConcept {...coreConcepts[1]} />
            {/* CUSTOM props name */}
            <CoreConcept concept={coreConcepts[2]} />
            <CoreConcept
              title={coreConcepts[3].title}
              description={coreConcepts[3].description}
              image={coreConcepts[3].image}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
