import Particles from "react-particles-js";
import {ItemWrapper, ItemContent} from './style'

function PortfolioItem({...props}) {
    return (
      <ItemWrapper>
        <div className="flex ">
          <img src={props.src} className="block h-auto"/>
        </div>
          <ItemContent>
          <div>{props.title}</div>
          <div>{props.desc}</div>
        </ItemContent>
      </ItemWrapper>
    )
}

function ParticleWrapper({children}) {
    return (
        <div className="relative">
        <Particles
          params={param}
        />
      <div className='absolute top-0'>
          {children}
      </div>
    </div>
    )
}

const param = {
  particles: {
    color: {
      value: "#000000"
    },
    line_linked: {
      color: {
        value: "#000000"
      }
    },
    move: {
      speed: 5,
    },
    number: {
      value: 50
    },
    size: {
      value: 3
    }
  }
}

export {PortfolioItem, ParticleWrapper}