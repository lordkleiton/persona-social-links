import Card from "./components/Card";

function App() {
  const url =
    "https://sites.google.com/site/persona3fessociallink/_/rsrc/1398700674440/about-me/aaaaaaaaaaaaaa.jpg?height=200&width=182";
  const name = "Nome Sobrenome";
  const arcana = "Arcana";

  return (
    <>
      <Card imagePath={url} name={name} arcana={arcana} />
      <Card imagePath={url} name={name} arcana={arcana} />
      <Card imagePath={url} name={name} arcana={arcana} />
      <Card imagePath={url} name={name} arcana={arcana} />
    </>
  );
}

export default App;
