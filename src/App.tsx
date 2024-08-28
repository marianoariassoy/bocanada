import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Novedades from './pages/novedades'

function App() {
  return (
    <Switch>
      <Route
        path='/novedades/:id/:slug'
        component={Novedades}
      />
      <Route component={Home} />
    </Switch>
  )
}

export default App
