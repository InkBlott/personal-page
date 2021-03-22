import '../styles/main.css'
import gitIcon from '../images/githubIcon.png'

function Footer(){
    return(
        <div className='footer bg-dark'>
            <div class="container">
                        <div class="col-md-12 social text-center">

                            <a href="https://github.com/InkBlott" className='gitIcon' target="_blank" rel="noopener noreferrer">
                                <img src={gitIcon} alt='GitHub Icon'></img>
                            </a>
                            
                    </div> 
                </div>
        </div>
    )
}

export default Footer;