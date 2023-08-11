import "./card.css";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  let navigate = useNavigate();
  return (
    <>
      {data
        ? data.map((data) => {
            return (
              <div
                className="card"
                key={data.id}
                onClick={() => navigate(`/${data.id}`)}
              >
                <img
                  src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                  alt=""
                />
                <div className="title">
                  <h3>{data.title}</h3>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
}
