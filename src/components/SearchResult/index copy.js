// import "./style.css";
// import { Link } from "react-router-dom";

// const SearchResult = (props) => {
//   const { data, ButtonPilih, noImage } = props;
//   const toCurrency = (number, currency, lang = undefined) =>
//     Intl.NumberFormat(lang, { style: "currency", currency }).format(number);

//   return (
//     <div className="search-result__section">
//       <div className="search-result__container">
//         {!!data.length &&
//           data.map((item) => (
//             <div className="search-result__cards">
//               <div>
//                 <img src={item.image} />
//                 <div className="search-result__cards__info">
//                   <h1>{item.name}</h1>
//                   <p>{item.price} / hari</p>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Ipsa accusamus doloribus quam veniam eligendi sed?
//                   </p>
//                 </div>
//                 <div className="search-result__cards__button">
//                   <Link to={`/detailmobil/${item.id}`}>{ButtonPilih}</Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResult;
