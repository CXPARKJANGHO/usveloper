import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function (tooltipsItem, data) {
                return numeral(tooltipsItem.value).format('+0,0');
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: 'time',
                time: {
                    format: 'MM/DD/YY',
                    tooltipFormat: 'li',
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format('0a');
                    },
                },
            },
        ],
    },
};

//* 그래프작성처리
const buildChartData = (data, casesType = 'cases') => {
    let chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
        // data[casesType].forEach((date) => {
        // });
    }
    return chartData;
};

function LineGraph({ casesType = 'cases', ...props }) {
    const [data, setData] = useState({});

    //* https://disease.sh/v3/covid-19/historical/all?lastdays=30
    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                'https://disease.sh/v3/covid-19/historical/all?lastdays=120'
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let chartData = buildChartData(data, casesType);
                    setData(chartData);
                    // console.log(chartData);
                });
        };
        fetchData();
    }, [casesType]);

    return (
        <div className={props.className}>
            {/* data: [{x: number, y: number}] */}
            {/* data가 존재하는가 */}
            {data?.length > 0 && (
                <Line
                    options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: 'rgba(204,16,52,0.5)',
                                borderColor: '#CC1034',
                                data: data,
                            },
                        ],
                    }}
                />
            )}
        </div>
    );
}

export default LineGraph;
