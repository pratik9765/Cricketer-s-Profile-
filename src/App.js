import './App.css';
import './index.css';
import profiles from './data';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-slate-100">
      <header className='mb-3 text-5xl font-bold text-center'>Cricketers Profile</header>

      <div className=''>
      <Testimonial profiles={profiles}></Testimonial>

      </div>

    </div>
  );
}

export default App;
