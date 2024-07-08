"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Hayat Soma
      Date: 7/7/2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
    let codeValue = postalCode.value;
    let countryValue = country.value;

    // Clear the place and region fields
    place.value = '';
    region.value = '';

    // Fetch API
    fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            if (json.places && json.places.length > 0) {
                place.value = json.places[0]['place name'];
                region.value = json.places[0]['state abbreviation'];
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
};




