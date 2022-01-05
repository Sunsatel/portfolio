import tw, {styled} from 'twin.macro'
import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import {Slide} from 'react-awesome-reveal'
import 'chart.js/auto';
Chart.register(ArcElement);

import {
    Container,
    Title,
} from './style';


function Skill() {
    return (
        <Container id="skill">
        <Title>s k i l l</Title>
        <Slide left>
          <ContentWrapper>
            <SkillComment/>
          </ContentWrapper>
        </Slide>
        <Slide right>
          <ContentWrapper>
            <SkillProgress/>
          </ContentWrapper>
        </Slide>
      </Container>
    )
}

function SkillComment() {
  return (
    <div tw="w-full md:w-2/5">
      <Title type="sub">Top notch Developer</Title>
      <Title type="sub">super clean and well-structured coding style</Title>
      <p>
        I promise you the best technical support for extensive fields
        If there maybe a good idea with you, please contact me.
        Visualizing your idea, that's my job and I'll always welcome you.
      </p>
    </div>
  )
}

function SkillProgress() {
  return (
    <SkillProContainer>
      <Bar
          data={data}
          width={400}
          height={200}
      />
    </SkillProContainer>
  )
}

const SkillProContainer = styled.div`
  ${tw`w-full md:w-3/5`}
`

const data = {
  labels: ['React/Next.js', 'Node Express', 'Django', 'DBManage', 'UI', 'WDK/NDIS', 'C++', 'Java / Python'],
  datasets: [{
    label: 'Ability Chart',
    data: [85, 53, 62, 36, 87, 48, 95, 43],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(31, 159, 64, 0.2)',
      'rgba(31, 87, 152, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(31, 159, 64, 1)',
      'rgba(31, 87, 152, 1)',
    ],
    borderWidth: 1
  }]
}

const ContentWrapper = styled.div`
  ${tw`flex justify-center pt-10 m-auto`}
`

export default Skill