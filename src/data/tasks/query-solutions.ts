import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "QuerySolutionRefactory",
    name: "查询方案重构",
    category: TaskCategoryEnum.Refactory,
    descriptions: [],
  },
  {
    id: "DrillRefactory",
    name: "穿透方案重构",
    category: TaskCategoryEnum.Refactory,
    descriptions: [],
  }
]

const dependencies: Array<ITaskDependencies> = [
  
]

export const querySolutions: ITaskPackages = {
  tasks, dependencies
}