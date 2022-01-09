import "./App.css";
import Chord from "@tombatossals/react-chords/lib/Chord";

const GuitarChord = () => {
  const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false,
  };

  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"],
    },
  };

  const lite = false;
  return <Chord chord={chord} instrument={instrument} lite={lite} />;
};

function App() {
  return (
    <div className="App">
      Guitar Chords
      <div className="chord">
        <GuitarChord className="chord" />
        <GuitarChord />
        <GuitarChord />
        <GuitarChord />
      </div>
    </div>
  );
}

export default App;
