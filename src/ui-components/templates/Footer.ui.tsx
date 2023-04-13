import styled from 'styled-components'
import Palette from '../../styles/Palette'
type FooterStyledProps = {
  height?: string
}
const FooterStyled = styled.footer<FooterStyledProps>`
  height: ${({ height }) => (height ? height : 'max-content')};
  width: 100%;
  background-color: ${Palette.footer};
`
const Footer = ({ height }: FooterStyledProps) => {
  return <FooterStyled height={height}></FooterStyled>
}
export default Footer
