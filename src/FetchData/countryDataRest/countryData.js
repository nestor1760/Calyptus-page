import axios from "axios"
import { actionErrorRequest, actionLoadingRequest, actionSuccessRequest } from "../../store/countryReducer/countryReducer"

 

export const countryData = (url) => async (dispatch) => {
    dispatch(actionLoadingRequest())
    try {
      const responce = await axios.get(url)
      dispatch(actionSuccessRequest(responce.data))
    } catch (error) {
      dispatch(actionErrorRequest(error))
    }
}