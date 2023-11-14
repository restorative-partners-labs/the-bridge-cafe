import { useEffect } from 'react'

const Redirect = () => {
  useEffect(() => {
    // Replace 'https://example.com' with the external URL you want to redirect to.
    window.location.href = 'https://order.toasttab.com/online/the-bridge-cafe'
  }, [])

  return null
}

export default Redirect

export async function getServerSideProps() {
  return {
    // You can optionally add props here if needed.
    props: {},
  }
}
