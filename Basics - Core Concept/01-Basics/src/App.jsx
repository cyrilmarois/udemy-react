import { useState } from 'react';

import { CORE_CONCEPTS as coreConcepts } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [topic, setTopic] = useState('JARVIS is the true Hero');

  function handleClick(tab) {
    // setTopic(tab);
    setTopic(tab);
    console.log({ tab });
  }

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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton clicked={() => handleClick('Components')}>
              Components
            </TabButton>
            <TabButton clicked={() => handleClick('JSX')}>JSX</TabButton>
            <TabButton clicked={() => handleClick('Props')}>Props</TabButton>
            <TabButton clicked={() => handleClick('State')}>State</TabButton>
          </menu>
          {topic}
        </section>
      </main>
    </div>
  );
}

export default App;
