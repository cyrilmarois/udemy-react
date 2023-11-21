import { CORE_CONCEPTS as coreConcepts } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

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
            <CoreConcept {...coreConcepts[2]} />
            <CoreConcept
              title={coreConcepts[3].title}
              description={coreConcepts[3].description}
              image={coreConcepts[3].image}
            />
            {/* CUSTOM props name
            <CoreConcept concept={coreConcepts[3]} /> */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
