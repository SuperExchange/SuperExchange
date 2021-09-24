import { plot } from "plotly.js";
import React from "react";
import Plot from "react-plotly.js";

class Plotly extends React.Component {

    render() { 
        return ( 
            <div>
                
                <Plot data={[
                    {type: "scatter",
                        x:["10:59 PM", "11:59 PM", "12:59 AM", "1:59 AM", "2:59 AM", "3:59AM","4:59AM", "5:59AM", "6:59AM", "7:59AM"],
                        y:[3000,3200,3500, 4000,4200,4500,5000, 5200, 5500, 6000],
                        name: "ETH"
                    
                    },
                    
                    {type:"scatter",
                        x:["10:59 PM", "11:59 PM", "12:59 AM", "1:59 AM", "2:59 AM", "3:59AM","4:59AM", "5:59AM", "6:59AM", "7:59AM"],
                        y:[3000,3400,3800, 4200,4600,5500,5800, 6200, 6500, 6800],
                        name: "BTC"
                
                },
                
                    {type:"scatter",
                        x:["10:59 PM", "11:59 PM", "12:59 AM", "1:59 AM", "2:59 AM", "3:59AM","4:59AM", "5:59AM", "6:59AM", "7:59AM"],
                        y:[3000,3100,3300, 3800,4000,4200,4300, 4800, 5000, 5500],
                        name: "LTC"
                    }
                ]}
                    layout={{width:1000, height:600}}
                />
            </div>
        );
    }
}

export default Plotly;