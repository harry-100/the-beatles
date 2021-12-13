<<<<<<< HEAD
function App() {
  return (
    <div>

=======
import { Route, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route exact path ="/">
          <Redirect to="/welcome" />
          </Route>
        <Route exact path='/welcome'>
          <Welcome />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/products/:productId'>
          <ProductDetails />
        </Route>
      </main>
>>>>>>> 271c91e584c2d65a4290d5c0caf91809c4aca6dd
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
>>>>>>> 271c91e584c2d65a4290d5c0caf91809c4aca6dd
