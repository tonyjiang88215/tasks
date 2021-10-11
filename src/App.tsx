import React, {useEffect, useState} from "react";

import {ITask, ITaskDependencies} from "./data/declare";

import {Header} from "./components/Header";
import {Tasks} from "./components/Tasks";
import {Charts} from "./components/Charts";

interface IStatement {
  tasks: Array<ITask>;
  tasksInChart: Array<ITask>;
  dependencies: Array<ITaskDependencies>;
  dependenciesInChart: Array<ITaskDependencies>;
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
  const tasksInChart = tasks.filter(i => i.displayInCharts);
  const dependenciesInChart = dependencies.filter(i => i.displayInCharts);

  return {
    tasks, tasksInChart,
    dependencies, dependenciesInChart,
    actions: {
      onTaskChanged,
      onDependenciesChanged
    }
  };
}

export const App = () => {
  const {tasks, tasksInChart, dependencies, dependenciesInChart, actions} = useStatement();
  const {onTaskChanged, onDependenciesChanged} = actions;
  console.log('app render', tasks);

  return (
    <>
      <div className={"app-container"}>
        <div className={"header"}>
          <Header
            tasks={tasks}
            dependencies={dependencies}
            onTaskChanged={onTaskChanged}
            onDependenciesChanged={onDependenciesChanged}
          />
        </div>
        <div className={"app-content-container"}>
          <div className={"graph-container"}>
            <Charts tasks={tasksInChart} dependencies={dependenciesInChart}/>
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
