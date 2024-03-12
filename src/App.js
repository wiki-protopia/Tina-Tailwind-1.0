
import './App.css';

import Sidesection from './sections/sidesection';
import Navsection from './sections/navsection';
import Mainsection from './sections/mainsection';

function App() {
  return (
    <div class="bg-[#111317]">

      <div class="flex">

        <Sidesection></Sidesection>
          
        <div class="flex-1 mt-[50px] ml-[75px] text-[#FFFFFF]">
              
            <Navsection></Navsection>
            
            {/* <Mainsection></Mainsection> */}
        </div>
      </div>
    </div>
  );
}

export default App;
