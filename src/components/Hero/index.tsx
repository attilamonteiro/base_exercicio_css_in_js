// src/components/Hero/index.tsx
import { HeroContainer, Overlay, HeroContent, HeroTitle } from './Hero.styles'

const Hero = () => (
  <HeroContainer>
    <Overlay />
    <div className="container">
      <HeroContent>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </HeroContent>
    </div>
  </HeroContainer>
)

export default Hero
