import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "MicroBFF",
    name: "微BFF",
    category: TaskCategoryEnum.Goal,
    descriptions: []
  },
  {
    id: "MicroBFFAdminister",
    name: "BFF项目治理",
    category: TaskCategoryEnum.Solution,
    descriptions: []
  },
  {
    id: "MicroBFFBaseTechnical",
    name: "基础能力拆分",
    category: TaskCategoryEnum.Task,
    descriptions: []
  },
  {
    id: "TrekServiceUnpack",
    name: "现有Service抽取为子应用",
    category: TaskCategoryEnum.Task,
    descriptions: []
  }
]

const dependencies: Array<ITaskDependencies> = [
  {
    src: "MicroBFF",
    target: "MicroBFFAdminister",
    type: TaskDependentTypeEnum.Dependent
  },
  {
    src: "MicroBFF",
    target: "MicroBFFBaseTechnical",
    type: TaskDependentTypeEnum.Dependent
  },
  {
    src: "MicroBFF",
    target: "TrekServiceUnpack",
    type: TaskDependentTypeEnum.Dependent
  },
]

export const microBFFs: ITaskPackages = {
  tasks, dependencies
}