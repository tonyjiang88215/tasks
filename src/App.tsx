import React, {useEffect, useState} from "react";

import {ITask, ITaskDependencies} from "./data/declare";

import {Header} from "./components/Header";
import {Tasks} from "./components/Tasks";
import {Charts} from "./components/Charts";

interface IStatement {
  tasks: Array<ITask>;
  dependencies: Array<ITaskDependencies>;
  actions: {
    onTaskChanged(tasks: Array<ITask>): void;
    onDependenciesChanged(dependencies: Array<ITaskDependencies>): void;
  };
}

function useTasks() {
  const [tasks, onTaskChanged] = useState<Array<ITask>>([]);
  const [dependencies, onDependenciesChanged] = useState<Array<ITaskDependencies>>([]);

  // useEffect(() => {
  //   const data = loadData();
  //   console.log('load data', data);
  //   onTaskChanged(data.tasks);
  //   onDependenciesChanged(data.dependencies);
  //
  // }, [])

  return {
    tasks, onTaskChanged,
    dependencies, onDependenciesChanged
  }
}

function useStatement(): IStatement {
  const {tasks, onTaskChanged, dependencies, onDependenciesChanged} = useTasks();

  return {
    tasks,
    dependencies,
    actions: {
      onTaskChanged,
      onDependenciesChanged
    }
  };
}

export const App = () => {
  const {tasks, dependencies, actions} = useStatement();
  const {onTaskChanged, onDependenciesChanged} = actions;
  console.log('app render', tasks);

  return (
    <>
      <div className={"app-container"}>
        <div className={"header"}>
          <Header tasks={tasks} dependencies={dependencies} onTaskChanged={onTaskChanged} onDependenciesChanged={onDependenciesChanged} />
        </div>
        <div className={"app-content-container"}>
          <div className={"graph-container"}>
            <Charts tasks={tasks} dependencies={dependencies} />
          </div>
          <div className={"list-container"}>
            <Tasks
              tasks={tasks}
              dependencies={dependencies}
              onTaskChanged={onTaskChanged}
              onDependenciesChanged={onDependenciesChanged}/>
          </div>
        </div>
      </div>

    </>
  );
};
