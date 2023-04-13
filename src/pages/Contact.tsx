import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'
import Main from '../ui-components/templates/Main.ui'

const Contact = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect(()=>{
    setPage('Contact')
  },[])
  
  return (
    <Main>
      <h1>{page}</h1>
    </Main>
  )
}
export default Contact
