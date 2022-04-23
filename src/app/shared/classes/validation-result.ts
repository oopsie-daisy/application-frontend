export class ValidationResult {

  public errorLabel: string;
  public errorLabelParam?: any;

  constructor(errorLabel: string, errorLabelParam?: any) {
    this.errorLabel = errorLabel;
    this.errorLabelParam = errorLabelParam;
  }

}
