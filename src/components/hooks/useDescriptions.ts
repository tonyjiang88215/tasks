import {ValueGetterParams, ValueSetterParams} from "ag-grid-community";

export function useDescriptions() {
  const valueGetter = (params: ValueGetterParams) => {
    console.log('getter', params);
    if(!params.data.descriptions) {
      return undefined;
    }

    return params.data.descriptions.join('\n');
  }

  const valueSetter = (params: ValueSetterParams) => {
    console.log('setter', params);
    console.log('newValue', params.newValue);
    params.data.descriptions = params.newValue.split('\n');
    return true;
  }

  return {
    valueGetter, valueSetter
  }
}