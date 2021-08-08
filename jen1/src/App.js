import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
function App() {
  return (
    <div className="App">

<Card
payload = {
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "Publish Adaptive Card schema",
      "weight": "bolder",
      "size": "medium"
    }]
}
>
</Card>
    </div>
  );
}

export default App;
