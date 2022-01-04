import {CardContainer} from './style'
import tw from 'twin.macro'

function Card ({title, children}) {
    return (
        <CardContainer>
            <h1 tw="text-center font-semibold">{title}</h1>
            <div tw="pt-5">
                {children}
            </div>
        </CardContainer>
    )
}

export default Card