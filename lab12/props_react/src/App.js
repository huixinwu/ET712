import './App.css';
import User from "./comments"
import "./index.css"
// import images
import cactusicon from "./images/cactus_pirate_icon.svg"
import facemanicon from "./images/face_man_icon.svg"
import headseticon from "./images/headset_icon.svg"

function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
        <User image={cactusicon} username="Mr. cactus" date="04/01/25" usercomment="Great Job!"/>
        <User image={facemanicon} username="Clark" date="04/05/25" usercomment="I need more rest"/>
        <User image={headseticon} username="Jessica" date="04/10/25" usercomment="Glad to"/>
      </main>

    </>
  );
}

export default App;
