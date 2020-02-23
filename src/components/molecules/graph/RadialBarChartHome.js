import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Tooltip } from 'recharts';
import { finalResult } from '../../../dummyData';

import './graph.scss';

const radialBarChartColors = [
  'red',
  'green',
  'orange',
  '#64afb7',
  '#f07e0a',
  '#fbc806'
];

export class RadialBarChartHome extends PureComponent {
  getRowsDataFinalScore = () => {
    const RandomRadialBarChartColors = [];
    return Object.keys(finalResult.finalScore).map((tekoort, i) => {
      for (let index = 0; index <= i; index++) {
        RandomRadialBarChartColors.push(radialBarChartColors[i]);
      }
      const number = parseFloat(finalResult.finalScore[tekoort].result);

      return {
        tekort: [tekoort, number, '%'],
        result: parseFloat(finalResult.finalScore[tekoort].result),
        fill: RandomRadialBarChartColors[i]
      };
    });
  };

  render() {
    return (
      <>
        <RadialBarChart
          width={1000}
          height={400}
          cx={750}
          cy={250}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={this.getRowsDataFinalScore()}
        >
          <RadialBar minAngle={15} background clockWise dataKey='tekort' />
          <Tooltip cursor={{ stroke: '#fde0dc', strokeWidth: 5 }} />
        </RadialBarChart>
      </>
    );
  }
}
