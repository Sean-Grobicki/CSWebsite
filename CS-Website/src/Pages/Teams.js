import '../Stylesheets/App.css';
import { NavigationBar } from './Home';

function Teams() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blast Paris Major 2023</h1>
        <NavigationBar/>
        <h2>Teams Attending</h2>
      </header>
    </div>
  );
}

export default Teams;