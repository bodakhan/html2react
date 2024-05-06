import React from "react";
import PropTypes from "prop-types";
import "./characterRatings.css";

class CharacterRatings extends React.Component {
  render() {
    const { characterData } = this.props;
    let topCharacters = characterData
      .slice()
      .sort(function (a, b) {
        return b.votes - a.votes;
      })
      .slice(0, 5);

    return (
      <section id="characterRatings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {topCharacters.map((character, index) => (
              <tr
                key={character.name}
                className={(index + 1) % 2 === 0 ? "light" : "dark"}
              >
                <td>{character.name}</td>
                <td>{character.skillset.join(", ")}</td>
                <td>{character.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

CharacterRatings.propTypes = {
  characterData: PropTypes.array,
};

export default CharacterRatings;