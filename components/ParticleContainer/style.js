import tw, {styled} from 'twin.macro'

const ParticleWrapper = styled.div`
    ${tw`relative w-full`}
`

const ContentWrapper = styled.div`
    ${tw`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
`

export {
    ParticleWrapper,
    ContentWrapper,
}