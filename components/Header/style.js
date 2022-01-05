import tw, {styled} from 'twin.macro'

const HeaderWrapper = styled.div`
    ${tw`bg-blue-500 dark:bg-lightgrey w-100vw h-[400px] md:h-full max-w-custom`}
`

const AboutContainer = styled.div`
    ${tw`flex flex-col w-4/5 m-auto lg:w-2/3`}
`

const AboutImgWrapper = styled.div`
    ${tw`w-1/5 lg:w-1/3`}
`

export {
    HeaderWrapper,
    AboutContainer,
    AboutImgWrapper,
}