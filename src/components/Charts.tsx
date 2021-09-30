import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {GraphChart} from "./GraphChart";
import {SankeyChart} from "./SankeyChart";
import {ITask, ITaskDependencies} from "../data/declare";

export type ChartsProps = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>
}

export const Charts: React.FunctionComponent<ChartsProps> = props => {
  return (
    <Tabs forceRenderTabPanel={true}>
      <TabList>
        <Tab>关系图</Tab>
        <Tab>执行顺序图</Tab>
      </TabList>
      <TabPanel>
        <GraphChart tasks={props.tasks} dependencies={props.dependencies}/>
      </TabPanel>
      <TabPanel>
        <SankeyChart tasks={props.tasks} dependencies={props.dependencies}/>
      </TabPanel>
    </Tabs>
  )
}