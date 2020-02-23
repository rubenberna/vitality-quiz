import React from 'react';

import { RadialBarChartHome } from '../../molecules/graph/RadialBarChartHome';
import { Rectangle } from '../../atoms/shapes';

const ChartWithBackground = () => {
  return (
    <div className='chart-with-background'>
      <RadialBarChartHome />
      <Rectangle degree='25deg' right='-220px' top='130px' />
    </div>
  );
};

export default ChartWithBackground;
