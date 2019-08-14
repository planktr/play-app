import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const FruitsLink = ({ name }) => (
  <li>
    <Link href="/p/[name]" as={`/p/${name}`}>
      <a>{name}</a>
    </Link>
  </li>
);

export default function MonkeySpaghet(props) {
  return(
  <Layout>
    <h1>Fruits</h1>
    <ul>
      {props.name.map(name => (
        <FruitsLink key={name} name = {name}/>
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);
}

MonkeySpaghet.getInitialProps = async function() {
  const res = await fetch('http://localhost:4040/fruits');
  const fruits = await res.json();

  console.log(`Show data fetched. Count: ${fruits.length}`);

  return {
    name: fruits.map(entry => entry.name)
  };
};
