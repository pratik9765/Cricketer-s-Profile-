import './App.css';
import './index.css';
import profiles from './data';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center overflow-hidden bg-blue-300">
      <header className='mt-2 text-5xl font-bold text-center  max-[760px]:text-3xl'>Cricketers Profile</header>

      <div className=''>
      <Testimonial profiles={profiles}></Testimonial>

      </div>

    </div>
  );
}

export default App;
