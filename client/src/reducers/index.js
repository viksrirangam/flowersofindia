import { combineReducers } from 'redux';

import catalogs from './catalogs';
import catalog from './catalogs';
import plant from './plant';

export default combineReducers({
    catalogs,
    catalog,
    plant
});