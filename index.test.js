// const { TestScheduler } = require('jest');
const displayCountryInfo = require('./index.js');

fetch("https://restcountries.eu/rest/v2/all")
 .then(function(res){
 console.log(res);
   return res.json();
 })
 .then(function(data){
 console.log(data);
   initialize(data);
 })
 
 .catch(function(err){
   console.log("Error:", err);
 });


test('Json response', ()=> {
    expect(displayCountryInfo('co'))
})


// fetch("https://restcountries.eu/rest/v2/all")
//  .then(function(res){
//  console.log(res);
//    return res.json();
//  })
//  .then(function(data){
//  console.log(data);
//    initialize(data);
//  })
//  .catch(function(err){
//    console.log("Error:", err);
//  });
