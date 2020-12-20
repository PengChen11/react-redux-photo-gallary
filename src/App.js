import Header from './component/header.js';
import Footer from './component/footer.js';
import Carousel from './component/carousel.js';
import {useSelector} from 'react-redux';

export default function App() {
  const dayMode = useSelector(state => state.settingsStore.dayMode);

  return (
    <div className={dayMode? "bg-info":"bg-dark"}>
      <Header />
      <main >
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
