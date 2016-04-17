import * as webpack from "webpack";

export declare namespace partial {
  type Configuration = webpack.Configuration | ConfigurationTransformer;
  type ConfigurationTransformer = (config: Configuration) => Configuration;
  type Entries = string | string[] | webpack.Entry;
}

export declare function partial(...configs: partial.Configuration[]): webpack.Configuration;
export declare function inject(entries: partial.Entries, module?: string[]): partial.Entries;

export default partial;
