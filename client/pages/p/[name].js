import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.fruits.name}</h1>
    <p>Colour: {props.fruits.colour}</p>
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { name } = context.query;
  const res = await fetch(`http://localhost:4040/fruits/name/${name}`);
  const fruits = await res.json();

  console.log(`Fetched fruits: ${fruits.name}`);

  return { fruits };
};

export default Post;
