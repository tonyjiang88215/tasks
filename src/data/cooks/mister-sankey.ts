import { ITaskPackages, IEchartsGraphData } from "../declare";
import { categories } from '../categories';

function putIntoData(
  data: IEchartsGraphData,
  packages: ITaskPackages
) {

  const { tasks, dependencies } = packages;

  tasks.forEach((task) => {
    const { id, name, category } = task;

    data.nodes.push({
      id: id,
      name: `${name}\r\n(${id})`,
      category: category
    });

  });


  dependencies.forEach((deps) => {
    const { src, target, descriptions = [] } = deps;


    // 桑基图是反过来的
    data.links.push({
      source: target,
      target: src,
      value: 1
    });

    const key = `${target}-${src}`;
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

export function MrSankey(...packages: Array<ITaskPackages>): IEchartsGraphData {
  const data = packages.reduce((data, pack) => {
    return putIntoData(data, pack)
  }, getEmptyData());

  return cookForECharts(data);
}

