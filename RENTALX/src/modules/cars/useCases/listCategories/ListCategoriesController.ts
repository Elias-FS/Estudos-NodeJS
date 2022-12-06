import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(request: Request, Response: Response): Response {
        const all = this.listCategoriesUseCase.execute();
        return Response.json(all);
    }
}

export { ListCategoriesController };
