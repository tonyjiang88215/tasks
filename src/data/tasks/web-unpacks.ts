import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "WebUnpack",
    name: "前端拆包",
    category: TaskCategoryEnum.Action,
    descriptions: []
  }
]

const dependencies: Array<ITaskDependencies> = [
  {
    src: "WebUnpack",
    target: "FormAtom",
    type: TaskDependentTypeEnum.Related
  },
  {
    src: "WebUnpack",
    target: "ReferRefactory",
    type: TaskDependentTypeEnum.Related
  },
  {
    src: "WebUnpack",
    target: "ECARulesAdminister",
    type: TaskDependentTypeEnum.Related
  },
  {
    src: "WebUnpack",
    target: "QuerySolutionRefactory",
    type: TaskDependentTypeEnum.Related
  },
]

export const webUnpacks: ITaskPackages = {
  tasks, dependencies
}