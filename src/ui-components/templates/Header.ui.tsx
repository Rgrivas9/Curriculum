import styled from 'styled-components'
import Nav from '../organism/Nav.ui'
import { Heading_1 } from '../molecules/Headings.us'
import Palette from '../../styles/Palette'
import Spacing from '../../styles/Spacing'
//import { usePageContext } from '../../context/page.Context'
type HeaderStyledProps = {
  height?: string
}
const HeaderStyled = styled.header<HeaderStyledProps>`
  height: ${({ height }) => (height ? height : 'min-content')};
  width: 100%;
`
const Header = ({ height }: HeaderStyledProps) => {
  //const { page } = usePageContext()
  return (
    <HeaderStyled height={height}>
      <div><Heading_1 text='Rafael García Rivas' color={Palette.font._grey} size={Spacing._9}/></div>
      <Nav />
    </HeaderStyled>
  )
}
export default Header
