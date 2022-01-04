import tw, {styled} from 'twin.macro'

const ItemWrapper = styled.div`
    ${tw`p-1 uppercase transition duration-500 border-2 opacity-50 bg-opacity-20 text-dark border-secondary bg-dark hover:opacity-100 hover:scale-110 `}
`

const ItemContent = styled.div`
    ${tw`flex justify-between`}
`

export {ItemWrapper, ItemContent}