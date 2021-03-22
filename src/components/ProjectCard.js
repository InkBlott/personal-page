import img from '../images/battleships.png'

function ProjectCard(props) {
    return(
        <div className="card text-white mb-4 cFoto">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <h2>{props.title}</h2>
                <div className='card-masked'>
                    <p>
                        {props.info}
                    </p>
                </div>
                
                <img className="card-img-top" src={props.image} alt="Project"></img>
                </a>
        </div>
    )
    
}

export default ProjectCard;