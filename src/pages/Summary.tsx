import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'
import Main from '../ui-components/templates/Main.ui'

const Summary = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect(()=>{
    setPage('Summary')
  },[])
  
  return (
    <Main>
      <h1>{page}</h1>
    </Main>
  )
}
export default Summary
