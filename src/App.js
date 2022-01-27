import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from './components/Filter/Filter'
import Episodes from './Pages/Episodes'
import Location from './Pages/Location'
import Navbar from './components/Navbar/Navbar'

function Home() {
  let [fetchedData, setFetchedData] = useState([])
  let [pageNumber, setPageNumber] = useState(1)
  let [search, setSearch] = useState('')
  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')
  let { info, results } = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const abortController = new AbortController()
    async function getData() {
      try {
        let response = await fetch(api).then(res => res.json())
        setFetchedData(response)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    return () => abortController.abort()
  }, [api])

  return (
    <>
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
