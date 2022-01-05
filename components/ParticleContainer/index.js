import Particles from 'react-tsparticles'

import {
    ParticleWrapper,
    ContentWrapper,
} from './style'

function ParticleContainer({children, ...res}) {
    
    return (
        <ParticleWrapper {...res}>
            <Particles params={params} className='h-[400px] md:h-full' />
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </ParticleWrapper>
    )
}

const params = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out",
            "speed": 1,
        },
        "line_linked": {
            "enable": false
        }
    },
}
export default ParticleContainer