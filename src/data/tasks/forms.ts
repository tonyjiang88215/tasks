import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "FormAtom",
    name: "表单原子能力",
    category: TaskCategoryEnum.Solution,
    descriptions: [],
  },

  {
    id: "FormBaseCodeExtract",
    name: "表单跨端代码抽取",
    category: TaskCategoryEnum.Solution,
    descriptions: [],
  },
  
  {
    id: "FormEngineRefactory",
    name: "表单引擎重构",
    category: TaskCategoryEnum.TechnicalSupport,
    descriptions: [],
  },

  {
    id: "FormEngineDynamics",
    name: "表单动态模型",
    category: TaskCategoryEnum.Task
  },

  {
    id: "FormEngineHooks",
    name: "表单 hooks api",
    category: TaskCategoryEnum.Task
  }
]

const dependencies: Array<ITaskDependencies> = [
  {
    src: "FormEngineRefactory",
    target: "FormEngineHooks",
    type: TaskDependentTypeEnum.Dependent,
  },
  {
    src: "FormEngineRefactory",
    target: "FormAtom",
    type: TaskDependentTypeEnum.Dependent,
  },
  {
    src: "FormEngineRefactory",
    target: "FormEngineDynamics",
    type: TaskDependentTypeEnum.Dependent,
  }
]

export const forms: ITaskPackages = {
  tasks, dependencies
}