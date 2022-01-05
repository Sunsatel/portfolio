import Particles from "react-tsparticles";
import {ItemWrapper, ItemContent} from './style'
import {useTheme} from 'next-themes'

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
  const {theme} = useTheme()
  
  return (
      <div className="relative">
      <Particles
        params={theme==='light' ? whiteParam : darkParam}
      />
    <div className='absolute top-0'>
        {children}
    </div>
  </div>
  )
}

const whiteParam = {
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

const darkParam = {
  particles: {
    color: {
      value: "#FFFFFF"
    },
    line_linked: {
      color: {
        value: "#FFFFFF"
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