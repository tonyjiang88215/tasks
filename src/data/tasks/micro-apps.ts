import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "MicroApps",
    name: "微前端",
    category: TaskCategoryEnum.Goal,
    descriptions: []
  },
  {
    id: "MicroAppsAdminister",
    name: "微前端项目治理",
    category: TaskCategoryEnum.Solution,
    descriptions: []
  },
  {
    id: "MicroAppsBaseTechnical",
    name: "基座能力",
    category: TaskCategoryEnum.Task,
    descriptions: []
  },
  {
    id: "MicroAppsSingleton",
    name: "抽取全局单例对象",
    category: TaskCategoryEnum.Task,
    descriptions: [
      "1."
    ]
  },
  {
    id: "MicroAppsRouterManager",
    name: "路由管理",
    category: TaskCategoryEnum.Task,
    descriptions: [
    
    ]
  },
  {
    id: "WebpackModuleDederationVerify",
    name: "webpack module federation 技术验证",
    category: TaskCategoryEnum.TechnicalSupport
  }
]

const dependencies: Array<ITaskDependencies> = [
  {
    src: "MicroApps",
    target: "MicroAppsBaseTechnical",
    type: TaskDependentTypeEnum.Dependent,
    descriptions: []
  },
  {
    src: "MicroApps",
    target: "MicroAppsAdminister",
    type: TaskDependentTypeEnum.Dependent,
    descriptions: []
  },
  {
    src: "MicroAppsBaseTechnical",
    target: "WebUnpack",
    type: TaskDependentTypeEnum.Related,
    descriptions: []
  },
  {
    src: "MicroApps",
    target: "WebpackModuleDederationVerify",
    type: TaskDependentTypeEnum.Dependent,
    descriptions: []
  },
  {
    src: "MicroApps",
    target: "MicroAppsSingleton",
    type: TaskDependentTypeEnum.Dependent,
    descriptions: []
  },
  {
    src: "MicroApps",
    target: "MicroAppsSingleton",
    type: TaskDependentTypeEnum.Dependent,
    descriptions: []
  }
]

export const microApps: ITaskPackages = {
  tasks, dependencies
}