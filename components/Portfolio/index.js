import Particles from "react-tsparticles";
import {ItemWrapper, ItemContent} from './style'
import {useTheme} from 'next-themes'
import Link from 'next/link'

function PortfolioItem({...props}) {
    return (
      <ItemWrapper>
      <Link href={props.url}>
      <a href={props.url}>
          <div className="flex ">
            <img src={props.src} className="block h-auto"/>
          </div>
            <ItemContent>
            <div>{props.title}</div>
            <div>{props.desc}</div>
          </ItemContent>
        </a>
      </Link>
      </ItemWrapper>
    )
}

function ParticleWrapper({children}) {
  const {theme} = useTheme()
  
  return (
    <div className="relative">
      <div className="top-0 lg:absolute ">
          {children}
      </div>
      <div className="z-auto hidden w-full h-full lg:block">
        <Particles
          params={theme==='light' ? whiteParam : darkParam}
        />
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