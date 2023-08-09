import "./css/App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import ContentHome from "./pages/ContentHome";

function App() {
  return (
    <>
      {/*Header*/}
      <Header> </Header>
      {/*Contenido exclusivo del home*/}
      <main>
        <ContentHome/>
      </main>
      {/*Footer*/}
      <footer>
      <Footer></Footer>
      </footer>
      
      
    </>
  );
}

export default App;
