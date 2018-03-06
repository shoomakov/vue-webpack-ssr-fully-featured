/**
 * Convert from vue-router typescirpt definition(https://github.com/vuejs/vue-router/blob/dev/types)
 * eslint-disable
 */

/***** router  *****/
type VueRouter$Component = Vue$ComponentOptions | typeof Vue;
type VueRouter$Dictionary<T> = { [key: string]: T };

type VueRouter$ComponentOptions<T: Vue> = Vue$ComponentOptions & {
  beforeRouteEnter?: VueRouter$NavigationGuard<T>;
  beforeRouteLeave?: VueRouter$NavigationGuard<T>;
  beforeRouteUpdate?: VueRouter$NavigationGuard<T>;
};

type VueRouter$Vue = {
  $route: VueRouter$Route,
  $router: VueRouter
};

type VueRouter$RouterMode = "hash" | "history" | "abstract";
type VueRouter$RawLocation = string | VueRouter$Location;
type VueRouter$RedirectOption = VueRouter$RawLocation | ((to: VueRouter$Route) => VueRouter$RawLocation);

type VueRouter$NavigationGuard<T> = (
  to: VueRouter$Route,
  from: VueRouter$Route,
  next: (to?: VueRouter$RawLocation | false | ((vm: VueRouter$Vue & T) => any) | void) => void
) => any

declare class VueRouter {
  constructor (options?: VueRouter$RouterOptions): void;
  app: Vue;
  mode: VueRouter$RouterMode;
  currentRoute: VueRouter$Route;

  beforeEach (guard: VueRouter$NavigationGuard<void>): void;
  afterEach (hook: (to: VueRouter$Route, from: VueRouter$Route) => any): void;
  push (location: VueRouter$RawLocation, onComplete?: Function, onAbort?: Function): void;
  replace (location: VueRouter$RawLocation, onComplete?: Function, onAbort?: Function): void;
  go (n: number): void;
  back (): void;
  forward (): void;
  getMatchedComponents (to?: VueRouter$RawLocation): VueRouter$Component[];
  onReady (cb: Function): void;
  addRoutes (routes: VueRouter$RouteConfig[]): void;
  resolve (to: VueRouter$RawLocation, current?: VueRouter$Route, append?: boolean): {
    location: VueRouter$Location;
    route: VueRouter$Route;
    href: string;
    // backwards compat
    normalizedTo: VueRouter$Location;
    resolved: VueRouter$Route;
  };

  static install: Vue$PluginFunction;
}

type VueRouter$RouterOptions = {
  routes?: Array<VueRouter$RouteConfig>;
  mode?: VueRouter$RouterMode;
  base?: string;
  linkActiveClass?: string;
  scrollBehavior?: (
    to: VueRouter$Route,
    from: VueRouter$Route,
    savedPosition: { x: number, y: number } | void
  ) => { y: number } | { x: number, y: number } | { selector: string } | void;
}

type VueRouter$RoutePropsFunction = (route: VueRouter$Route) => Object;

type VueRouter$RouteConfig = {
  path: string;
  name?: string;
  component?: VueRouter$Component;
  components?: VueRouter$Dictionary<VueRouter$Component>;
  redirect?: VueRouter$RedirectOption;
  alias?: string | Array<string>;
  children?: VueRouter$RouteConfig[];
  meta?: any;
  beforeEnter?: VueRouter$NavigationGuard<void>;
  // props?: boolean | VueRouter$RoutePropsFunction | Object;
  props?: boolean | {$call?: VueRouter$RoutePropsFunction};
};

type VueRouter$RouteRecord = {
  path: string;
  components: VueRouter$Dictionary<VueRouter$Component>;
  instances: VueRouter$Dictionary<Vue>;
  name?: string;
  parent?: VueRouter$RouteRecord;
  redirect?: VueRouter$RedirectOption;
  matchAs?: string;
  meta: any;
  beforeEnter?: (
    route: VueRouter$Route,
    redirect: (location: VueRouter$RawLocation) => void,
    next: () => void
  ) => any;
  props: boolean | VueRouter$RoutePropsFunction | VueRouter$Dictionary<boolean | Object | VueRouter$RoutePropsFunction> | Object;
};

type VueRouter$Location = {|
  name?: string;
  path?: string;
  hash?: string;
  query?: VueRouter$Dictionary<string>;
  params?: VueRouter$Dictionary<string>;
  append?: boolean;
  replace?: boolean;
|};

type VueRouter$Route = {
  path: string;
  name?: string;
  hash: string;
  query: VueRouter$Dictionary<string>;
  params: VueRouter$Dictionary<string>;
  fullPath: string;
  matched: VueRouter$RouteRecord[];
  redirectedFrom?: string;
  meta?: any;
};

/***** index  *****/
declare module 'vue-router' {
  declare type VueRouterComponentOptions<T> = VueRouter$ComponentOptions<T>;
  declare type RouterMode = VueRouter$RouterMode;
  declare type RawLocation = VueRouter$RawLocation;
  declare type RedirectOption = VueRouter$RedirectOption;
  declare type RouterOptions = VueRouter$RouterOptions;
  declare type RouteConfig = VueRouter$RouteConfig;
  declare type RouteRecord = VueRouter$RouteRecord;
  declare type Location = VueRouter$Location;
  declare type Route = VueRouter$Route;
  declare type NavigationGuard<T> = VueRouter$NavigationGuard<T>;

  declare module.exports: typeof VueRouter;
}
