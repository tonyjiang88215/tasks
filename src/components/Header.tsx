import React from "react";
import {Button, Upload} from "antd";
import { DownloadOutlined, UploadOutlined, DeleteTwoTone } from '@ant-design/icons';
import {saveAs} from "file-saver";

import {ITask, ITaskDependencies} from "../data/declare";


export type HeaderProps = {
  tasks: Array<ITask>,
  dependencies: Array<ITaskDependencies>,
  onTaskChanged: (tasks: Array<ITask>) => void,
  onDependenciesChanged: (dependencies: Array<ITaskDependencies>) => void
}

export const Header: React.FunctionComponent<HeaderProps> = props => {

  const clearHandler = useClear(props.onTaskChanged, props.onDependenciesChanged);
  const exportHandler = useExport(props.tasks, props.dependencies);
  const importHandler = useImport(props.onTaskChanged, props.onDependenciesChanged);

  return (
    <>
      <div className={"header-container"}>
        <div className={"header-left"}>
          <h3>企企四季度目标依赖关系</h3>
        </div>
        <div className={"header-right"}>
          <Button icon={<DeleteTwoTone />} shape={'circle'} onClick={() => clearHandler()} />
          <Button type="primary" icon={<DownloadOutlined />} shape={'circle'} onClick={() => exportHandler()} />
          { /** @ts-ignore */}
          <Upload beforeUpload={importHandler} showUploadList={false}>
            <Button type="primary" icon={<UploadOutlined />} shape={'circle'} />
          </Upload>
        </div>
      </div>


    </>

  );
}

function useClear(onTaskChanged: (tasks: Array<ITask>) => void, onDependenciesChanged: (dependencies: Array<ITaskDependencies>) => void) {
  return () => {
    onTaskChanged([]);
    onDependenciesChanged([]);
  }
}

function useExport(tasks: Array<ITask>, dependencies: Array<ITaskDependencies>) {
  return () => {
    const data = {tasks, dependencies};
    const blob = new Blob([JSON.stringify(data, undefined, 2)], {type: "text/json;charset=utf-8"});
    saveAs(blob, 'data.json');
  }
}

function useImport(onTaskChanged: (tasks: Array<ITask>) => void, onDependenciesChanged: (dependencies: Array<ITaskDependencies>) => void) {
  return (file: any) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        if (reader.result) {
          const data = JSON.parse(reader.result.toString());
          onTaskChanged(data.tasks);
          onDependenciesChanged(data.dependencies);
        }
      };

      resolve(undefined)
    });
  }
}