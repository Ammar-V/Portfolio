import { Link } from 'react-router-dom'

const ProjectTile = (props) => {

  const title = props.data.title;
  const img = props.data.img;
  const altText = props.data.altText;

  return ( 
    <div className="project-tile">
      <Link to="/project">
        <div className="tile-content">
          <img className="project-thumbnail" src={img} alt={altText}/>
          <p>{title}</p>
        </div>
      </Link>
    </div>
   );
}
 
export default ProjectTile;