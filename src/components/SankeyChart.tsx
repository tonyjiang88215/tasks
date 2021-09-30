import ReactEcharts from "echarts-for-react";

import { MrCookEnum } from "../data/cooks/declare";
import { cookData } from "../data";
import { ITask, ITaskDependencies } from "../data/declare";

//Array of names for legend in {options}

//Chart style
const style = {
  height: "90vh",
  width: "100%"
};

// const data = getData();

// const sankey = loadData(MrCookEnum.Sankey);
// console.log('sankey', sankey);
// //Chart options


function useOptions(props: SankeyChartProps) {

  const sankey = cookData(MrCookEnum.Sankey, props);

  return {
    // title: {
    //   text: "企企四季度目标依赖关系",
    //   subtext: "",
    //   top: "top",
    //   left: "left"
    // },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        orient: "vertical",
        x: "right",
        y: "middle",
        top: "0%",
        data: sankey.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animation: false,
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
  
    series: [
      {
        // xAxisIndex: 1,
        // yAxisIndex: 0,
        type: "sankey",
        data: sankey.nodes,
        links: sankey.links,
        emphasis: {
          focus: "adjacency"
        },
        label: {
          position: "top",
          show: true,
          normal: {
            formatter: (params: any) => {
              return params.name;
            }
          }
          // formatter: '{b}'
        },
        tooltip: {
          formatter: function (params: any) {
            //连接线上提示文字格式化
            const key = `${params.data.source}-${params.data.target}`;
  
            return sankey.description[key];
          }
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        }
      }
    ]
  };
}

export type SankeyChartProps = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>
}

export const SankeyChart: React.FunctionComponent<SankeyChartProps> = (props) => {
  const options = useOptions(props);
  return (
    <ReactEcharts option={options} style={style} className="pie-chart" />
  );
}

