import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import Svg from 'react-native-svg';
import { StyleSheet } from 'react-native';

interface ratingProps {
  data?: number[];
}

export const LineChartComponent = (props: ratingProps) => {
  const d3Container = useRef(null);
  useEffect(() => {
    if (props.data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      const update = svg.append('g').selectAll('text').data(props.data);
      update
        .enter()
        .append('text')
        .attr('x', (d, i) => i * 25)
        .attr('y', 40);
      // .style('font-size', 24)
      // .text((d: number) => d);
      update.attr('x', (d, i) => i * 40).text((d: number) => d);
      update.exit().remove();
    }
  }, [props.data, d3Container.current]);

  return (
    <Svg
      // styles="lineChart-component"
      width={400}
      height={200}
      ref={d3Container}
    />
  );
};
