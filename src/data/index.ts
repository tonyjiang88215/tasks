import { MrCookEnum } from './cooks/declare';

import { asyncParadigms } from './tasks/async-paramdigms';
import { billTypes } from "./tasks/bill-types";
import { customizedForms } from "./tasks/customized-forms";
import { ecaRules } from "./tasks/eca-rules";
import { forms } from "./tasks/forms";
import { microApps } from "./tasks/micro-apps";
import { microBFFs } from "./tasks/micro-bffs";
import { querySolutions } from "./tasks/query-solutions";
import { refers } from "./tasks/refers";
import { stocks } from "./tasks/stocks";
import { webUnpacks } from "./tasks/web-unpacks";
import { trekUnpacks } from "./tasks/trek-unpacks";
import { documentations } from "./tasks/documentations";

import { cook } from "./cooks";
import { ITaskPackages } from './declare';

export function loadData() {

  return [
    asyncParadigms,
    billTypes,
    customizedForms,
    ecaRules,
    forms,
    microApps,
    microBFFs,
    querySolutions,
    refers,
    // stocks,
    webUnpacks,
    trekUnpacks,
    documentations
  ].reduce((packages, tasks) => {
    packages.tasks = [...packages.tasks, ...tasks.tasks];
    packages.dependencies = [...packages.dependencies, ...tasks.dependencies];
    return packages;
  }, { tasks: [], dependencies: []})

  // return cook(
  //   type,
  //
  //   asyncParadigms,
  //   billTypes,
  //   customizedForms,
  //   ecaRules,
  //   forms,
  //   microApps,
  //   microBFFs,
  //   querySolutions,
  //   refers,
  //   // stocks,
  //   webUnpacks,
  //   trekUnpacks,
  //   documentations
  // );
}

export function cookData(type: MrCookEnum, ...packages: Array<ITaskPackages>) {
  return cook(type, ...packages)
}