import { useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { GridApi, GridReadyEvent } from "ag-grid-community";
import { Button } from 'antd';

function useGridReadyHandler() {
  const [gridApi, setGridApi] = useState<GridApi>();

  return (params: GridReadyEvent) => {
    setGridApi(params.api);
  };
}

export type TaskDependenciesProps = {
  rowData: Array<{ id: string; name: string; descriptions: Array<string> }>;
};

export const TaskDependencies: React.FunctionComponent<TaskDependenciesProps> = (
  props
) => {
  const { rowData } = props;

  const onGridReady = useGridReadyHandler();

  return (
    <div className="task-dependencies">
      <Button type="primary" >新增依赖</Button>
      <AgGridReact
        singleClickEdit={true}
        rowData={rowData}
        onGridReady={onGridReady}
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
