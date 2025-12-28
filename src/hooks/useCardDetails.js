import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function useEntityById(paramName, selectedCard, statusSelector, errorSelector, clearSelectedAction, fetchFun) {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params[paramName];
  
  const entity = useSelector(selectedCard);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  
  // Fetch specific entity by ID
  useEffect(() => {
    if (id) {
      dispatch(fetchFun(id));
    }

   return () => {
      dispatch(clearSelectedAction());
    };
  }, [id, dispatch, fetchFun, clearSelectedAction]);
  
  return { entity, status, error };
   
}

export default useEntityById;
