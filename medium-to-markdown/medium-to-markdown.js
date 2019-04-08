const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl('https://medium.com/@hepner.thomas/my-journey-to-self-taught-data-scientist-ef014a44c704')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});