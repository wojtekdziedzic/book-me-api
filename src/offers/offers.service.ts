import { Injectable, NotFoundException } from '@nestjs/common';
import { Offer } from './offer.model';

@Injectable()
export class OffersService {
  private offers: Offer[] = [];

  insertOffer(title: string, description: string, price: number) {
    const offerId = new Date().getTime().toString();
    const newOffer = new Offer(offerId, title, description, price);
    this.offers.push(newOffer);
    return offerId;
  }

  getOffers() {
    return [...this.offers];
  }

  getSingleOffer(id: string) {
    const offer = this.offers.find((o) => {
      return o.id === id;
    });
    return { ...offer };
  }

  updateOffer(id: string, title: string, description: string, price: number) {
    const [offer, index] = this.findOffer(id);
    const updatedOffer = { ...offer };
    if (title) {
      updatedOffer.title = title;
    }
    if (description) {
      updatedOffer.description = description;
    }
    if (price) {
      updatedOffer.price = price;
    }
    this.offers[index] = updatedOffer;
  }

  deleteOffer(id: string) {
    const index = this.findOffer(id)[1];
    this.offers.splice(index, 1);
  }

  private findOffer(id: string): [Offer, number] {
    const offerIndex = this.offers.findIndex(o => o.id === id);
    const offer = this.offers[offerIndex];
    if (!offer) {
      throw new NotFoundException('Offers not found');
    }
    return [offer, offerIndex];
  }

}
