const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

// defined the view engine as ejs 
app.use('view engine','ejs');

/**
 *  
  the styling will be the public url for the web page .
 *  
 * app.use('/styling', express.static('public/style'))
 *
 

  static will be the public url source for the webpage
  
  *
  * app.use('/static', express.static('public'))
  *   
  
  another usage 
  *
  * app.use('/static', express.static(path.join(__dirname, 'public')))  
  * 
  
 
**/

app.get("/", (req, res) => {

  const products = ['O','P', 'Q']; 
  res.render('home', {name: "Dot", products})

  // res.sendFile(path.join(__dirname, "views/home.html"));

    // res.status(200).json({
    //   success: true,
    //   message: "Home Page",
    // });
});

app.get("/about", (req, res) => {
  res.render('about')
  // res.sendFile(path.join(__dirname, "views/about.html"));
});

app.listen(4000, () => {
  console.log("server started");
});
