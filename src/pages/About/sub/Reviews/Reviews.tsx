import data from './data/data';

function Reviews() {
  return (
    <div id="reviews">
      {data.map((reviewer) => (
        <article key={reviewer.id}>
          <img src={reviewer.image} alt={reviewer.name} />
          <h4>{reviewer.name}</h4>
          <p>{reviewer.position}</p>
          <p>{reviewer.review}</p>
        </article>
      )
      )}
    </div>
  );
}

export default Reviews;