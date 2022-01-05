import tw, {styled} from 'twin.macro'

const HeaderWrapper = styled.div`
    ${tw`bg-blue-500 dark:bg-lightgrey w-100vw h-[400px] md:h-full max-w-custom`}
`

const AboutContainer = styled.div`
    ${tw`flex flex-col w-3/5 m-auto lg:w-1/2`}
`

const AboutImgWrapper = styled.div`
    ${tw`w-2/5 lg:w-1/2`}
`

export {
    HeaderWrapper,
    AboutContainer,
    AboutImgWrapper,
}