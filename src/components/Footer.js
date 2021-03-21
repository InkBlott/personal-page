import '../styles/main.css'
import {NavLink} from 'react-router-dom';

function Footer(){
    return(
        <div className='footer bg-dark'>
            <div class="container">
                        <div class="col-md-12 social">
                    
                            <a href="https://www.facebook.com/ER.Web.Design.Development" target="_blank" title="Emily Ridge, Galway based Freelance Web Designer">sda</a>
                            
                            <a href="https://twitter.com/mlestrnge" target="_blank" title="Emily Ridge, Galway based Freelance Web Designer &amp; Developer on Twitter"><i class="fa fa-twitter"></i></a>
                            
                            <a href="http://google.com/+EmilyridgeIe" target="_blank" title="Emily Ridge, Galway based Freelance Web Designer &amp; Developer on Google Plus"><i class="fa fa-google-plus"></i></a>
                        
                            <a href="http://au.linkedin.com/pub/emily-ridge/33/44b/8a7" target="_blank" title="Emily Ridge, Galway based Freelance Web Designer &amp; Developer on LinkedIn"><i class="fa fa-linkedin"></i></a>
                            
                    </div> 
                </div>
        </div>
    )
}

export default Footer;