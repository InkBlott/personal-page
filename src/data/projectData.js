import battleshipImg from '../images/battleships.png'
import cssPracticeImg from '../images/practice-css.png'
import shoppingCartImg from '../images/shopping-cart.jpg'
import personalImg from '../images/personalpage.png'
import ballImg from '../images/ball.jpg'

const projectData = [
    {   
        title:'Battleships',
        link:'https://inkblott.github.io/battleships/',
        image: battleshipImg,
        info: 'Battleship game page. Project uses JavaScript, React framework, Bootstrap and integrated tests for game logic.'
    },
    {   
        title:'Personal Webpage',
        link:'https://github.com/InkBlott/personal-page',
        image: personalImg,
        info: 'GitHub for this website, uses SASS, HTML, React'
    },
    {
        title:'CSS Webpage',
        link:'https://inkblott.github.io/css-practice/Index.html',
        image: cssPracticeImg,
        info: 'A responsive website page made only using CSS and HTML.'
    },
    {
        title:'Shopping Cart',
        link:'https://inkblott.github.io/shopping-cart',
        image: shoppingCartImg,
        info: 'React page made to show shopping cart functionality.'
    },
    {
        title:'Memory game',
        link:'https://inkblott.github.io/memory/',
        image: ballImg,
        info: 'Simple memory game, made using React, JavaScript. Don\'t click on the same ball twice!'
    }

]

export {projectData}