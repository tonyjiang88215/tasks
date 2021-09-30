import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "AsyncParadigms",
    name: "异步数据执行方案编排",
    category: TaskCategoryEnum.TechnicalSupport,
    descriptions: [],
  }
]

const dependencies: Array<ITaskDependencies> = [
  
]

export const asyncParadigms: ITaskPackages = {
  tasks, dependencies
}