/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:Hayat Soma
  Date:7/14/2024
  Filename:
*/

"use strict";

let heroes = [
  { name: 'Superman', power: 'Super Strength', weakness: 'Kryptonite', location: 'Metropolis' },
  { name: 'Wonder Woman', power: 'Super Agility', weakness: 'None', location: 'Themyscira' },
  { name: 'Batman', power: 'Intelligence', weakness: 'No Superpowers', location: 'Gotham' }
];

function fetchHero1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve(heroes[0]) : reject('Failed to retrieve Superhero 1 data');
    }, 2000);
  });
}

function fetchHero2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve(heroes[1]) : reject('Failed to retrieve Superhero 2 data');
    }, 4000);
  });
}

function fetchHero3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve(heroes[2]) : reject('Failed to retrieve Superhero 3 data');
    }, 6000);
  });
}

function displayHeroData(sectionId, heroData) {
  const section = document.getElementById(sectionId);
  const detailsDiv = section.querySelector('.hero-details');
  detailsDiv.innerHTML = `
    <p>Name: ${heroData.name}</p>
    <p>Power: ${heroData.power}</p>
    <p>Weakness: ${heroData.weakness}</p>
    <p>Location: ${heroData.location}</p>
  `;
}

function displayError(sectionId, errorMessage) {
  const section = document.getElementById(sectionId);
  const errorDiv = section.querySelector('.error-message');
  errorDiv.textContent = errorMessage;
}

document.addEventListener('DOMContentLoaded', () => {
  Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()])
    .then(results => {
      results.forEach((result, index) => {
        const sectionId = `hero${index + 1}`;
        if (result.status === 'fulfilled') {
          displayHeroData(sectionId, result.value);
        } else {
          displayError(sectionId, result.reason);
        }
      });
    });
});
