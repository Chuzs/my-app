import moment from 'moment';
export const ServerInfo = {
	tyddUrl: "KEY_TYDD_URL",
	domin: "KEY_DOMIN",
	password: "KEY_PASSWORD",
	deviceNo: "KEY_DEVICENO",
	eventpollTimer: "", //轮询定时器
	queryWaitNumTimer: "", //查询AS01定时器
}

export const AgentInfo = {
	callId: '',
	statusTimer: '',
	skillInfo: '',
	agentId: '',
	lastStatus: '',
	systemCode: '',
	restTime: '',
	provId: '',
}

export const CallInfo = {
	callId: '',
	callDirection: '',
	callerDigits: '',
	calledDigits: '',
	skillName: '',
	skillId: '',
}

export const statusTimer = (props) => {
	let startTime = currentTime();
	if (AgentInfo.statusTimer) {
		clearInterval(AgentInfo.statusTimer);
	}
	AgentInfo.statusTimer = setInterval(() => {
		let duration = moment().diff(moment(startTime), 'seconds');
		props.onTimeChange(formatDuration(duration));
	}, 1000);
}

export const currentTime = () => {
	return moment().format('YYYY-MM-DD HH:mm:ss.SSS');
}

export const formatDuration = duration => {
	if (isNumber(duration) && duration >= 0) {
		const f = n => n < 10 ? '0' + n : n;
		let hour = Math.floor(duration / 3600);
		let minute = Math.floor((duration - hour * 3600) / 60);
		let second = Math.floor(duration - hour * 3600 - minute * 60);
		return f(hour) + ':' + f(minute) + ':' + f(second);
	} else {
		return '00:00:00';
	}
}

export const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 6 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 12 },
	},
};

export const onValuesChange = (props, changedValues, allValues) => {
	props.onChange(removeUndefine(allValues));
}

export const removeUndefine = data => {
	for (let key in data) {
		if (data[key] === undefined) {
			data[key] = "";
		}
	}
	return data;
}

export const isObjectLike = value => !!value && typeof value == 'object';
export const isNumber = value => typeof value == 'number' || (isObjectLike(value) && Object.prototype.toString.call(value) === '[object Number]');