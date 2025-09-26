import './App.css'
import './Entry.css'
import Entry from './components/Entry'
import Header from './components/Header'
import data_travel from './data_travel'

function App() {
  
  const entry_array = data_travel.map((travel_unit) => {
      return <Entry 
        image={travel_unit.img}
        title={travel_unit.title}
        country={travel_unit.country}
        maps_link={travel_unit.googleMapsLink}
        dates={travel_unit.dates}
        text={travel_unit.text}/>
  })


  return (
    <>
      <Header/>
      {entry_array}
    </>
  )
}

export default App
