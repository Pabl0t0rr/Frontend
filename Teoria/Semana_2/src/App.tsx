
import './App.css'
import Hello from './components/hello'

const MiFuncion = () => {
  return (
    <div className="mainContainer">
      <h1>Pedazo de título increíble</h1>
      <Hello name='Paqui'/> {/* Se puede aca ar como este caso o cerrando el componente ejemplo: <Hello name='Paqui'></Hello> */}
    </div>
  )
}

export default MiFuncion