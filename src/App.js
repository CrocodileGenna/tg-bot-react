import "./App.css";
import { sendMessage } from "./index-bot";

const tg = window.Telegram.WebApp;
function App() {
  return (
    <div className="App">
      <form action="/sendEmail" method="post" onSubmit={sendMessage}>
        <input
          type="email"
          name="email"
          placeholder="Електронна адреса"
          required
        />
        <textarea
          name="message"
          placeholder="Текст повідомлення"
          required
        ></textarea>
        <button type="submit">Відправити</button>
      </form>
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
