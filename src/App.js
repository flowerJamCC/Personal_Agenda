import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Card from '@mui/material/Card';

function App() {
  return (
    <div className="App">
      <Card sx={{ width: 550, }}>
      <Header />
      <hr></hr>
      <Form />
      </Card>
    </div>
  );
}

export default App;
