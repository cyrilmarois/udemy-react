import { useState } from 'react';

import { CORE_CONCEPTS as coreConcepts, EXAMPLES as examples } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [topic, setTopic] = useState();

  function handleClick(tab) {
    setTopic(tab);
  }

  // other way to render dynamic content
  let tabContent = <p>Please select a topic</p>;
  if (topic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{examples[topic].title}</h3>
        <p>{examples[topic].description}</p>
        <pre>
          <code>{examples[topic].code}</code>
        </pre>
      </div>
    );
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

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              clicked={() => handleClick('components')}
              isSelected={topic === 'components'}
            >
              Components
            </TabButton>
            <TabButton
              clicked={() => handleClick('jsx')}
              isSelected={topic === 'jsx'}
            >
              JSX
            </TabButton>
            <TabButton
              clicked={() => handleClick('props')}
              isSelected={topic === 'props'}
            >
              Props
            </TabButton>
            <TabButton
              clicked={() => handleClick('state')}
              isSelected={topic === 'state'}
            >
              State
            </TabButton>
          </menu>
          {!topic ? (
            <p>Please select a topic</p>
          ) : (
            <div id='tab-content'>
              <h3>{examples[topic].title}</h3>
              <p>{examples[topic].description}</p>
              <pre>
                <code>{examples[topic].code}</code>
              </pre>
            </div>
          )}
          {/* OTHER WAY to DISPLAY {tabContent} */}
        </section>
      </main>
    </div>
  );
}

export default App;
