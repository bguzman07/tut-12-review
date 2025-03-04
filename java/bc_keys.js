"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Brandy Guzman
   Date:   3/4/2025

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
   var aside = document.createElement("aside");
   aside.setAttribute("id", "keywords");
   var heading = document.createElement("h1");
   heading.setAttribute("value", "Keyword List");

   aside.appendChild(heading);

   var list = document.createElement("ol");

   aside.appendChild(list);

   var keyWordElems = document.querySelectorAll("dfn")[0];

}






/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
