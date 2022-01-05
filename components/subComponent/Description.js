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
    type === 'primary' && tw`text-xl font-bold text-white lg:text-5xl`,
    type === 'secondary' && tw`text-sm font-bold lg:text-base lg:text-xl text-dark dark:text-gray-500`,
    type === 'extra' && tw`text-xs text-white uppercase lg:font-medium`,
    type === 'lighter' && tw`text-xs font-thin text-gray-500`,
    'font-poppins',
])

export default Description