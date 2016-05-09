import _ from 'lodash';
import React, {Component} from 'react';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';


class Chart extends Component {
  
  constructor(props) {
    super(props);
    
    this.avghelper = this.avghelper.bind(this);
  }
  
  
    
  avghelper(data) {                 
    return   _.round((_.sum(data))/data.length);     
    }
  
  render() {
    return (
      <div>
        <Sparklines height={100} Width={140} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.avghelper(this.props.data)} {this.props.units}</div>
       
      </div>
    );
  }
}

export default Chart;



