import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Menu />
    </>
  )
}

export default Layout
