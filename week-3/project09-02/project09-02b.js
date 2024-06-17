"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Hayat Soma
      Date: 6/16/2024

      Filename: project09-02b.js
*/
// Retrieve data from session storage and update page elements
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve values from session storage
  let storedRiderName = sessionStorage.getItem('riderName');
  let storedAgeGroup = sessionStorage.getItem('ageGroup');
  let storedBikeOption = sessionStorage.getItem('bikeOption');
  let storedRouteOption = sessionStorage.getItem('routeOption');
  let storedAccOption = sessionStorage.getItem('accOption');
  let storedRegion = sessionStorage.getItem('region');
  let storedMiles = sessionStorage.getItem('miles');
  let storedComments = sessionStorage.getItem('comments');

/* Page Objects */

  // Update page elements with retrieved values
  document.getElementById('riderName').textContent = storedRiderName;
  document.getElementById('ageGroup').textContent = storedAgeGroup;
  document.getElementById('bikeOption').textContent = storedBikeOption;
  document.getElementById('routeOption').textContent = storedRouteOption;
  document.getElementById('accOption').textContent = storedAccOption;
  document.getElementById('region').textContent = storedRegion;
  document.getElementById('miles').textContent = storedMiles;
  document.getElementById('comments').textContent = storedComments;
})

