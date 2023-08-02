import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ContentHome from "./components/ContentHome";

function App() {
  return (
    <>
      {/*Header*/}
      <MainLayout> </MainLayout>
      {/*Contenido exclusivo del home*/}
      <main>
        <ContentHome/>
      </main>
    </>
  );
}

export default App;
