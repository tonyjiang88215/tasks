import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "Stocks",
    name: "库存",
    category: TaskCategoryEnum.Goal,
    descriptions: []
  }

]

const dependencies: Array<ITaskDependencies> = [
  {
    src: "Stocks", 
    target: "ReferRefactory",
    type: TaskDependentTypeEnum.Dependent,
    "descriptions": [
      "1、支持新列表方案", 
      "2、会有动态列的需求"
    ]
  },
  {
    src: "Stocks", 
    target: "WebUnpack",
    type: TaskDependentTypeEnum.Dependent,
    "descriptions": [
      "希望在微前端后，库存可以作为独立子应用"
    ]
  },
  {
    src: "Stocks", 
    target: "TrekUnpack",
    type: TaskDependentTypeEnum.Dependent,
    "descriptions": [
      "希望库存的接口和service可以按照子应用来编写"
    ]
  },
  
]

export const stocks: ITaskPackages = {
  tasks, dependencies
}