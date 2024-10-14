import puplanta from "../images/projects/georgia-corgi.svg";
import weather2 from "../images/projects/weather2.png";
import zap from "../images/projects/zap.jpg";
import simon from "../images/projects/simon.jpg";
import tictactoe from "../images/projects/tictactoe.jpg";
import sickFits from "../images/sick-fits.png";

const projectData = [
{id: 1,
name: "Puplanta",
image: puplanta,
altText: "The state of Georgia colored orange, with a corgi head, a heart and a corgi butt on it",
text: "Dog Park and Shop voting app",
gitLink: "https://github.com/Missarachnid/puplanta2",
webLink: "http://puplanta.com/"
},
{id: 2,
name: "Weather App",
image: weather2,
altText: "The forecast for Bartow County Georgia, on a teal card, from 8/8/19",
text: "Your current locations weather forecast",
gitLink: "https://github.com/Missarachnid/open-weather-sass-redo",
weblink: "https://warm-cliffs-12741.herokuapp.com/"
},
{id: 3,
name: "Tic Tac Toe",
image: tictactoe,
altText: "A game of tic tac toe",
text: "Tic Tac Toe & webgl effects",
gitLink: "https://github.com/Missarachnid/fcc-tictactoe",
webLink: "https://missarachnid.github.io/fcc-tictactoe/"
}, 
{id: 4,
name: "Simon",
image: simon,
altText: "An interface made to look like the Simon matching game, with 4 buttons of different colors around the outside.",
text: "A fun matching game",
gitLink: "https://github.com/Missarachnid/fcc-simon",
webLink: "https://missarachnid.github.io/fcc-simon/"
},
{id: 5,
  name: "Zapier 'Zap'",
  image: zap,
  altText: "Zapier's logo in red text",
  text: "Zapier's API sends form data to a google doc",
  gitLink: "https://github.com/Missarachnid/Email-to-GoogleSheets-Zap",
  webLink: "https://brave-curie-83cf49.netlify.app/"
  },
  {id: 6,
  name: "Sick-Fits",
  image: sickFits,
  altText: "The Sick-Fits Logo, white letters on a red background",
  text: "Wes Bos' course, an ecommerce site",
  gitLink: "https://github.com/Missarachnid/sick-fits-frontend",
  webLink: "https://www.sick-fits.com"
  }
];
export default projectData;