import { data } from './data.json';
import './Creators.css';

const Creators = () => {
  return (
    <section id="creators">
      <h2>Who are the Creators?</h2>
      <div id="creators-container">
        {data.map(creator => (
          <div key={creator.id}>
            <a href={creator.gitHub}>
              <img src={creator.image} alt={creator.name} />
            </a>
            <h3>{creator.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Creators;