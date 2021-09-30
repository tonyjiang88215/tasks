import {cookData} from "../../data";
import {MrCookEnum} from "../../data/cooks/declare";
import {ITaskPackages} from "../../data/declare";


export function useForceRelationOptions(packages: ITaskPackages) {
  const forceRelation = cookData(MrCookEnum.ForceRelation, packages);

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

export function useSankeyOptions(packages: ITaskPackages) {

  const sankey = cookData(MrCookEnum.Sankey, packages);

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

export function useChartOptions(type: MrCookEnum, packages: ITaskPackages) {
  if(type === MrCookEnum.Sankey) {
    return useSankeyOptions(packages);
  }
  return useForceRelationOptions(packages);
}