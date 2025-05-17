import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from "src/app/core/dialog/dialog.component";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor(
        private dialog: MatDialog,
    ) { }

    dialogRef?: MatDialogRef<any>;

    openDialog(templateRef: any, config?: MatDialogConfig, dialogData?: any): void {
        this.dialogRef = this.dialog.open(DialogComponent, {
            width: config?.width ? config.width : '80%',
            maxHeight: '100vh',
            maxWidth: '100vw',
            height: config?.height ? config.height : '80%',
            panelClass: config?.panelClass,
            data: {
                templateRef,
                dialogData
            },
            hasBackdrop: true
        });

    }
}