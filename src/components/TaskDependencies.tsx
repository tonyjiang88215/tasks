import React from "react";
import {AgGridReact, AgGridColumn} from "ag-grid-react";
import {Button} from 'antd';
import { FileAddTwoTone, DeleteTwoTone } from '@ant-design/icons';

import {ITask, ITaskDependencies, TaskDependentTypeEnum} from "../data/declare";
import {useGridDataManager} from "./hooks/useGridDataManager";
import {useDescriptions} from "./hooks/useDescriptions";
import {ICellRendererParams} from "ag-grid-community";

export type TaskDependenciesProps = {
  tasks: Array<ITask>,
  data: Array<ITaskDependencies>;
  onTaskChanged: (data: Array<ITask>) => void;
  onDataChanged: (data: Array<ITaskDependencies>) => void;
};

export const TaskDependencies: React.FunctionComponent<TaskDependenciesProps> = (props) => {
  const {data, onGridReady, onRowDataUpdated, onCellValueChanged, create, remove} = useGridDataManager(props);
  const taskSelectValues = useTaskSelectValues(props.tasks);
  const relationValues = useRelationValues();
  const { valueGetter, valueSetter } = useDescriptions();

  return (
    <div className="task-dependencies">
      <div className={"grid-header"}>
        <Button type="primary" icon={<FileAddTwoTone />} shape={'circle'} onClick={() => create()} />
        <Button type="default" icon={<DeleteTwoTone />} shape={'round'} onClick={() => remove()}>选中</Button>
      </div>
      <AgGridReact
        className={"grid"}
        getRowNodeId={data => `${data.src}_${data.target}`}
        // singleClickEdit={true}
        rowData={data}
        rowSelection={'single'}
        suppressScrollOnNewData={true}
        onGridReady={onGridReady}
        onRowDataUpdated={onRowDataUpdated}
        onCellValueChanged={onCellValueChanged}
      >
        <AgGridColumn
          field="displayInCharts"
          headerName="显示"
          width={50}
          resizable={true}
          cellRendererFramework={(params: ICellRendererParams) => {
            return <input type={'checkbox'} checked={params.value} onChange={ev => {
              // @ts-ignore
              params.setValue(ev.target.checked);
            }} />
          }}
        />
        <AgGridColumn
          field="src"
          headerName="源任务ID"
          width={200}
          editable={true}
          cellEditor="agPopupSelectCellEditor"
          cellEditorParams={{values: taskSelectValues}}
        />
        <AgGridColumn
          field="target"
          headerName="目标任务ID"
          width={200}
          editable={true}
          cellEditor="agPopupSelectCellEditor"
          cellEditorParams={{values: taskSelectValues}}
        />
        <AgGridColumn
          field="type"
          headerName="关系"
          width={150}
          editable={true}
          cellEditor="agPopupSelectCellEditor"
          cellEditorParams={{values: relationValues}}
        />
        <AgGridColumn
          field="descriptions"
          headerName="描述"
          flex={1}
          width={200}
          minWidth={200}
          editable={true}
          cellEditor="agLargeTextCellEditor"
          valueGetter={valueGetter}
          valueSetter={valueSetter}
        />
      </AgGridReact>
    </div>
  );
};


function useTaskSelectValues(tasks: Array<ITask>) {
  return tasks.map(task => task.id);
}

function useRelationValues() {
  return Object.values(TaskDependentTypeEnum);
}