import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "CustomizedForm",
    name: "自定义表单",
    category: TaskCategoryEnum.Goal,
    descriptions: [],
  }

]

const dependencies: Array<ITaskDependencies> = [
  {
    src: "CustomizedForm", 
    target: "FormEngineRefactory", 
    type: TaskDependentTypeEnum.Dependent,
    descriptions: [
      "需要将 form-next 接入验证"
    ]
  },
  
  {
    src: "CustomizedForm", 
    target: "ECARules",
    type: TaskDependentTypeEnum.Dependent,
    descriptions: [
      "需要支持规则推荐",
    ]
  },
  {
    src: "CustomizedForm", 
    target: "BillTypeRefactory",
    type: TaskDependentTypeEnum.Dependent,
    descriptions: [
      "主要是为了重新梳理跟后端数据间的转换关系"
    ]
  },
  {
    src: "CustomizedForm", 
    target: "ReferRefactory",
    type: TaskDependentTypeEnum.Dependent,
  },
  {
    src: "CustomizedForm", 
    target: "MicroAppsRouterManager",
    type: TaskDependentTypeEnum.Dependent,
  }

]

export const customizedForms: ITaskPackages = {
  tasks, dependencies
}