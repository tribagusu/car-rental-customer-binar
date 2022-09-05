import "./style.css"

//# components
import DetailPaketCard from "./DetailPaketCard/index"
import DetailCarCard from "./DetailCarCard"

const DetailCarResult = (props) => {
  return (
    <section className="detail__section">
      <div className="detail__hero"></div>
      <div className="detail__result__container">
        <div className="detail__result__info">
          <DetailPaketCard />
        </div>
        <DetailCarCard {...props} />
      </div>
    </section>
  )
}

export default DetailCarResult
