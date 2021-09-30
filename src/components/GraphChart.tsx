import React from "react";
import ReactEcharts from "echarts-for-react";

import {MrCookEnum} from "../data/cooks/declare";
import {ITask, ITaskDependencies} from "../data/declare";
import {useChartOptions} from "./hooks/useChartOptions";

export type GraphChartProps = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>
}

export const GraphChart: React.FunctionComponent<GraphChartProps> = (props) => {
    const options = useChartOptions(MrCookEnum.ForceRelation, props);
    return (
      <ReactEcharts option={options} className={'chart-item'}/>
    )
  }
;
