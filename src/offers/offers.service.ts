import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './offer.entity';

@Injectable()
export class OffersService {

  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
  ) {
  }

  async findAllOffers(): Promise<Offer[]> {
    return await this.offerRepository.find();
  }

  async findOffer(offerId): Promise<Offer[]> {
    return await this.offerRepository.find({
      where: {
        id: offerId,
      },
    });
  }

  async findActiveOffers(): Promise<Offer[]> {
    return await this.offerRepository.find({
      where: {
        active: 1,
      },
    });
  }

  async createOffer(offer: Offer): Promise<Offer> {
    return await this.offerRepository.save(offer);
  }

  async updateOffer(offer: Offer): Promise<UpdateResult> {
    return await this.offerRepository.update(offer.id, offer);
  }

  async deleteOffer(id): Promise<DeleteResult> {
    return await this.offerRepository.delete(id);
  }

}
