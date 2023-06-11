const ProjectTile = (props) => {

  const title = props.data.title;
  const img = props.data.img;
  const altText = props.data.altText;
  console.log(`IM HERE with ${title}`);

  return ( 
    <div className="project-tile">
      <a href="/">
        <div className="tile-content">
          <img className="project-thumbnail" src={img} alt={altText}/>
          <p>{title}</p>
        </div>
      </a>
    </div>
   );
}
 
export default ProjectTile;