import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationAreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAreadyExists) {
            throw new Error(`Specification ${name} already exists`);
        }

        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
