import styled from 'styled-components'
import Spacing from '../../styles/Spacing'
import Button from '../molecules/Button.ui'
import { Heading_4 } from '../molecules/Headings.us'
import Palette from '../../styles/Palette'
import { useNavigate } from 'react-router-dom'
type NavStyledProps = {
  height?: string
}
const NavStyled = styled.nav<NavStyledProps>`
  height: ${({ height }) => (height ? height : 'min-content')};
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: ${Spacing._6} 0;
`
const Nav = ({ height }: NavStyledProps) => {
  const navigate = useNavigate()
  const handleClick = (whereTo: string): void => {
    navigate(whereTo)
  }
  const buttonsNav: string[] = [
    'Summary',
    'Experience',
    'Languajes',
    'Portfolio',
    'Contact',
  ]
  return (
    <NavStyled height={height}>
      {buttonsNav.map(buttonLabel => (
        <Button
          variant="transparent"
          action={(): void => handleClick(`/${buttonLabel.toLowerCase()}`)}
        >
          <Heading_4
            color={Palette.font._grey}
            text={buttonLabel}
            size={Spacing._5}
          />
        </Button>
      ))}
    </NavStyled>
  )
}
export default Nav
