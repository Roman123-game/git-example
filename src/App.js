import './App.css';
import logo from './background.jpg'
 
function App() {
  return (
    <body>

    <h1>The mask-image Property</h1>
    
    <h3>An image with a mask layer image:</h3>
    <div class="masked">
    <img src={logo} alt="Cinque Terre" width="800" height="400"/>
    </div>
    
    <h3>Original image:</h3>
    <img src={logo} alt="Cinque Terre" width="800" height="400"/>
    
    </body>
  );
}

export default App;
