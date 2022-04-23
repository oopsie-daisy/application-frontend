export class ScrollUtils {

  public static scrollToTop(): void {
    setTimeout(() => window.scroll({top: 0, left: 0, behavior: 'smooth'}));
  }

  public static scrollToElement(element: Element): void {
    element?.scrollIntoView({behavior: 'smooth'});
  }

}
