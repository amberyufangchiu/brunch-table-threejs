import Index from '../src/pages/Index'
import { Overlay } from './components/Overlay';
import './App.scss'

function App() {
  return (
    <div className='main'>
      <Index />
      <Overlay/>
    </div>
  );
}

export default App;
