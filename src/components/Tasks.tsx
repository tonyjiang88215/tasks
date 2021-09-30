import React, {useState} from "react";

import {ITask, ITaskDependencies} from "../data/declare";

import {TaskList} from "./TaskList";
import {TaskDependencies} from "./TaskDependencies";

export type TasksProps = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>,
  onTaskChanged: (tasks: Array<ITask>) => void,
  onDependenciesChanged: (dependencies: Array<ITaskDependencies>) => void
}

export const Tasks: React.FunctionComponent<TasksProps> = (props) => {
  return (
    <div className="tasks ag-theme-alpine">
      <TaskList data={props.tasks} onDataChanged={props.onTaskChanged}/>
      <TaskDependencies tasks={props.tasks} data={props.dependencies} onTaskChanged={props.onTaskChanged} onDataChanged={props.onDependenciesChanged}/>
    </div>
  );
};
