import tw, {styled} from 'twin.macro'
import {
  AboutMe, Portfolio, Skill, ContactMe
} from '../layouts'

export default function Home() {
  return (
    <HomeWrapper>
      <AboutMe/>
      <Portfolio/>
      <Skill/>
      <ContactMe/>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
    ${tw`px-20 m-auto bg-white max-w-custom font-poppins text-dark dark:bg-secondary dark:text-white`}
`



