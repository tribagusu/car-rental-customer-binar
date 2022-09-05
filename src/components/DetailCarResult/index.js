import "./style.css"

//# components
import HeaderHero from "../Payment/HeaderHero"
import DetailPaketCard from "./DetailPaketCard/index"
import DetailCarCard from "./DetailCarCard"

const DetailCarResult = (props) => {
  return (
    <>
      <HeaderHero />
      <div className="detail__result__container">
        <DetailPaketCard />
        <DetailCarCard {...props} />
      </div>
    </>
  )
}

export default DetailCarResult
