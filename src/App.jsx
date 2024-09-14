import { Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';


function App() {
  const firstName = "Oluwasegunfunmi"; 

  return (
    <div className="container mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      <p>
        {firstName ? `Hello, ${firstName}` : "Hello, there!"}
      </p>
      {firstName && <img src="https://via.placeholder.com/100" alt="Profile" />}
    </div>
  );
}

export default App;
