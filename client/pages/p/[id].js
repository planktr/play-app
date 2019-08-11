import Layout from '../../components/layout';
import Fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.name}</h1>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://localhost:4040/users/fruits`);
  const fruits = await res.json();

  console.log(`Fetched fruits: ${name}`);

  return { fruits };
};

export default Post;
