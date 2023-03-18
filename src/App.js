import './App.css';

import Test from './pages/Test'
import Um from './pages/Um'
import Youtube from './pages/Youtube'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import TextYoutubeApi from './pages/TextYoutubeApi'

function App() {
  return (
    <Container fluid style={{ backgroundColor: '#181818' }}>
      <div style={{ textAlign: 'center' }}>
        <Um />
      </div>
    </Container >

  );
}

export default App;
