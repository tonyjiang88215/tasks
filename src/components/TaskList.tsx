import React, {useCallback, useMemo, useState} from "react";
import {AgGridReact, AgGridColumn} from "ag-grid-react";
import {Button} from 'antd';
import { FileAddTwoTone, DeleteTwoTone } from '@ant-design/icons';

import {ITask, TaskCategoryEnum} from "../data/declare";
import {useGridDataManager} from "./hooks/useGridDataManager";


export type TaskListProps = {
  data: Array<ITask>;
  onDataChanged: (data: Array<ITask>) => void;
};

export const TaskList: React.FunctionComponent<TaskListProps> = React.memo((props) => {
  const {data, onGridReady, onRowDataUpdated, onCellValueChanged, create, remove} = useGridDataManager(props);

  return (
    <div className="task-list">
      <div className={"grid-header"}>
        <Button type="primary" icon={<FileAddTwoTone />} shape={'circle'} onClick={() => create()} />
        <Button type="default" icon={<DeleteTwoTone />} shape={'round'} onClick={() => remove()}>选中</Button>
      </div>
      <AgGridReact
        className={"grid"}
        getRowNodeId={data => data.id}
        // singleClickEdit={true}
        rowData={data}
        rowSelection={'single'}
        suppressScrollOnNewData={true}
        onGridReady={onGridReady}
        onRowDataUpdated={onRowDataUpdated}
        onCellValueChanged={onCellValueChanged}
      >
        <AgGridColumn
          field="id"
          headerName="ID"
          width={100}
          editable={true}
          cellEditor="agTextCellEditor"
        />
        <AgGridColumn
          field="name"
          headerName="任务名称"
          width={200}
          editable={true}
          cellEditor="agTextCellEditor"
        />
        <AgGridColumn
          field="category"
          headerName="类型"
          width={100}
          editable={true}
          cellEditor="agPopupSelectCellEditor"
          cellEditorParams={{values: Object.values(TaskCategoryEnum)}}
        />
        <AgGridColumn
          field="descriptions"
          headerName="描述"
          flex={1}
          width={200}
          minWidth={200}
          editable={true}
          cellEditor="agLargeTextCellEditor"
        />
      </AgGridReact>
    </div>
  )
});
