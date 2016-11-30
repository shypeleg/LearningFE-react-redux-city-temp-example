import React , { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  const sum = _.sum(data);
  return "Average: " +  _.round(sum/data.length);
}

export default props=> {
  return (
      <div>
        <Sparklines height={props.height} width={props.width} data={props.data}>
          <SparklinesLine color={props.color}/>
          <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>{average(props.data)}</div>
      </div>
  );
}