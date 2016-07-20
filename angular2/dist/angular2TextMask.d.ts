import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/common';
export default class MaskedInputDirective {
    private ngControl;
    private inputElement;
    control: any;
    textMaskConfig: {
        mask: string;
        guide: boolean;
        placeholderChar: string;
        pipe: any;
        keepCharPositions: boolean;
        onReject: any;
        onAccept: any;
    };
    constructor(inputElement: ElementRef, ngControl: NgControl);
    ngOnInit(): void;
    onInput(): void;
}
export { MaskedInputDirective as Directive };
