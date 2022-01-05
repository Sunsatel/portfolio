import Card from '../components/Card'
import SpringCard from '../components/SpringCard'
import {Slide} from 'react-awesome-reveal'

import {
  Container,
  ContentWrapper,
  Title,
} from './style';

function AboutMe() {
    return (
      <Container id="about">
        <Title>About Me</Title>
        <Slide left>
        <ContentWrapper>
          <SpringCard>
            <Card title="Education">
              <p>
                I graduated from Universidad del Cauca with a bachelor degree in computer sciense.
                I set my first step as a web deveoper when I was a student, I really enjoyed taking part time job online in my spare time.
                Kent C. Dodds is one of my favourite teachers and I'm the best student of him.
                He gave me enormous knowledges on React. I've great attemption to follow his coding style because those're excellent.
              </p>
            </Card>
          </SpringCard>
          <SpringCard>
            <Card title="Experience">
              <p>
                After graduation from college, I've been working at software security company, where I was responsible for keeping up with the latest algorithms and optimization.
                As a programming engineer based on solid and stable algorithm, I started off web development and make tons of successes.
              </p>
            </Card>
          </SpringCard>
          <SpringCard>
            <Card title="Personality">
              <p>
                Being specialized various kinds of programming languages from unlimited challenges,
                I always produce super clean and well structured code. I've been through so many harsh obstacles that I had to overcome so I'm strong and confident for long term job.
                I'm not a gold-chaser. What I mean by that I'm working not just for money but for good reputation.
                You feel easy to work with me without any anxieties.
              </p>
            </Card>
          </SpringCard>
        </ContentWrapper>
        </Slide>
      </Container>
    )
  }

  export default AboutMe