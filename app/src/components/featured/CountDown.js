import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

export default class CountDown extends Component {

    state = {
        deadLine: 'Dec, 26, 2020',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getCountDown() {
        const { deadLine } = this.state;
        const time = Date.parse(deadLine) - Date.parse(new Date());
        if(time < 0) {
            console.log('Date passed')
        } else {
            const sec = Math.floor((time/1000) % 60);
            const min = Math.floor((time/1000/60) % 60);
            const hrs = Math.floor((time/(1000*60*60)) % 24);
            const dys = Math.floor(time/(1000*60*60*24));

            this.setState({
                days: dys,
                seconds: sec,
                minutes: min,
                hours: hrs
            });
        }
    }

    componentDidMount() {
        setInterval(() => this.getCountDown(), 1000);
    }
    
    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts In
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {days}
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {hours}
                            </div>
                            <div className="countdown_tag">
                                Hs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {minutes}
                            </div>
                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {seconds}
                            </div>
                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        )
    }
}
