import './App.css'
import EducationExperience from './components/EducationExperience'
import GeneralInfo from './components/GeneralInfo'
import PracticalExperience from './components/PracticalExperience'

function App() {

  return (
    <>
      <h1>CV Generator</h1>
      <GeneralInfo />
      <br />
      <br />
      <br />
      <EducationExperience />
      <br />
      <br />
      <br />
      <PracticalExperience />
    </>
  )
}

export default App
