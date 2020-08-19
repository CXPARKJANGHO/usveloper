import React, { useState, useEffect } from 'react';
import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent,
} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData, prettyPrintStat } from './util';
import LineGraph from './LineGraph';
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
    //* useState
    //* 첫번째 파라미터: State값, 두번째 파라미터: State설정함수
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('WorldWide');
    const [countryInfo, setCountryInfo] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({
        lat: 34.80746,
        lng: -40.4796,
    });
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState('cases');

    //* useEffect
    //* 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
    //* 만약 화면에 가장 처음에 렌더링 될 땨 한번만 실행하고 싶은경우, 두번째 파라미터로 []를 넣어준다.
    //* "https://disease.sh/v3/covid-19/countries"
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            });
    }, []);

    //* 복수개 선언가능
    useEffect(() => {
        //* async: send a request, wait for it, do something
        const getCountriesData = async () => {
            await fetch('https://disease.sh/v3/covid-19/countries')
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                    }));

                    //* sortedData: 정렬된 data[]
                    const sortedData = sortData(data);
                    setTableData(sortedData);
                    console.log('Data: ', data);
                    //* data[]: [data]
                    setMapCountries(data);
                    //* countries[]: Object{name, value}
                    setCountries(countries);
                    console.log('countries: ', countries);
                });
        };
        getCountriesData();
    }, []);

    console.log('CasesType: ', casesType);

    //* onChange
    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        console.log('countryCode: ', countryCode);
        // setCountry(countryCode);

        //* https://disease.sh/v3/covid-19/countries
        //* https://disease.sh/v3/covid-19/countries/{COUNTRY_CODE}
        const url =
            countryCode === 'WorldWide'
                ? 'https://disease.sh/v3/covid-19/all'
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //* countryCode:
                setCountry(countryCode);
                //* data:
                setCountryInfo(data);
                console.log('Data: ', data);
                //* lat, long: 경도, 위도
                if (countryCode !== 'WorldWide') {
                    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                }
                //* Zoom: 기본값(4)
                setMapZoom(4);
            });
    };

    // console.log('CountryInfo : ', countryInfo);

    return (
        <div className="app">
            <div className="app__left">
                <div className="app__header">
                    <h1>Covid-19-Tracker</h1>
                    <FormControl className="app__dropdown">
                        <Select
                            variant="outlined"
                            value={country}
                            onChange={onCountryChange}
                        >
                            {/*  DropDown초기표시: WorldWide */}
                            <MenuItem value="WorldWide">WorldWide</MenuItem>
                            {countries.map((country) => (
                                <MenuItem
                                    value={country.value}
                                    key={country.name}
                                >
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                {/* InfoBox */}
                <div className="app__stats">
                    <InfoBox
                        isRed
                        active={casesType === 'cases'}
                        onClick={(e) => setCasesType('cases')}
                        title="Coronavirus cases"
                        cases={prettyPrintStat(countryInfo.todayCases)}
                        total={prettyPrintStat(countryInfo.total)}
                    />
                    <InfoBox
                        active={casesType === 'recovered'}
                        onClick={(e) => setCasesType('recovered')}
                        title="Recovered"
                        cases={prettyPrintStat(countryInfo.todayRecovered)}
                        total={prettyPrintStat(countryInfo.recoverd)}
                    />
                    <InfoBox
                        isRed
                        active={casesType === 'deaths'}
                        onClick={(e) => setCasesType('deaths')}
                        title="Deaths"
                        cases={prettyPrintStat(countryInfo.todayDeaths)}
                        total={prettyPrintStat(countryInfo.deaths)}
                    />
                </div>
                {/*  Map표시 */}
                <Map
                    casesType={casesType}
                    countries={mapCountries}
                    center={mapCenter}
                    zoom={mapZoom}
                />
            </div>

            <Card className="app__right">
                <CardContent>
                    <div className="app__information">
                        <h3>Live Cases by Country</h3>
                        <Table countries={tableData} />
                        <h3 className="app__graphTitle">
                            WorldWide new {casesType}
                        </h3>
                        <LineGraph
                            className="app__graph"
                            casesType={casesType}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default App;
