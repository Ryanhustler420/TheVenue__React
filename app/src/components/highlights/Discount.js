import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        const {discountEnd, discountStart} = this.state;
        if(discountStart < discountEnd) {
            this.setState({
                discountStart: discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage();
        },30);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Et mollit deserunt fugiat mollit. Tempor culpa eu Lorem amet cupidatat exercitation. Nostrud culpa occaecat incididunt minim proident elit. Quis in laboris commodo exercitation esse deserunt Lorem incididunt nulla reprehenderit excepteur ullamco aliqua veniam. Voluptate nostrud officia proident esse adipisicing.</p>

                            <div>
                                button
                            </div>
                        </div>
                    </Slide>


                </div>
            </div>
        )
    }
}

export default Discount;