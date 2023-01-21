import Header from "./components/Header/Header.js";
import Search from "./components/search/search.js";
import Footer from "./components/footer/footer";
import Main2 from "./components/Main2/index.js";
import Main from "./components/Main/Main1.js";
import Main4 from "./components/Main4/Main4.js";
import News from "./components/News/News.js";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Main2 />
      <Search />
      <Main4 />
      <News />
      <Footer />
    </div>
  );
}

export default App;
