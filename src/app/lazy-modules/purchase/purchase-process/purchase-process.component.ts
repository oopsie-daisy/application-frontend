import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {PurchaseView} from 'src/app/model/view/purchase-view';
import {UrlConstants} from 'src/app/utils/url-constants';
import {ScrollUtils} from 'src/app/utils/scroll-utils';
import {MatStepper} from '@angular/material/stepper';
import {StepFormComponent} from 'src/app/model/common/step-form-component';
import {FlowerView} from 'src/app/model/view/flower-view';
import {ActivatedRoute, Router} from '@angular/router';
import {FlowerService} from 'src/app/core/services/flower.service';
import {FlowerColorEnumUtils} from 'src/app/model/enum/flower-color-enum';
import {DeliveryOptionEnumUtils} from 'src/app/model/enum/delivery-option-enum';
import {PaymentService} from 'src/app/core/services/payment.service';

const LAST_STEP_NUMBER = 2;

@Component({
  selector: 'app-purchase-process',
  templateUrl: './purchase-process.component.html',
  styleUrls: ['./purchase-process.component.scss']
})
export class PurchaseProcessComponent implements OnInit {

  UrlConstants = UrlConstants;
  lastStepNumber = LAST_STEP_NUMBER;
  colorNames = FlowerColorEnumUtils.getTranslatedNames();
  deliverOptionDescriptions = DeliveryOptionEnumUtils.getDeliveryOptionDescriptions();

  @ViewChild('stepper')
  stepper: MatStepper;

  @ViewChildren('step1, step2, step3')
  stepTemplates: QueryList<StepFormComponent>;

  stepLabels = ['Kontaktai', 'Pristatymas', 'Apmokėjimas'];

  model = new PurchaseView();
  selectedFlower: FlowerView;

  availableQuantity: number;
  submitPressed = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private flowerService: FlowerService,
              private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.flowerService.findByUuid(this.activatedRoute.snapshot.queryParams.flowerUuid).subscribe(view => {
      this.selectedFlower = view;
      let base64Data = this.selectedFlower.image;
      this.selectedFlower.image = 'data:image/jpeg;base64,' + base64Data;
      this.model.itemView = this.selectedFlower;
      this.flowerService.getAvailableQuantity(this.selectedFlower.uuid).subscribe(value => {
        this.availableQuantity = value
      });
    });
  }

  previousStep(): void {
    this.stepper.previous();
    ScrollUtils.scrollToTop();
  }

  nextStep(): void {
    const template = this.stepTemplates.find(template => template.stepIndex === this.stepper.selectedIndex);
    if (template && template.form.invalid) {
      template.form.onSubmit(undefined);
      return;
    }
    this.stepper.next();
    ScrollUtils.scrollToTop();
  }

  submitPurchase(): void {
    for (const template of this.stepTemplates) {
      if (template.form?.invalid) {
        template.form.onSubmit(undefined);
        return;
      }
    }

    this.paymentService.placeOrder(this.model).subscribe(() => {
      this.submitPressed = true;
    });
  }

  changeQuantity(quantity: number): void {
    this.model.quantity = quantity;
  }

  returnToFlowerList(): void {
    this.router.navigateByUrl(UrlConstants.buildUrl(UrlConstants.FLOWERS))
  }

}
