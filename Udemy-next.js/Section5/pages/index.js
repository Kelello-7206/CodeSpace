import { NOTFOUND } from 'dns';
import fs from 'fs/promises';
import path from 'path';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
     {products.map((products) => (
      <li key={products.id}>{products.title}</li>
     ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log('(Re-)Generating...')
  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  if(!data){
    return { redirect: {
      destination: 'no/data'
    }}
  }


  if(data.products.length === 0){
    return { NOTFOUND: true }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10,
  };
}

export default HomePage;
