import "./css/App.css";
import MainLayoutFooter from "./layouts/footer/MainLayoutFooter";
import MainLayout from "./layouts/header/MainLayoutHeader";
import ContentHome from "./pages/ContentHome";

function App() {
  return (
    <>
      {/*Header*/}
      <MainLayout> </MainLayout>
      {/*Contenido exclusivo del home*/}
      <main>
        <ContentHome/>
      </main>
      {/*Footer*/}
      <footer>
      <MainLayoutFooter></MainLayoutFooter>
      </footer>
      
      
    </>
  );
}

export default App;
