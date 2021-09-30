import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "BillTypeRefactory",
    name: "单据类型重构",
    category: TaskCategoryEnum.Refactory,
    descriptions: [],
  }
]

const dependencies: Array<ITaskDependencies> = [
  
]

export const billTypes: ITaskPackages = {
  tasks, dependencies
}