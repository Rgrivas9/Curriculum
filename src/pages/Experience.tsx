import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'
import Main from '../ui-components/templates/Main.ui'

const Experience = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect(()=>{
    setPage('Experience')
  },[])
  
  return (
    <Main>
      <h1>{page}</h1>
    </Main>
  )
}
export default Experience
