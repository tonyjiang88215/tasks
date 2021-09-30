import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "ECARules",
    name: "ECARules",
    category: TaskCategoryEnum.Solution,
    descriptions: [],
  },
  {
    id: "ECARulesAdminister",
    name: "ECARules规则治理",
    category: TaskCategoryEnum.Task,
    descriptions: [],
  },
  {
    id: "ECARulesAsync",
    name: "ECARules支持异步",
    category: TaskCategoryEnum.Task,
    descriptions: [],
  },
  {
    id: "ECARulesDesigner",
    name: "ECARules设计器（用户端）",
    category: TaskCategoryEnum.Task,
    descriptions: [],
  },
  
]

const dependencies: Array<ITaskDependencies> = [
  { 
    src: "ECARules", 
    target: "ECARulesAdminister",
    type: TaskDependentTypeEnum.Dependent
  },
  { 
    src: "ECARules", 
    target: "ECARulesAsync",
    type: TaskDependentTypeEnum.Dependent
  },
  { 
    src: "ECARulesAsync", 
    target: "AsyncParadigms",
    type: TaskDependentTypeEnum.Dependent
  },
  { 
    src: "ECARules", 
    target: "ECARulesDesigner",
    type: TaskDependentTypeEnum.Dependent
  },
]

export const ecaRules: ITaskPackages = {
  tasks, dependencies
}