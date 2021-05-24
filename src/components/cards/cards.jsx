import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './cards.modules.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return "loading ding ding"
    }
    return(
        <div className={styles.container}>
            <h1 id="heading">Covid-19 Report<br></br>Kenya</h1>
            <p id="headingDate">{new Date(lastUpdate).toDateString()}</p>
            <Grid container spacing={4} justify="center">  
                <Grid item component={Card} xs={12} md={3} lg={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected cases</Typography>
                        <Typography variant="h5"><CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={3}
                        seperator="."
                        /></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}xs={12} md={3} lg={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered cases</Typography>
                        <Typography variant="h5"><CountUp 
                        start={0}
                        end={recovered.value}
                        duration={3}
                        seperator="."
                        /></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}xs={12} md={3} lg={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp 
                        start={0}
                        end={deaths.value}
                        duration={3}
                        seperator="."
                        /></Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
        
    )
}
export default Cards;