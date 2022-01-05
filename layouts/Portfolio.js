import {PortfolioItem, ParticleWrapper} from '../components/Portfolio'
import {portfolio} from '../context/static'
import {Zoom  } from 'react-awesome-reveal'
import tw from 'twin.macro'
import {
  Container,
  ContentWrapper,
  Title,
} from './style';

function Portfolio() {
    return (
      <Container id="prf">
      <Title>Portfolio</Title>
      <ParticleWrapper>
          <ContentWrapper>
          { portfolio.map((item, index) => (
            <Zoom right key={index}>
            <PortfolioItem
              src={`img/portfolio/${index + 1}.png`}
              title={item.title}
              desc={item.desc}
              url={item.url}
            />
            </Zoom>
          ))}
          </ContentWrapper>
      </ParticleWrapper>
    </Container>
    )
  }

  export default Portfolio