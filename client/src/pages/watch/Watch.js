import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const video = new URLSearchParams(location.search).get("video");

  if (!video) {
    return <div>No video available</div>;
  }
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <ReactPlayer width="100%" height="100%" url={video} />
      {console.log(video)}
      {/* <video className="video" autoPlay progress controls src={video} /> */}
    </div>
  );
}