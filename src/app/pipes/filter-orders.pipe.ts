import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../interfaces/order';

@Pipe({
  name: 'filterOrders',
})
export class FilterOrdersPipe implements PipeTransform {
  transform(
    orders: Order[] | null,
    propertyName: keyof Omit<Order, 'price'>,
    searchTerm: string
  ): Order[] | null {
    if (!orders) {
      return null;
    }

    const filtered = orders.filter((order) =>
      order[propertyName]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered;
  }
}
