import { Routes,Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Support from './components/Support'
import Home from './components/Home'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Filters from './components/Filters'
import MainSearch from './components/MainSearch'
import SearchLoading from './components/SearchLoading'
function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='movies' element={<Main/>}></Route>
        <Route path='movies/adventure' element={<Filters props="12"/>}></Route>
        <Route path='movies/action' element={<Filters props="28"/>}></Route>
        <Route path='movies/animation' element={<Filters props="16"/>}></Route>
        <Route path='movies/drama' element={<Filters props="18"/>}></Route>
        <Route path='movies/si-fi' element={<Filters props="878"/>}></Route>
        <Route path='movies/romance' element={<Filters props="10749"/>}></Route>
        <Route path='movies/crime' element={<Filters props="80"/>}></Route>
        <Route path='movies/thriller' element={<Filters props="53"/>}></Route>
        <Route path='movies/fantasy' element={<Filters props="14"/>}></Route>
        <Route path='movies/tv-movie' element={<Filters props="10770"/>}></Route>
        <Route path='movies/western' element={<Filters props="37"/>}></Route>
        <Route path='movies/family' element={<Filters props="10751"/>}></Route>
        <Route path='movies/war' element={<Filters props="10752"/>}></Route>
        <Route path='movies/history' element={<Filters props="36"/>}></Route>
        <Route path='movies/comedy' element={<Filters props="35"/>}></Route>
        <Route path='movies/documentary' element={<Filters props="99"/>}></Route>
        <Route path='support' element={<Support/>}></Route>
        <Route path='/search/results' element={<MainSearch/>}></Route>
        <Route path='/search/loading...' element={<SearchLoading/>}></Route>
      </Routes>

    </div>
  )
}

export default App
