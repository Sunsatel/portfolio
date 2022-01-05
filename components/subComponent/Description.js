import tw, {styled} from 'twin.macro'

function Description({title, ...type}) {

    return (
        <DescriptWrapper {...type} >
            <h1>
                {title}
            </h1>
        </DescriptWrapper>
    )
}

const DescriptWrapper = styled.div(({type="primary"}) => [
    type === 'primary' && tw`text-5xl font-bold text-white`,
    type === 'secondary' && tw`text-xl font-bold text-dark dark:text-gray-500`,
    type === 'extra' && tw`font-medium text-white uppercase`,
    type === 'lighter' && tw`font-thin text-gray-500`,
    'font-poppins',
])

export default Description