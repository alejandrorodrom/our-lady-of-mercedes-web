import { MODULES_ROUTES } from "./modules.routes";

export const VIRTUAL_ANATOMY_PAGES = {
  PRESENTATION: 'presentacion',
  SEARCH_GROUPS: 'buscar-grupos',
  CREATE_GROUP: 'crear-grupo',
  DATA_GROUPS: 'datos-grupos'
} as const;

export const VIRTUAL_ANATOMY_ROUTES = {
  PRESENTATION: `${MODULES_ROUTES.VIRTUAL_ANATOMY}/${VIRTUAL_ANATOMY_PAGES.PRESENTATION}`,
  SEARCH_GROUPS: `${MODULES_ROUTES.VIRTUAL_ANATOMY}/${VIRTUAL_ANATOMY_PAGES.SEARCH_GROUPS}`,
  CREATE_GROUP: `${MODULES_ROUTES.VIRTUAL_ANATOMY}/${VIRTUAL_ANATOMY_PAGES.CREATE_GROUP}`,
  DATA_GROUPS: `${MODULES_ROUTES.VIRTUAL_ANATOMY}/${VIRTUAL_ANATOMY_PAGES.DATA_GROUPS}`
} as const;
