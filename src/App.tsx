import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { ITask } from "./data/declare";

import { GraphChart } from "./components/GraphChart";
import { SankeyChart } from "./components/SankeyChart";
import { Tasks } from "./components/Tasks";

interface IStatement {
  tasks: Array<ITask>;
  actions: {
    onTaskChanged(tasks: Array<ITask>): void;
  };
}

function useTasks(): [Array<ITask>, Dispatch<SetStateAction<Array<ITask>>>] {
  const [tasks, updateTasks ] = useState<Array<ITask>>([]);

  useEffect(() => {

  }, [])

  return [tasks, updateTasks];

  // const taskRef = useRef<Array<ITask>>([]);
  // return [
  //   taskRef.current,
  //   (tasks: Array<ITask>) => taskRef.current = tasks
  // ]
}

function useStatement(): IStatement {
  const [tasks, onTaskChanged] = useTasks();

  return {
    tasks,
    actions: {
      onTaskChanged
    }
  };
}

export const App = () => {
  const { tasks, actions } = useStatement();
  const { onTaskChanged } = actions;
  console.log('app render', tasks);

  return (
    <>
      <h3>企企四季度目标依赖关系</h3>
      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>任务清单</Tab>
          <Tab>关系图</Tab>
          <Tab>执行顺序图</Tab>
        </TabList>
        <TabPanel>
          <Tasks tasks={tasks} onTaskChanged={onTaskChanged} />
        </TabPanel>
        <TabPanel>
          <GraphChart tasks={tasks} dependencies={[]} />
        </TabPanel>
        <TabPanel>
          <SankeyChart tasks={tasks} dependencies={[]} />
        </TabPanel>
      </Tabs>
    </>
  );
};
