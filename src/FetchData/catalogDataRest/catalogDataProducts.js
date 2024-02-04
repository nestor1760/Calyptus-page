import { catalogActionRequestError, catalogActionRequestLoading, catalogActionRequestSuccess } from '../../store/catalogReducer/catalogReducer'

 

export const catalogDataProducts = (catalogProducts) => async (dispatch) => {
    dispatch(catalogActionRequestLoading())
    try {
      dispatch(catalogActionRequestSuccess(catalogProducts))
    } catch (error) {
      dispatch(catalogActionRequestError(error))
    }
}