/**
 * @private
 * Some internal methods of Rsbuild.
 * Please do not use them in your Rsbuild project or plugins.
 */

export { runCli } from './cli/commands';
export { prepareCli } from './cli/prepare';
export { initPlugins, createPluginManager } from './pluginManager';
export { initHooks, type Hooks } from './initHooks';
export { initRsbuildConfig } from './provider/initConfigs';
export { stringifyConfig, outputInspectConfigFiles } from './config';
export type { InternalContext } from './types';
export { setHTMLPlugin, getHTMLPlugin } from './pluginHelper';
export { formatStats, getStatsOptions, onCompileDone } from './helpers';
export { getChainUtils } from './provider/rspackConfig';
export { chainToConfig, modifyBundlerChain } from './configChain';
export { applySwcDecoratorConfig } from './plugins/swc';
export { getSwcMinimizerOptions } from './plugins/minimize';
export { getDevMiddleware } from './server/devMiddleware';
export { createDevServer } from './server/devServer';
export { TARGET_ID_MAP } from './constants';
