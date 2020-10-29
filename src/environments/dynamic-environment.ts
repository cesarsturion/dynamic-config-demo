declare var window: any;

export class DynamicEnvironment {
    public get environment() {
        return window.config.environment;
    }
    public get _apiURL() {
      return window.config.environment;
  }
}