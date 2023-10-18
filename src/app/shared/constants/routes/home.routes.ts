import { MODULES_ROUTES } from "./modules.routes";

export const HOME_PAGES = {
  SUMMARY: ''
} as const;

export const HOME_ROUTES = {
  SUMMARY: `${MODULES_ROUTES.HOME}/${HOME_PAGES.SUMMARY}`
} as const;
