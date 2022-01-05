import tw, {styled} from 'twin.macro'

const NavMenuWrapper = styled.div`
    ${tw`h-[80px] fixed top-0 z-10 flex justify-between w-full px-5 transition duration-500 lg:px-20 max-w-custom`}
`

const FoxUL = styled.ul`
    ${tw`flex mt-4`}
`

const FoxLink = styled.a`
    ${tw`mx-5 text-white transition cursor-pointer hover:border-b `}
`

const ResponsivePanel = styled.div`
    ${tw`hidden md:flex`}
`

const MobileResponsivePanel = styled.div`
    ${tw`transform duration-300 gap-2 p-5 dark:bg-orange bg-indigo absolute left-0 right-0 flex-col text-center top-[80px] md:hidden`}
`

export {
    NavMenuWrapper,
    FoxUL,
    FoxLink,
    ResponsivePanel,
    MobileResponsivePanel,
}