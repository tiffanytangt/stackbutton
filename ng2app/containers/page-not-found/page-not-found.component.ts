import {Component} from '@angular/core';
@Component({
    selector: 'page-not-found',
    template: '' +
    '<div fxLayout="column" fxFlexFill fxLayoutAlign="center center" fxLayoutGap="20px">' +
    '<span>Oops! Something has gone wrong.</span>' +
    '<button md-raised-button color="primary" onClick="window.history.back()">Go Back</button>' +
  '</div>'
})
export class PageNotFoundComponent {

}
