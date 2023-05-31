import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      hello
      <input type="email" autocomplete="on | off" />
    </div>
  );
}

export default App;
// "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
