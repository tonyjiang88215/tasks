import { ITaskPackages } from '../declare';

import { MrCookEnum } from './declare';
import { MrForceRelation } from './mister-force-relation';
import { MrSankey } from './mister-sankey';



export function cook(type: MrCookEnum, ...packages: Array<ITaskPackages>) {
  switch(type) {
    case MrCookEnum.ForceRelation:
      return MrForceRelation(...packages);

    case MrCookEnum.Sankey:
      return MrSankey(...packages);
  }
}