import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import BestMovies from './components/BestMovies';
import AllMovies from './components/AllMovies';
import { useEffect, useState } from 'react';
import MoviePage from './views/MoviePage';


const initialMovieList = [
  {name: 'Blibaba', discription: 'a very good movie', imageUrl:
   'https://third-ear.com/wp-content/uploads/2022/10/00034433_01.jpg',
   rating: [4,5,6,5,4,3]
  },
  {name: 'Aladin', discription: 'it is in iran', imageUrl:
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqMz5jPFTIEwmMnoZeC_okixalG_BMyWYsA&usqp=CAU',
   rating: [1,1,2,3,4]
  },
  {name: 'Erkules', discription: 'interesting and scary', imageUrl:
  'https://simania.co.il/bookimages/covers0/338.jpg',
  rating: [3,5,6,7,4]
  },
  {name: 'F101 dogs', discription: 'a very boaring movie', imageUrl:
  'https://img.mako.co.il/2019/01/06/waltdisenytarbutiom_1_g.jpg',
  rating: [1,2,2,3,4,5,]
  },
  {name: 'C-Lion-King', discription: 'best movie ever', imageUrl:
  'https://img.mako.co.il/2019/01/06/waltdisenytarbutiom_7_g.jpg',
   rating: [1,3,4,5]
  }
]


function App() {
  const [movieList , setMovieList] = useState(initialMovieList)
  // const [bestRated, setBestRated] = useState([])
  // const [listByName, setListByName] = useState([])

const ratingAvareg = (ratingArr) =>{
  let sum = 0
ratingArr.forEach((val) => {sum += val})
let avg = sum / ratingArr.length
return avg
}
useEffect(() =>{
  calcAverage(movieList)
    }, [])
//  
// const sortByRating = (movieList) =>{
let sortByRating = movieList.sort((a,b) => b.avg-a.avg)
let topThree = sortByRating.slice(0 , 3)
// setBestRated(topThree)


// const sortByName = (movieList) =>{
  let listByName = movieList.slice().sort((a,b) => a.name.localeCompare(b.name))
//  setListByName(sorted);
console.log(listByName);

const getMovieByName = (movieName) =>{
const movieToReturn = movieList.find((movie) => movie.name === (movieName))
return movieToReturn;
}  

const calcAverage = (movieList) => {
  const listCopy = [...movieList]
  listCopy.map((movie) => {
  movie.avg =  ratingAvareg(movie.rating)
  })
  setMovieList(listCopy)
  console.log(movieList);
}

const addRateToArr = (movieName, rate) =>{
  const listCopy = [...movieList];
  const indexToEdit = listCopy.findIndex((movie) => movie.name === movieName)
  listCopy[indexToEdit].rating.push(rate)
  console.log(listCopy[indexToEdit].rating);
  calcAverage(listCopy)

}
  return (
    <div className="App" >
       <h1>Movie Rate</h1>  
       <h4>***Top Three***</h4>  
      <BestMovies topThree={topThree}/>
      <div style={{display: 'flex' , gap: '15px', justifyContent: 'space-between'}}>  
      <Routes>
        <Route path='/' element={<HomePage topThree={topThree}/>}/>
        <Route path='/:movieName' element={<MoviePage getMovieByName={getMovieByName} addRateToArr={addRateToArr}/>} />
      </Routes>
      <AllMovies listByName={listByName}/>
      </div>
    </div>
  );
}

export default App;
