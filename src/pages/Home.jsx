import MobileViewImage from "../assets/homepage-image.svg"
import { useMediaQuery } from 'react-responsive'
import { HomeTextBlock } from "../components/HomeText/TextBlock"
import ButtonGradient from "../components/Button/ButtonGradient"
const Homepage = () =>{
  const isMobile = useMediaQuery({
    query: '(max-width: 991px)'
  })
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)'
  })
  return(
    <div className="py-24 bg-purple-white min-h-screen">
        <div className="container">
          <div className="text-center lg:text-left lg:flex items-center lg:flex-row-reverse">
            <div className="md:w-3/5 inline-block">
              <HomeTextBlock  className={`max-w-20 sm:max-w-34 ml-auto lg:text-right`}>
                {isDesktop && <ButtonGradient to="/create" className={"min-w-20 min-h-3"}>
                🎉 Create my event
                </ButtonGradient> }
              </HomeTextBlock>
            </div>
            <div className="lg:w-2/5 max-w-18 md:max-w-19 lg:max-w-full inline-block">
              <img src={MobileViewImage} alt="" className="w-full max-w-27 drop-shadow-custom-1"/>
            </div>
            {isMobile &&
              <div>
                <ButtonGradient to="/create" className={"sm:min-w-20 min-h-3 mt-8"}>
                🎉 Create my event
                </ButtonGradient> 
              </div>
            }
          </div>
        </div>
    </div>
  )
}
export default Homepage;