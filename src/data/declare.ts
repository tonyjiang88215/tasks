export enum TaskCategoryEnum {
  Goal = '目标',
  Solution = '方案',
  TechnicalSupport = '技术支撑',
  Refactory = '重构',
  Action = '动作',
  Task = "任务项"
}

export enum TaskDependentTypeEnum {
  Dependent = "Dependent",
  Related = "Related"
}

export type ITask = {
  id: string,
  name: string,
  category: TaskCategoryEnum,
  descriptions?: Array<string>
}

export type ITaskDependencies = {
  src: string,
  target: string,
  type: TaskDependentTypeEnum,
  descriptions?: Array<string>
}

export type ITaskPackages = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>
}

export type IEchartsGraphData = {
  nodes: Array<any>;
  links: Array<any>;
  categories: Array<any>;
  description: Record<string, string>;
};