import Layout from '../components/layout';
import Link from 'next/link';
import Fetch from 'isomorphic-unfetch';


const Index = props => (
  <Layout>
    <h1>Fruits</h1>
    <ul>
      {props.name.map(name => (
        <li key={name}>
          <Link href="/p/[name]" as={`/p/${name}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:4040/users/fruits');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    name: data.map(entry => entry.name)
  };
};

export default Index;
