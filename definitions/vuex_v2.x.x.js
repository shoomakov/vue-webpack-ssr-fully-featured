/**
 * Convert from vuex typescirpt definition(https://github.com/vuejs/vuex/tree/dev/types)
 * eslint-disable
 */
declare module 'vuex' {
  // helpers
  declare type Dictionary<T> = { [key: string]: T };
  declare function mapState (map: string[]): Dictionary<() => any>;
  declare export function mapState (namespace: string, map: string[]): Dictionary<() => any>;
  declare export function mapState (map: Dictionary<string>): Dictionary<() => any>;
  declare export function mapState (namespace: string, map: Dictionary<string>): Dictionary<() => any>;
  declare export function mapState <S>(
    map: Dictionary<(state: S, getters: any) => any>
  ): Dictionary<() => any>;
  declare export function mapState <S>(
    namespace: string,
    map: Dictionary<(state: S, getters: any) => any>
  ): Dictionary<() => any>;

  declare export type MutationMethod = (...args: any[]) => void;
  declare export function mapMutations (map: string[]): Dictionary<MutationMethod>;
  declare export function mapMutations (namespace: string, map: string[]): Dictionary<MutationMethod>;
  declare export function mapMutations (map: Dictionary<string>): Dictionary<MutationMethod>;
  declare export function mapMutations (namespace: string, map: Dictionary<string>): Dictionary<MutationMethod>;

  declare export function mapGetters (map: string[]): Dictionary<() => any>;
  declare export function mapGetters (namespace: string, map: string[]): Dictionary<() => any>;
  declare export function mapGetters (map: Dictionary<string>): Dictionary<() => any>;
  declare export function mapGetters (namespace: string, map: Dictionary<string>): Dictionary<() => any>;

  declare export type ActionMethod = (...args: any[]) => Promise<any[]>;
  declare export function mapActions (map: string[]): Dictionary<ActionMethod>;
  declare export function mapActions (namespace: string, map: string[]): Dictionary<ActionMethod>;
  declare export function mapActions (map: Dictionary<string>): Dictionary<ActionMethod>;
  declare export function mapActions (namespace: string, map: Dictionary<string>): Dictionary<ActionMethod>;

  // core
  declare export type Dispatch = {
    (type: string, payload?: any, options?: DispatchOptions): Promise<any[]>;
    <P: Payload>(payloadWithType: P, options?: DispatchOptions): Promise<any[]>;
  }

  declare export type Commit = {
    (type: string, payload?: any, options?: CommitOptions): void;
    <P: Payload>(payloadWithType: P, options?: CommitOptions): void;
  }

  declare export type ActionContext<S, R> = {
    dispatch: Dispatch;
    commit: Commit;
    state: S;
    getters: any;
    rootState: R;
    rootGetters: any;
  }

  declare export type Payload = {
    type: string;
  }

  declare export type DispatchOptions = {
    root?: boolean;
  }

  declare export type CommitOptions = {
    silent?: boolean;
    root?: boolean;
  }

  declare export type Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any;
  declare export type Action<S, R> = (injectee: ActionContext<S, R>, payload: any) => any;
  declare export type Mutation<S> = (state: S, payload: any) => any;
  declare export type Plugin<S> = (store: Store<S>) => any;

  declare export type Module<S, R> = {
    namespaced?: boolean;
    state?: S;
    getters?: GetterTree<S, R>;
    actions?: ActionTree<S, R>;
    mutations?: MutationTree<S>;
    modules?: ModuleTree<R>;
  }

  declare export type GetterTree<S, R> = {
    [key: string]: Getter<S, R>;
  }

  declare export type ActionTree<S, R> = {
    [key: string]: Action<S, R>;
  }

  declare export type MutationTree<S> = {
    [key: string]: Mutation<S>;
  }

  declare export type ModuleTree<R> = {
    [key: string]: Module<any, R>;
  }

  declare export type StoreOptions<S> = {|
    state?: S;
    getters?: GetterTree<S, S>;
    actions?: ActionTree<S, S>;
    mutations?: MutationTree<S>;
    modules?: ModuleTree<S>;
    plugins?: Plugin<S>[];
    strict?: boolean;
  |}

  declare export class Store<S> {
    constructor(options: StoreOptions<S>): void;

    +state: S;
    +getters: any;

    replaceState(state: S): void;

    dispatch: Dispatch;
    commit: Commit;

    subscribe<P: Payload>(fn: (mutation: P, state: S) => any): () => void;
    watch<T>(getter: (state: S) => T, cb: (value: T, oldValue: T) => void, options?: Vue$WatchOptions): void;

    registerModule<T>(path: string, module: Module<T, S>): void;
    registerModule<T>(path: string[], module: Module<T, S>): void;

    unregisterModule(path: string): void;
    unregisterModule(path: string[]): void;

    hotUpdate(options: {
      actions?: ActionTree<S, S>;
      mutations?: MutationTree<S>;
      getters?: GetterTree<S, S>;
      modules?: ModuleTree<S>;
    }): void;
  }

  declare export function install (Vue: typeof Vue): void;

  // namespace
  declare export default {
    install: install,
    Store: typeof Store
  }
}
