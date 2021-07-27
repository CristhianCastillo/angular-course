import { Component, Input, Output, EventEmitter, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../product.model';

// Decorador @Component
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;

    @Output() productClicked = new EventEmitter<Product>();

    constructor() {
        console.log('1. constructor');
    }

    // Este evento colisiona con el evento DoCheck, solo usar uno de los dos.
    // public ngOnChanges(changes: SimpleChanges): void {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    // Se ejecuta cunado el componente esta en pantalla.
    public ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    public ngDoCheck(): void {
        console.log('4. ngDoCheck');
    }

    public ngOnDestroy(): void {
        console.log('5. ngOnDestroy');
    }

    public addCarrito(): void {
        this.productClicked.emit(this.product);
    }
}