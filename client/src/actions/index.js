export function _getAll (promisePayload) {
  return { type: 'ASYNC_GET_CATELOGS'};
};

export function _getCatalog (promisePayload) {
  return { type: 'ASYNC_GET_CATELOG'};
};

export function _getPlant (promisePayload) {
  return { type: 'ASYNC_GET_PLANT'};
};