import ReactEcharts from "echarts-for-react";

import { MrCookEnum } from "../data/cooks/declare";
import { cookData } from "../data";
import { ITask, ITaskDependencies } from "../data/declare";

//Chart style
const style = {
  height: "90vh",
  width: "100%"
};

function useOptions(props: GraphChartProps) {

  const forceRelation = cookData(MrCookEnum.ForceRelation, props);

  console.log('forceRelation', forceRelation);

  return {

    tooltip: {},
    legend: [
      {
  
        orient: "vertical",
        x: "right",
        y: "middle",
        top: "0%",
        data: forceRelation.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animation: false,
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
   
    series: [
      {
        type: "graph",
        layout: "force",
        data: forceRelation.nodes,
        links: forceRelation.links,
        categories: forceRelation.categories,
        // symbolSize: 50,
        force: {
          repulsion: 500,
          gravity: 0.1,
          layoutAnimation: false,
          edgeLength: 100
          // "initLayout": "circular"
        },
        animationDuration: 1500,
        animationEasingUpdate: "quinticInOut",
        roam: true,
        symbolSize: 20,
        focusNodeAdjacency: true,
        // itemStyle: {
        //   borderColor: "#fff",
        //   borderWidth: 1,
        //   // shadowBlur:4,
        //   // shadowColor:'rgba(0, 0, 0, 0.2)',
        //   color: "#1c7231",
        //   backgroundColor: "#edf6e8"
        // },
  
        label: {
          position: "top",
          show: true
          // formatter: '{b}'
        },
        lineStyle: {
          color: "#888",
          curveness: 0.3
        },
        emphasis: {
          lineStyle: {
            width: 10
          }
        },
        tooltip: {
          formatter: function (params: any) {
            //连接线上提示文字格式化
            const key = `${params.data.source}-${params.data.target}`;
  
            return forceRelation.description[key];
          }
        }
      }
    ]
  };
}

export type GraphChartProps = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>
}

export const GraphChart: React.FunctionComponent<GraphChartProps> = (props) => {
  const options = useOptions(props);
  return (
    <ReactEcharts option={options} style={style} className="pie-chart" />
  )
}
;
