import { ITask, TaskCategoryEnum, ITaskDependencies, ITaskPackages, TaskDependentTypeEnum } from '../declare';

const tasks: Array<ITask> = [
  {
    id: "TrekUnpack",
    name: "Trek拆包",
    category: TaskCategoryEnum.Action,
    descriptions: []
  },
  
]

const dependencies: Array<ITaskDependencies> = [
  {
    src: 'TrekUnpack',
    target: 'MicroBFFAdminister',
    type: TaskDependentTypeEnum.Related
  },
  {
    src: 'TrekUnpack',
    target: 'MicroBFFBaseTechnical',
    type: TaskDependentTypeEnum.Related
  },
  {
    src: 'TrekUnpack',
    target: 'TrekServiceUnpack',
    type: TaskDependentTypeEnum.Related
  }
]

export const trekUnpacks: ITaskPackages = {
  tasks, dependencies
}