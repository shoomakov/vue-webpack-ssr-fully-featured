/* eslint-disable */
declare module 'vue-class-component' {
  declare type VueClass = typeof Vue

  declare type Component = {
    (target: VueClass): VueClass;
    (options: Vue$ComponentOptions): (target: VueClass) => VueClass;
    registerHooks (keys: Array<string>): void;
  }

  declare export function createDecorator(factore: (options: Vue$ComponentOptions, key: string) => void): (target: Vue, key: string) => void;
  declare export function createDecorator(factory: (options: Vue$ComponentOptions, key: string, index: number) => void): (target: Vue, key: string, index: number) => void;

  declare export default Component;
}
