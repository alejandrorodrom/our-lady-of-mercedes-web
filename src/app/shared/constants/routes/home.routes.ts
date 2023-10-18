import { MODULES_ROUTES } from "./modules.routes";

const HOME_PAGES = {
  SUMMARY: ''
} as const;

export const HOME_ROUTES = {
  SUMMARY: `${MODULES_ROUTES}/${HOME_PAGES.SUMMARY}`
} as const;
