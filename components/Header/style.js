import tw, {styled} from 'twin.macro'

const HeaderWrapper = styled.div`
    ${tw`bg-blue-500 w-100vw max-w-custom`}
`

const AboutContainer = styled.div`
    ${tw`flex flex-col m-auto`}
`

const AboutImgWrapper = styled.div`
    ${tw``}
`

export {
    HeaderWrapper,
    AboutContainer,
    AboutImgWrapper,
}