import React from 'react';
import {Cards, Chart} from './components';
import styles from './App.modules.css';
import { fetchData } from './api/index'

class App extends React.Component{
    state = {
        data: {},
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }
    render (){

        const { data }= this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <Chart />
            </div>
        )
    }
}
export default App;