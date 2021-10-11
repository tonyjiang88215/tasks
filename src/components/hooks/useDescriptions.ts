import {ValueGetterParams, ValueSetterParams} from "ag-grid-community";

export function useDescriptions() {
  const valueGetter = (params: ValueGetterParams) => {
    if(!params.data.descriptions) {
      return undefined;
    }

    return params.data.descriptions.join('\n');
  }

  const valueSetter = (params: ValueSetterParams) => {
    params.data.descriptions = params.newValue.split('\n');
    return true;
  }

  return {
    valueGetter, valueSetter
  }
}