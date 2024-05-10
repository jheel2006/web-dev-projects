import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projURL}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projURL} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx" style={{ border: "5px solid #464343", borderRadius: "30px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease" }}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4 style={{ color: "white" }}>{title}</h4>
            <span style={{ color: "white" }}>{description}</span>
          </div>
        </div>
      </a>
      {/* <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>  
          <span>{description}</span>
        </div>
      </div> */}
    </Col>
  )
}
