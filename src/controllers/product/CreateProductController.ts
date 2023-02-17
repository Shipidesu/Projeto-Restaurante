import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        const { name, price, description, category_id } = req.body;

        if(!req.file){
            throw new Error("erro de envio de arquivo")
        }else{
            const { originalname, filename } = req.file;
            console.log(filename)
        }

        const createProductService = new CreateProductService()

        const product = await createProductService.execute({name, price, description, banner: '', category_id})

        return res.json(product)

    }
}

export { CreateProductController }