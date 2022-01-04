import {Container, Title} from './style'
import tw, {styled} from 'twin.macro'

function ContactMe() {
    return (
        <Container id="contact">
            <Title>Contact with Me</Title>
            <Wrapper>
                <p><addr>kester@outlook.com</addr></p>
                <p><addr>kester@gmail.com</addr></p>
                <br/>
                <p>I'll always welcome. I'm waiting even very late at night.</p>
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
    ${tw`mt-5 text-center`}
`

export default ContactMe