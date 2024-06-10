
function createCharacter(name, gender, charClass) {
  return {
      getName: function() {
          return name;
      },
      getGender: function() {
          return gender;
      },
      getClass: function() {
          return charClass;
      }
  };
}

function createcharacter() {
  const name = document.getElementById('characterName').value;
  const gender = document.getElementById('characterGender').value;
  const charClass = document.getElementById('characterclass').value;

  if (name && gender && charClass) {
      const character = createCharacter(name, gender, charClass);
      document.getElementById('charName').innerText = `Name: ${character.getName()}`;
      document.getElementById('charGender').innerText = `Gender: ${character.getGender()}`;
      document.getElementById('charClass').innerText = `Class: ${character.getClass()}`;
      

      document.getElementById('characterDetails').style.display = 'block';

  } else {
      alert('Please fill out all fields.');
  }
}
