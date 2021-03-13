import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{
    data:Brand[]
}