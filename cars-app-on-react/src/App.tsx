import './App.css';
import CarList from './components/CarList';
import FormOfCars from './components/FormOfCars';
import FormOfSales from './components/FormOfSales';

function App() {
  return (
    <div className="App">
      <div className="separator">
        <svg className="separator" width="100%" height="120" viewBox="0.1 0.1 180 40" preserveAspectRatio="none">
          <g transform="translate(-18.298844,-77.973964)">
            <path style={{fill: '#0a5cad'}}
                  d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"/>
            <path style={{fill: '#0A5CADFF'}}
                  d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"/>
          </g>
        </svg>
      </div>
      <div>
        <CarList/>
      </div>
    <div style={{margin: '100px'}}>
    <FormOfCars/>
    </div>
      <div className="separator">
        <svg className="separator" xmlns="http://www.w3.org/2000/svg" width="100%" height="166.61502"
             viewBox="0.4 0.2 200 44" preserveAspectRatio="none">
          <g className="separator" transform="translate(-9.2218046,-83.494585)">
            <path style={{fill: '#0A5CADFF'}}
                  d="M 9.484815,89.716055 H 209.81018 V 126.90507 L 110.46368,93.705147 9.579391,127.39334 Z"/>
            <path style={{fill: '#0A5CADFF'}}
                  d="M 9.3544335,83.626877 H 209.68181 V 120.29057 L 110.46368,93.705147 9.4490103,120.77195 Z"/>
          </g>
        </svg>
      </div>
      <div style={{margin: '100px'}}>
        <FormOfSales/>
      </div>
    </div>
  );
}

export default App;

