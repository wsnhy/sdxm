import Api from "../common/Api"
import {CARTSURL} from "../common/AjaxUrlSchema"

export default  {

  getCarts(cb){
    Api.get(CARTSURL,cb)
  }
}
