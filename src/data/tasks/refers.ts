import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "ReferRefactory",
    name: "参照重构",
    category: TaskCategoryEnum.Refactory,
    descriptions: [],
  }
]

const dependencies: Array<ITaskDependencies> = [
  
]

export const refers: ITaskPackages = {
  tasks, dependencies
}