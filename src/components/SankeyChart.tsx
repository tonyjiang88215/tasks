import React from "react";
import ReactEcharts from "echarts-for-react";

import {MrCookEnum} from "../data/cooks/declare";
import {ITask, ITaskDependencies} from "../data/declare";
import {useChartOptions} from "./hooks/useChartOptions";

export type SankeyChartProps = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>
}

export const SankeyChart: React.FunctionComponent<SankeyChartProps> = (props) => {
  const options = useChartOptions(MrCookEnum.Sankey, props);
  return (
    <ReactEcharts option={options} className={'chart-item'}/>
  );
}

