import { ITaskPackages, IEchartsGraphData, TaskDependentTypeEnum } from "../declare";
import { categories } from '../categories';

function getEdgeSymbol(type: TaskDependentTypeEnum) {
  if (type === TaskDependentTypeEnum.Related) {
    return ["none", "none"];
  }

  return ["arrow", "none"]
}

function putIntoData(
  data: IEchartsGraphData,
  packages: ITaskPackages
) {

  const { tasks, dependencies } = packages;

  tasks.forEach((task) => {
    const { id, name, category } = task;

    data.nodes.push({
      id: id,
      name: name,
      category: category
    });

  });


  dependencies.forEach((deps) => {
    const { src, target, type, descriptions = [] } = deps;

    const symbol = getEdgeSymbol(type);

    data.links.push({
      source: src,
      target: target,
      symbol: symbol
    });

    const key = `${src}-${target}`;
    data.description[key] = descriptions.join('<br />');      

  });

  return data;
}

function makeCategoryMap(categories: Array<any>) {
  return categories.reduce(
    (arr, category) => ({ ...arr, [category.name]: category }),
    {}
  );
}

function cookForECharts(data: IEchartsGraphData): IEchartsGraphData {
  const { nodes, links, categories, description } = data;

  const categoryMap = makeCategoryMap(categories);

  const styledNodes = nodes.map((node) => {
    if (node.category && categoryMap[node.category]) {
      const { name, ...styles } = categoryMap[node.category];
      return {
        ...node,
        ...styles
      };
    }

    return node;
  });

  return {
    nodes: styledNodes,
    links: links,
    categories: categories,
    description
  };
}

function getEmptyData(): IEchartsGraphData {
  return {
    nodes: [],
    links: [],
    categories: categories,
    description: {}
  };
}

export function MrForceRelation(...packages: Array<ITaskPackages>): IEchartsGraphData {
  const data = packages.reduce((data, pack) => {
    return putIntoData(data, pack)
  }, getEmptyData());

  return cookForECharts(data);
}

