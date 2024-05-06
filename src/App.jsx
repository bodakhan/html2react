import "./App.css";
import PageHeader from "./Components/pageHeader/pageHeader";
import { data } from "../public/characterData";
import CharacterRatings from "../src/Components/characterRatings/characterRatings";
import CharacterCards from "../src/Components/characterCards/characterCards";
import "./reset.css";
function App() {
  return (
    <>
      <PageHeader />
      <CharacterRatings characterData={data} />
      <CharacterCards characterData={data} />
    </>
  );
}

export default App;