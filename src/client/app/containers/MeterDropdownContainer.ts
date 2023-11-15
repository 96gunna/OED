/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as _ from 'lodash';
import { connect } from 'react-redux';
import { selectMeterDataById } from 'redux/api/metersApi';
import MeterDropdownComponent from '../components/MeterDropDownComponent';
import { adminSlice } from '../reducers/admin';
import { RootState } from '../store';
import { Dispatch } from '../types/redux/actions';

function mapStateToProps(state: RootState) {
	return {
		meters: _.sortBy(_.values(selectMeterDataById(state)).map(meter => ({ id: meter.id, name: meter.name })), 'name')
	};
}
function mapDispatchToProps(dispatch: Dispatch) {
	return {
		updateSelectedMeter: (meterID: number) => dispatch(adminSlice.actions.updateImportMeter(meterID))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MeterDropdownComponent);
