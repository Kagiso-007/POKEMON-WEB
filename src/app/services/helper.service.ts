import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { SpinnerDialogComponent } from '../components/spinner-dialog/spinner-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private spinnerObservable!: Observable<any>;

  constructor(private dialog: MatDialog) { 
    this.spinnerObservable = new Observable<any>(this.setTimeout);
  }

  private setTimeout(observer: any) {
    setTimeout(() => { observer.complete() }, 10_000)
  }

  public showProgressSpinner() {
    let dialogRef: MatDialogRef<SpinnerDialogComponent> = this.dialog.open(SpinnerDialogComponent, {
      id: 'spinner',
      panelClass: 'transparent',
      disableClose: true
    });

    let subscription = this.spinnerObservable.subscribe((response) => {
      subscription.unsubscribe();
      dialogRef.close();
    }, (error) => {
      subscription.unsubscribe();
      dialogRef.close();
    });
  }

  public closeProgressSpinner() {
    this.dialog.getDialogById('spinner')?.close();
  }
}
