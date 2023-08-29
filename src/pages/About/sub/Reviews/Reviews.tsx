import {data} from './data/data.json';
import './Reviews.css';

function Reviews() {
  return (
    <div id="reviews">
      <h2>Reviews</h2>
      <div id="reviews-container">
      {data.map((reviewer) => (
        <article key={reviewer.id}>
          <img src={reviewer.image} alt={reviewer.name} />
          <h3>{reviewer.name}</h3>
          <p className="reviewer-position">{reviewer.position}</p>
          <p className="reviewer-opinion">{reviewer.review}</p>
        </article>
      )
      )}
     </div>
    </div>
  );
}

export default Reviews;