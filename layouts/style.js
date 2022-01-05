import tw, {styled} from 'twin.macro'

const Title = styled.div(({type = "primary"}) => [
    tw`p-0 m-0 text-3xl font-bold text-center uppercase`,
    type === "sub" && tw`pb-3 text-sm text-left`
])

const Container = styled.div`
    ${tw`w-full py-20 border-b border-secondary`}
`

const ContentWrapper = styled.div`
    ${tw`grid grid-cols-1 gap-10 pt-5 m-auto mt-5 lg:grid-cols-3`}
`

export {
    Container,
    ContentWrapper,
    Title,
}