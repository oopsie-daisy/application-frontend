export class UrlConstants {
  public static readonly URL_SEPARATOR = '/';
  public static readonly ID = ':id';

  public static readonly HOME = 'pradinis';
  public static readonly COMPONENT_EXAMPLES = 'component-examples';

  public static readonly FLOWERS = 'geles';
  public static readonly PLANTS = 'augalai';
  public static readonly GIFTS = 'dovanos';
  public static readonly DECORATIONS = 'dekoracijos';
  public static readonly ABOUT = 'apie';

  public static readonly CITIES = 'miestai';
  public static readonly ACCOUNT = 'paskyra';
  public static readonly SEARCH = 'paieska';
  public static readonly SHOPPING_CART = 'krepselis';

  // how to use: for example, your route is shop/{id}, so you write UrlConstants.buildUrl(UrlConstants.SHOP, model.id),
  // where model is your, let's say, DTO. 'model' is just a name of your variable
  public static buildUrl(...args: string[]): string {
    return this.URL_SEPARATOR + args.join(this.URL_SEPARATOR);
  }
}
