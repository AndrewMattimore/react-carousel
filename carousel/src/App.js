import Carousel from './components/Carousel.jsx'

function App() {

  const images = [
    '/imgs/2b.webp',
    '/imgs/9s.jpg',
    '/imgs/a2.jpg'
  ];

  return (
    <Carousel images={images}/>
  );
}

export default App;
