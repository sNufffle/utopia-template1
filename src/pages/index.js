import Nav from "../layouts/nav"
import Slide from "../layouts/slide"
import BestSellers from "../layouts/bestsellers"
import Waterfall from "../layouts/waterfall"
import References from "../layouts/references"
import Subscribe from "../layouts/subscribe"
import Footer from "../layouts/footer"
import Copyrights from "../layouts/copyrights"

function App() {
    return (
      <div>
        <Nav></Nav>
        <Slide></Slide>
        <BestSellers></BestSellers>
        <Waterfall></Waterfall>
        <References></References>
        <Subscribe></Subscribe>
        <Footer></Footer>
        <Copyrights></Copyrights>
      </div>
    );
  }
  
  export default App;
  