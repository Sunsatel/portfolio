import tw, {styled} from 'twin.macro'

const NavMenuWrapper = styled.div`
    ${tw`fixed top-0 z-10 flex justify-between w-full px-20 transition duration-500 max-w-custom`}
`

const FoxUL = styled.ul`
    ${tw`flex mt-4`}
`

const FoxLink = styled.a`
    ${tw`mx-5 text-white transition cursor-pointer hover:border-b `}
`

export {
    NavMenuWrapper,
    FoxUL,
    FoxLink,
}