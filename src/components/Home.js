import myImg from '../images/Mano.png'
import '../styles/main.css'

function Home() {

  return(
    <div className='container pageContent'>
      <div className='row homeRow justify-content-center'>
        <img src={myImg} alt='Autoportrait' className='faceImg col'></img>
        <h2 className='col-8 align-self-center'>
          Hello, my name is Mantas. I am a Designer / Front End Developer living in Vilnius, Lithuania.
        </h2>
      </div>
      <div className='row flex-column mt-5 mx-3'>
      
        <h3 className='homeSub'>About:</h3>
        <p className='homeText'>I am a self taught developer, after discovering programming - I knew I wanted it to become my career, because there is nothing I enjoy more than creating useful software/website solutions for people.
        I try to spend as much time, as I can, practicing my craft. While I know that perfection can never be achieved - I will try my best to come close. <br></br><br></br>
        During my time off from coding I dabble in illustration and design. You can check out my illustrations <a href='https://mbdesign.pb.gallery' target="_blank" rel="noopener noreferrer">here</a>.
        
        </p>

      </div>
      
      <div className='row mt-3 mb-5 mx-3 flex-column'>
        <h3 className='homeSub'>Skills:</h3>
        <p className='homeText'> I am experienced in JavaScript, React, Bootstrap, CSS, HTLM, Sass, Webpack, NPM, TDD. Besides that I have some experience with Java and using Java for native Android apps. <br></br> <br></br>
        Aside from software development - I am skilled in Adobe creative package (Photoshop, Illustrator, InDesign) and CAD software.
        </p>

      </div>
      <div className='row homeRow justify-content-center flex-column'>
        <h2 className='col-8 align-self-center text-center'>
         Interested in working together?
        </h2>
        <p className='homeText mt-2 mb-5 text-center' >
          Email me: <a href="mailto:bmantas@tutanota.com">bmantas@tutanota.com</a> 
        </p>
      </div>
      
    </div>
  )
}

export default Home;