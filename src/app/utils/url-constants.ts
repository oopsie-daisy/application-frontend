export class UrlConstants {
  public static readonly URL_SEPARATOR = '/';
  public static readonly ID = ':id';

  public static readonly COMPONENT_EXAMPLES = 'component-examples';

  // how to use: for example, your route is shop/{id}, so you write UrlConstants.buildUrl(UrlConstants.SHOP, model.id),
  // where model is your, let's say, DTO. 'model' is just a name of your variable
  public static buildUrl(...args: string[]): string {
    return this.URL_SEPARATOR + args.join(this.URL_SEPARATOR);
  }
}
