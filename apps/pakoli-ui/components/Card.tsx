async function getProducts() {
  const res = await fetch('http://localhost:3001/products');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Card() {
  const data = await getProducts();
  return (
    <>
      {data.map((card) => (
        <div key={card.name}>{card.name}</div>
      ))}
    </>
  );
}

export default Card;
