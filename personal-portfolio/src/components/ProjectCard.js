import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projURL = "https://www.youtube.com/watch?v=hYv6BM2fWd8"  }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projURL} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
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
