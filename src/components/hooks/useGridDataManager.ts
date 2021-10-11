import {useState} from "react";
import {GridApi, GridReadyEvent, RowDataUpdatedEvent} from "ag-grid-community";
import {ITask} from "../../data/declare";


export type GridDataManagerParams<T = any> = {
  data: Array<T>;
  onDataChanged: (data: Array<T>) => void;
}

export interface IGridDataManager {
  data: Array<any>,

  onGridReady(params: GridReadyEvent): void,

  onRowDataUpdated(params: RowDataUpdatedEvent): void,

  onCellValueChanged(): void,

  create(): void,

  remove(): void,
}

export function useGridDataManager(props: GridDataManagerParams): IGridDataManager {

  const [gridApi, setGridApi] = useState<GridApi>();

  const create = () => {
    const rs = gridApi?.applyTransaction({
      add: [{id: Date.now()}]
    });

    gridApi?.ensureIndexVisible(props.data.length);
  }

  const remove = () => {
    const selectedData = gridApi?.getSelectedRows();
    console.log('selectedData', selectedData);
    if (selectedData?.length) {
      const res = gridApi?.applyTransaction({remove: selectedData});
    }
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
  };

  const onCellValueChanged = () => {
    const rowData = getRowData();
    console.log('rowData is', rowData);
    props.onDataChanged(rowData);
  }


  return {
    data: props.data,
    onGridReady,
    onRowDataUpdated,
    onCellValueChanged,
    create,
    remove
  }
}