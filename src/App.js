
import './App.css';

import Sidesection from './sections/sidesection';
import Navsection from './sections/navsection';
import Mainsection from './sections/mainsection';

function App() {
  return (
    <div class="bg-[#111317]">

      <div class="flex container w-full relative">

        <Sidesection></Sidesection>
          
        <div class="flex-1 lg:mt-[50px] lg:ml-[75px] text-[#FFFFFF] overflow-hidden ml-[5%] w-[90%]">
              
            <Navsection></Navsection>
            
            <Mainsection></Mainsection>
        </div>
      </div>
    </div>
  );
}

export default App;
