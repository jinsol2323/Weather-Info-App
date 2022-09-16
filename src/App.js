import {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱실행 > 현재 위치 기반의 날씨 정보 나타내기
//2. 날씨 정보에는 도시,섭씨/화씨, 날씨 상태
//3. 5개 버튼 (1개는 현재 위치/4개는 다른 도시)
//4. 도시 버튼을 클릭할 때 마다 도시별 날씨 나옴
//5. 현재위치 버튼 > 다시 현재 위치 기반의 날씨가 나옴
//6. 데이터를 가져오는 동안은 로딩 스피너가 보이게 셋팅

function App() {

  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState('');
  const cities =['Seoul','Paris','New york', 'Tokyo'];
  const [loading,setLoading] = useState(false);  

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치",lat,lon)

      getWeatherByCurrentLocation(lat,lon)
    });
  };


  //async > 비동기 처리 > await
  //api는 대부분 json 
  //response에서 json file 추출하기
  const getWeatherByCurrentLocation = async(lat,lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6933ef6dd64930619ebe5265b6155a3&units=metric`;
    setLoading(true);
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  const getWeatherBycity= async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6933ef6dd64930619ebe5265b6155a3&units=metric`
    setLoading(true);
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  useEffect(()=>{
    if(city==''){
      getCurrentLocation();
    }else{
      getWeatherBycity();
    }

  },[city])


  return (
    <div>
      {loading?<div className='container'>
                  <ClipLoader color='#f88c6b' loading={loading} size={150} />
                </div>:
              <div className='container'>
                <div className='weatherInfoTitle'>날씨 정보</div>
                <WeatherBox weather={weather}/>
                <WeatherButton cities={cities} setCity={setCity}/>
              </div>}
    </div>
  );
}

export default App;
