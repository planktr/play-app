import Header from './Header';
import Footer from './Footer';


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '3px solid #DDD'
};

const Layout = properties => (

  <div style={layoutStyle}>
    <Header />
    {properties.children}
    <Footer />
  </div>

);

export default Layout;
