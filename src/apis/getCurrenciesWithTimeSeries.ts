import {Axios} from './axios';



export const getCurrenciesWithTimeSeries = async (
  params: any,
  successCallback: Function,
  errorCallback: Function,
) => {
  Axios("GET", "/timeseries", params)
    .then(res => {
      if (res.data?.success && res.data?.rates && res.data?.timeseries) {
        successCallback(res.data);
      }
    })
    .catch(err => {
      console.log('get currencies err ===>>> ', err);
      errorCallback(err)
    })
};
