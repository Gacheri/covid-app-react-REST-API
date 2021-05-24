import React, { useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line } from 'react-chartjs-2';
import styles from './charts.modules.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);

        fetchAPI();
    });

    const lineChart = (
        dailyData
        ?(
        <Line 
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths})=>deaths),
                    label:'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }],
            }}
        />
        ): null
    );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;