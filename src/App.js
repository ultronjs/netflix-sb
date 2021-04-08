import './App.css';
import Row from './Row.js'
import requests from './requests.js'
import Banner from './Banner.js'
import Nav from './Nav.js'


function App() {

  


  return (
    <div className="App">
      {/* {Nav} */}
      <Nav />
      {/* {Banner} */}
      <Banner />

      {/* {Rows} */}
      <Row title ="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
