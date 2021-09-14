import Card from "./components/Card";
import p3data from "./data/p3";

function App() {
  const url =
    "https://sites.google.com/site/persona3fessociallink/_/rsrc/1398700674440/about-me/aaaaaaaaaaaaaa.jpg?height=200&width=182";

  const p3 = Object.values(p3data);

  return (
    <>
      {p3.map((link) => (
        <Card
          imagePath={url}
          name={link.name}
          arcana={link.arcana}
          key={`${link.arcana}-${link.name}`}
        />
      ))}
    </>
  );
}

export default App;
