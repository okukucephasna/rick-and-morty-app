import React, { useEffect, useState } from 'react';
import { getCharacters } from './apis.js';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <ul className="list-group">
        {characters.map((character) => (
          <li key={character.id} className="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={character.image}
                  alt={character.name}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-10">
                <h3>{character.name}</h3>
                <p>
                  <strong>Status:</strong> {character.status}
                </p>
                <p>
                  <strong>Species:</strong> {character.species}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
