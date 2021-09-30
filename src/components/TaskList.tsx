import { useCallback, useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { GridApi, GridReadyEvent, RowDataUpdatedEvent } from "ag-grid-community";
import { Button } from 'antd';
import { ITask } from "../data/declare";

interface ITaskListManager {
  data: Array<any>
  onGridReady(params: GridReadyEvent): void
  onRowDataUpdated(params: RowDataUpdatedEvent): void
  createTask(): void
}

function useTaskListManager(props: TaskListProps): ITaskListManager {

  const [gridApi, setGridApi] = useState<GridApi>();

  const createTask = () => {
    const rs = gridApi?.applyTransaction({
      add: [{ id: Date.now() }]
    });
    console.log('rs', rs)
  }

  const getRowData = () => {
    const rowData: Array<ITask> = [];
    gridApi?.forEachNode(function (node) {
      rowData.push(node.data);
    });
    return rowData;
  }

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
  };

  const onRowDataUpdated = (params: RowDataUpdatedEvent) => {
    const rowData = getRowData();
    props.onDataChanged(rowData);
    console.log('row data changed', rowData);
  }



  return {
    data: props.rowData,
    onGridReady,
    onRowDataUpdated,
    createTask
  }
}



export type TaskListProps = {
  rowData: Array<ITask>;
  onDataChanged: (data: Array<ITask>) => void;
};

export const TaskList: React.FunctionComponent<TaskListProps> = (props) => {
  const { data, onGridReady, onRowDataUpdated, createTask } = useTaskListManager(props);

  return (
    <div className="task-list">
      <Button type="primary" onClick={() => createTask()} >新增任务</Button>
      <AgGridReact
        getRowNodeId={data => data.id}
        singleClickEdit={true}
        rowData={data}
        onGridReady={onGridReady}
        onRowDataUpdated={onRowDataUpdated}
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
          field="descriptions"
          headerName="描述"
          flex={1}
          width={200}
          editable={true}
          cellEditor="agLargeTextCellEditor"
        />
      </AgGridReact>
    </div>
  );
};
