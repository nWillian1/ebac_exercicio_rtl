import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://m.media-amazon.com/images/I/71tqJslVD5L.jpg">
        Olha só que legal minha miniatura do Batmóvel modelo 1966.
      </Post>
    </div>
  );
}

export default App;
