
const heading = React.createElement('h1',{}, "Topics Covered")

const para = React.createElement('p',{}, "React uses an HTML-in-JavaScript syntax called JSX (JavaScript and XML).")

const para1 = React.createElement('p',{}, "React uses an HTML-in-JavaScript syntax called JSX (JavaScript and XML).")

const a1 = React.createElement('a',{href:"https://react.dev/",}, "Getting Stared with Html")

const para2 = React.createElement('p',{}, "React uses an HTML-in-JavaScript syntax called JSX (JavaScript and XML).")

const a2 = React.createElement('a',{href:"https://react.dev/"}, "HTML-- Structuring the WEB")


const para3 =  React.createElement('p',{}, "JavaScript is the programming language that you use to add interactive features to your website. Some examples could be games, things that happen when buttons are pressed or data is entered in forms, dynamic styling effects, ")

const a3 = React.createElement('a',{href:"https://react.dev/"}, " CSS-- Styling the WEB")

const div = React.createElement('div',{Class : "ParentDiv"}, [heading,para,a1, para1, a2,para2, a3, para3])


ReactDOM.render(div , document.getElementById("root"));