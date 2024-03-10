
import './App.css';

import Sidesection from './sections/sidesection';
import Navsection from './sections/navsection';
import Mainsection from './sections/mainsection';

function App() {
  return (
    <div class="bg-gray-100">

      <div class="flex h-screen">

        <Sidesection></Sidesection>
          
        <div class="flex-1">
              
            {/* <Navsection></Navsection> */}
            
            <Mainsection></Mainsection>
        </div>
      </div>
    </div>
  );
}

export default App;
