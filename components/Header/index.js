import {HeaderWrapper, AboutContainer, AboutImgWrapper} from './style'
import ParticleContainer from '../ParticleContainer'
import {Description} from '../subComponent'
import {Rotate, Zoom, Slide} from 'react-awesome-reveal';

function Header() {
    return (
        <div className='flex justify-center' id="header">
        <HeaderWrapper id="/">
            <ParticleContainer>
            <div className='flex'>
                <AboutContainer>
                    <Zoom>
                        <Description 
                            title="Kester Smith"
                            type="primary"
                        />
                    </Zoom>
                    <Slide top>
                        <Description
                            title="Full-Stack Developer"
                            type="secondary"
                        />
                    </Slide>
                    <Slide right >
                    <Description
                        title="ordinary developer with spectacular skills"
                        type="extra"
                    />
                    </Slide>
                    <Slide right >
                    <Description
                        title="super clean and well structured code"
                        type="extra"
                    />
                    </Slide>
                </AboutContainer>
                <AboutImgWrapper>
                    <img src="img/about.png"/>
                </AboutImgWrapper>
                </div>
            </ParticleContainer>
        </HeaderWrapper>
        </div>
    )
}

export default Header