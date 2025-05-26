import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{padding:0}}>
      <Outlet/>
    </div>
  );
}

export default App;
