import Routing from './components/Routes/Routing'
import Aos from 'aos';

const App = () => {
  Aos.init();
  return (
    <>
       <Routing />  
    </>
  )
}

export default App