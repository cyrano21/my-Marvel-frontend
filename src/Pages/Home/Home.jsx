// import { useEffect, useState } from "react";
// import "./home.css";
// import axios from "axios";
// import Card from "../../components/Card";

// export default function Home() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [url, setUrl] = useState(
//     "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bf7d660d45d569f633c11dc12f6c40c6&hash=16b0bdafe05459abe499624b31905de3"
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         // console.log(response.data.data);
//         setData(response.data.data.results);
//       } catch (error) {
//         return console.log(error.message);
//       }
//     };
//     fetchData();
//   }, [url]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/marvel/comics"
//         ); // Remplacer par l'URL de votre backend
//         setData(response.data);
//       } catch (error) {
//         return console.log(error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   const searchMarvel = () => {
//     setUrl(
//       `http://gateway.marvel.com/v1/public/comics?nameStartsWith=${search}&ts=1&apikey=bf7d660d45d569f633c11dc12f6c40c6&hash=16b0bdafe05459abe499624b31905de3`
//     );
//   };

//   return (
//     <>
//       <div className="header">
//         <div>
//           <img src="../../Images/bg.png" alt="background" />
//         </div>
//         <div className="search-bar">
//           <img src="../../Images/logo.jpg" alt="logo" />
//           <input
//             type="search"
//             name=""
//             id=""
//             placeholder="search here"
//             className="search"
//             onChange={(e) => {
//               setSearch(e.target.value);
//             }}
//             onKeyPress={(e) => {
//               if (e.key === "enter") searchMarvel();
//             }}
//           />
//         </div>
//       </div>
//       <div className="content">
//         {data.length === 0 ? <p>Not found</p> : <Card data={data} />}
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import Card from "../../components/Card";
import bgImage from "../../Images/bg.png"; // Import local images
import logoImage from "../../Images/logo.jpg";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const BASE_BACKEND_URL = "http://localhost:3000/api/marvel/comics";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_BACKEND_URL);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const searchMarvel = async () => {
    try {
      const response = await axios.get(BASE_BACKEND_URL, {
        params: {
          nameStartsWith: search,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="header">
        <div>
          <img src={bgImage} alt="background" />
        </div>
        <div className="search-bar">
          <img src={logoImage} alt="logo" />
          <input
            type="search"
            placeholder="search here"
            className="search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") searchMarvel();
            }}
          />
        </div>
      </div>
      <div className="content">
        {data.length === 0 ? <p>Not found</p> : <Card data={data} />}
      </div>
    </>
  );
}
