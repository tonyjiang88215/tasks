import React, { useState } from "react";

import { ITask } from "../data/declare";

import { TaskList } from "./TaskList";
import { TaskDependencies } from "./TaskDependencies";

export type TasksProps = {
  tasks: Array<ITask>,
  onTaskChanged: (tasks: Array<ITask>) => void
}

export const Tasks: React.FunctionComponent<TasksProps> = (props) => {
  return (
    <div className="tasks ag-theme-alpine">   
        <TaskList rowData={props.tasks} onDataChanged={props.onTaskChanged} />
        <TaskDependencies rowData={[]} />   
    </div>
  );
};
