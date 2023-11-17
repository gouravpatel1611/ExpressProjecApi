import ProductModel from "../models/ProductModel.js";


class productController {
    static getAllProduct = async (req,res)=>{
        try{
            const {title,price,brand,category,sort,select} = req.query;
            const queryObj ={};
            if(title) queryObj.title = {$regex:title,$options:"i"};
            if(price) queryObj.price = price;
            if(brand) queryObj.brand = brand;
            if(category) queryObj.category = category;
            let  products =  ProductModel.find(queryObj);
            if(select) {
                const select_fix = select.split(",").join(" ");
                products = products.select(select_fix);
            }

            if(sort){
                const sort_fix = sort.replace(","," ");
                products = products.sort(sort_fix);
            }

            //Pagination
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 5;
            const skip = (page-1)*limit;
            products = products.skip(skip).limit(limit);
            
            const mydata = await products;
            res.status(200).json({mydata,nbHits: mydata.length});
        }catch(err){
            console.log(err);
        }
    }
    static getAllProductTesting = async (req,res)=>{
        try{
            const products = await ProductModel.find(req.query).sort("price");
            res.status(200).json(products);
        }catch(err){
            console.log(err);
        }
    }
}


export default productController;