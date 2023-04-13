import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'
import Main from '../ui-components/templates/Main.ui'

const Portfolio = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect(()=>{
    setPage('Portfolio')
  },[])
  
  return (
    <Main>
      <h1>{page}</h1>
    </Main>
  )
}
export default Portfolio
