import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/l'

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyA3w27p8bihZjwzDhzTx_nmZEaWZormvaM",
    authDomain: "prietoweb-5c38e.firebaseapp.com",
    projectId: "prietoweb-5c38e",
    storageBucket: "prietoweb-5c38e.appspot.com",
    messagingSenderId: "535224107725",
    appId: "1:535224107725:web:9b6cd0945c74c5d3a49f84",
    measurementId: "G-PX07B8LLDD"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {console.log(getCities(db))}
    </div>
  );
}

export default App;
