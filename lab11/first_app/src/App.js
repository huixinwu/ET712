import './App.css';
import yellowstoneimg from './images/yellowstone.jpg'

function App() {
  // variable
  const msg = "Welcome to ReactJS"
  // function 
  function printsomething(){
    return "Hello from function"
  }
  return (
   <div>
      <h1 style={{color:"crimson", textAlign:"center"}}>Student's full name</h1>
      <p>This is my first ReactJS app</p>
      <p>Bucket list</p>
      <ol>
        <li>It gives you things to look forward to</li>
        <li>It makes life more meaningful</li>
      </ol>
      <h2 className='subtitle'>Inline styling</h2>
      <label for="email">Enter e-mail: </label>
      <input type="text" id="email" placeholder="Enter a email address..." style={{padding:"10px", backgroundColor:"lightgreen"}}/>
      <button type="submit" style={{backgroundColor:"crimson", padding:"10px 20px"}}>Submit</button>
      <hr/>
      <img src={yellowstoneimg} style={{width:"500px", display:"block",margin:"auto", border:"groove 10px orange"}}/>
      <h2 className='subtitle'>Variables in JSX</h2>
      <p>Calling variable msg = {msg}</p>
      <p>Calling function printsomething = {printsomething()}</p>
   </div>
  );
}

export default App;
