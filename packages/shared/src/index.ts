import { fs } from './re-exports/fs-extra';

export const getCoreJsVersion = (corejsPkgPath: string) => {
  try {
    const { version } = fs.readJSONSync(corejsPkgPath);
    const [major, minor] = version.split('.');
    return `${major}.${minor}`;
  } catch (err) {
    return '3';
  }
};

export * from './applyDefaultBuilderOptions';
export * from './constants';
export * from './createHook';
export * from './pluginStore';
export * from './createContext';
export * from './utils';
export * from './fs';
export * from './generateMetaTags';
export * from './getBrowserslist';
export * from './getCssSupport';
export * from './logger';
export * from './mergeBuilderConfig';
export * from './onExitProcess';
export * from './pick';
export * from './regexp';
export * from './types';
export * from './config';
export * from './format';
export * from './devServer';
export * from './prodServer';
export * from './chain';
export * from './schema';
export * from './plugins';
export * from './openBrowser';
export * from './apply';
export * from './fallback';
export * from './getLoaderOptions';
export * from './svgo';
export * from './patch';
export * from './manifest';
export * from './css';
export * from './minimize';
export * from './core-js';
export * from './progress';
export * from './prettyTime';
