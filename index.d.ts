import webpack from "webpack";

export declare namespace partial {
  type Configuration = webpack.Configuration | ConfigurationTransformer;
  type ConfigurationTransformer = (config: Configuration) => Configuration;
}

export declare function partial(...configs: partial.Configuration[]): webpack.Configuration;
export declare function inject(entry: any, module: any): any;

export default partial;
