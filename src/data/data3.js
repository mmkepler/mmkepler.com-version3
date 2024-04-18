import header from "../images/projects/header.jpg";
import timestamp from "../images/projects/timestamp.jpg";
import calc from "../images/projects/calc.jpg";
import metadata from "../images/projects/metadata.jpg";
import wiki from "../images/projects/wiki.jpg";

const projectData3 = [
  {id: 13,
    name: "Wikipedia Viewer",
    image: wiki,
    text: "Wikipedia API project",
    altText: "A screenshot with instructions for using the Wikipedia viewer",
    gitLink: "https://github.com/Missarachnid/fcc-wikipedia-viewer",
    webLink: "https://missarachnid.github.io/fcc-wikipedia-viewer/"
    },
  {id: 14,
    name: "Header Parser",
    image: header,
    altText: "A screenshot of instructions on how to use the header parser microservice",
    text: "Returns your header information",
    gitLink: "https://github.com/Missarachnid/fcc-request-header-parser",
    webLink: "https://header-parser-mmk.herokuapp.com/"
    },
    {id: 15,
    name: "Time Stamp",
    image: timestamp,
    altText: "A screenshot of instructions on how to use the time stamp microservice",
    text: "If a date is input, a unix time stamp is returned",
    gitLink: "https://github.com/Missarachnid/fcc-timestamp",
    webLink: "https://timestamp-mmk.herokuapp.com/"
    },
    {id: 16,
    name: "Calculator",
    image: calc,
    altText: "An interface created to look like an oldschool solar hand-held calculator",
    text: "A handheld calculator",
    gitLink: "https://github.com/Missarachnid/fcc-calculator",
    webLink: "https://missarachnid.github.io/fcc-calculator/"
    },
    {id: 17,
    name: "Meta Data",
    image: metadata,
    altText: "A screenshot of instructions on how to use the meta data microservice",
    text: "Reads submitted file's size",
    gitLink: "https://github.com/Missarachnid/file-metadata",
    webLink: "https://kepler.glitch.me/"
    }
];

export default projectData3;