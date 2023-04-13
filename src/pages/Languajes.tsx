import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'
import Main from '../ui-components/templates/Main.ui'

const Languages = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect(()=>{
    setPage('Languages')
  },[])
  
  return (
    <Main>
      <h1>{page}</h1>
    </Main>
  )
}
export default Languages
