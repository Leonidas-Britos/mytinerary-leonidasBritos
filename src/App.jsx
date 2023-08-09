import "./css/App.css";
<<<<<<< HEAD
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
=======
import MainLayoutFooter from "./layouts/footer/MainLayoutFooter";
import MainLayout from "./layouts/header/MainLayoutHeader";
>>>>>>> 693ddd4eda016b164111cb3a34cfb25074f4a4eb
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
<<<<<<< HEAD
      <Footer></Footer>
=======
      <MainLayoutFooter></MainLayoutFooter>
>>>>>>> 693ddd4eda016b164111cb3a34cfb25074f4a4eb
      </footer>
      
      
    </>
  );
}

export default App;
