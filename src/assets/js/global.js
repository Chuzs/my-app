import moment from 'moment';
import axios from 'axios';
export const ServerInfo = {
	eventpollTimer: "", //轮询定时器
	queryWaitNumTimer: "", //查询AS01定时器
}

export const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 6, offset: 1 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 12 },
	},
};

export const AgentInfo = {
	callId: '',
	statusTimer: '',
	skillInfo: '',
	agentId: '',
	lastStatus: '',
	systemCode: '',
	restTime: '',
	provId: '',
	skillNameList: []
}

export const CallInfo = {
	callId: '',
	callDirection: '',
	callerDigits: '',
	calledDigits: '',
	skillName: '',
	skillId: '',
}

export const statusTimer = props => {
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

export const onValuesChange = (props, changedValues, allValues) => {
	// console.log(removeUndefine(allValues))
	props.onChange(removeUndefine(allValues));
}

export const removeUndefine = data => {
	for (let key in data) {
		if (data[key] === undefined || data[key] === "null") {
			data[key] = "";
		} else if (isObjectLike(data[key])) {
			removeUndefine(data[key]);
		}
	}
	return data;
}

export const isObjectLike = value => !!value && typeof value == 'object';

export const isNumber = value => typeof value == 'number' || (isObjectLike(value) && Object.prototype.toString.call(value) === '[object Number]');

export const buildRes = (interfaceName, res) => {
	return moment().format('YYYY-MM-DD HH:mm:ss.SSS') + '    ' + interfaceName + ': ' + JSON.stringify(res, null, 4) + '\n'
}

export const eventpoll = props => {
	axios.post("http://" + JSON.parse(localStorage.getItem("config")).tyddURL + "/ccacs/ws/event/poll", '{}', {
		withCredentials: true,
		timeout: 11000,
	}).then((res) => {
		if (res.data.events.length !== 0) {
			props.onResponse(buildRes('eventpoll', res.data));
			for (var i = 0; i < res.data.events.length; i++) {
				if (res.data.events[i].eventId === 351 && res.data.events[i].agentState === 5) {
					// if ($("#status").text() === '通话中') {
					//     stateTimer();
					// }
					// $("#status").text('整理态').attr('class', 'btn dropdown-toggle btn-warning');
					// $('#btnGroup button').attr('disabled', true);
					// $('#setStateBtn, #transferBtn, #restBtn, #otherWorkBtn, #loginBtn, #autoOtherWorkBtn, #status_btn').attr('disabled', false);
					// $('#otherWorkBtn').text('取消整理');
					if (props.statusText !== '通话中') {
						statusTimer(props);
					}
					props.onStatusTextChange({ text: '整理态', className: 'btn-sunset' });
					props.onOtherworkChange({ otherworkBtnText: '取消整理' });
				} else if (res.data.events[i].eventId === 351 && res.data.events[i].agentState === 4) {
					// if ($("#status").text() !== '待接听') {
					//     $("#status").text('空闲').attr('class', 'btn dropdown-toggle btn-success');
					//     $("#setStateBtn").text('示忙').attr('class', 'btn btn-warning');
					//     $('#otherWorkBtn').text('整理');
					//     $('#btnGroup button').attr('disabled', true);
					//     $('#setStateBtn, #transferBtn, #restBtn, #callOutBtn, #otherWorkBtn, #loginBtn, #autoOtherWorkBtn, #status_btn').attr('disabled', false);
					// }
					statusTimer(props);
					if (props.statusText !== '待接听') {
						console.log("示忙")
						props.onStatusTextChange({ text: '空闲', className: 'btn-green' });
						props.onSetStatusChange({ text: '示忙', className: 'btn-volcano' });
						props.onOtherworkChange({ otherworkBtnText: '整理' });
					}
				} else if (res.data.events[i].eventId === 351 && res.data.events[i].agentState === 3) {
					// stateTimer();
					// $("#status").text('忙碌').attr('class', 'btn dropdown-toggle btn-danger');
					// $("#setStateBtn").text('示闲').attr('class', 'btn btn-success');
					statusTimer(props);
					props.onStatusTextChange({ text: '忙碌', className: 'btn-volcano' });
					props.onSetStatusChange({ text: '示闲', className: 'btn-green' });
				} else if (res.data.events[i].eventId === 351 && res.data.events[i].agentState === 1) {
					// $("#loginBtn").text('签出').attr('class', 'btn btn-danger');
					props.onLoginChange({ text: '签出', className: 'btn-dust' })
				} else if (res.data.events[i].eventId === 304) {
					// stateTimer();
					// $("#status").text('通话中').attr('class', 'btn dropdown-toggle btn-danger');
					// $('#btnGroup button').attr('disabled', true);
					// $("#transferBtn, #restBtn, #setStateBtn, #releaseCallBtn, #muteBtn, #holdBtn, #verifyBtn, #autoOtherWorkBtn,#hangup_btn,#status_btn").attr('disabled', false);
					// AgentInfo.callId = res.data.events[i].callId;
					// CallInfo.callId = res.data.events[i].callId;
					// CallInfo.callDirection = res.data.events[i].callDirection;
					// CallInfo.callerDigits = res.data.events[i].callerAddress;
					// CallInfo.calledDigits = res.data.events[i].calledAddress;
					// $("input[name='callId']").val(JSON.stringify(res.data.events[i].callId));
					// if (res.data.events[i].callDirection === '1') {
					//     $('#phoneNum').val(res.data.events[i].callerAddress);
					// } else if (res.data.events[i].callDirection === '2') {
					//     $('#phoneNum').val(res.data.events[i].calledAddress);
					// }
					// alert(res.data.events[i].callId);
					statusTimer(props);
					props.onStatusTextChange({ text: '通话中', className: 'btn-volcano' });
					CallInfo.callId = res.data.events[i].callId;
					CallInfo.callDirection = res.data.events[i].callDirection;
					CallInfo.callerDigits = res.data.events[i].callerAddress;
					CallInfo.calledDigits = res.data.events[i].calledAddress;
				} else if (res.data.events[i].eventId === 300) {
					// stateTimer();
					// $("#status").text('待接听').attr('class', 'btn dropdown-toggle btn-warning');
					// $('#btnGroup button').attr('disabled', true);
					// $("#transferBtn, #releaseCallBtn, #setStateBtn, #restBtn,#anwser_btn,#hangup_btn, #status_btn").attr('disabled', false);
					statusTimer(props);
					props.onStatusTextChange({ text: '待接听', className: 'btn-sunset' });
				} else if (res.data.events[i].eventId === 351 && res.data.events[i].agentState === 8) {
					// if (AgentInfo.restTime) {
					//     countdownTimer(AgentInfo.restTime, function () {
					//         setState('8', '0', function (data) {
					//             if (res.data.result === '0') {
					//                 $('#restBtn').text('休息');
					//                 AgentInfo.restTime = '';
					//             }
					//         });
					//     });
					// } else {
					//     stateTimer();
					// }
					// $("#status").text('休息').attr('class', 'btn dropdown-toggle btn-info');
				} else if (res.data.events[i].eventId === 352) {
					// if (AgentInfo.statusTimer) {
					// 	clearInterval(AgentInfo.statusTimer);
					// }
					// $('#txtDuration').text('00:00:00');
					// $("#status").text('未签入').attr('class', 'btn dropdown-toggle');
					// init();
					// $("#loginBtn").text('签入').attr('class', 'btn btn-success');
					// $("input[name='callId']").val('');
					if (AgentInfo.statusTimer) {
						clearInterval(AgentInfo.statusTimer);
					}
					props.onTimeChange('00:00:00');
					props.onStatusTextChange({ text: '未签入', className: '' });
					props.onLoginChange({ text: '签入', className: 'btn-green' })
				} else {
					// if (res.data.events[i].eventId === '308') {
					//     queryCallres.Data(function (data) {
					//         if (res.data.callres.Data) {
					//             var callData = decodeBase64(data.callData);

					//         }
					//     })
					// }
				}
			}
		}
	})
}

export const queryWaitNum = props => {
	let params = {
		agentId: AgentInfo.agentId,
		systemCode: AgentInfo.systemCode
	}
	axios.post("http://" + JSON.parse(localStorage.getItem("config")).tyddURL + "/ccacs/ws/query/queryacdstatus", JSON.stringify(params), {
		withCredentials: true,
	}).then((res) => {
		let queueSize = 0;
		if (res.data.result === '0') {
			for (let i in res.data.hwAcdInfos) {
				queueSize += res.data.hwAcdInfos[i].queueSize;
			}
		} else if (res.data.result === '150001') {
			if (ServerInfo.queryWaitNumTimer) {
				clearInterval(ServerInfo.queryWaitNumTimer);
			}
		}
		props.onWaitNumChange(queueSize);
	})
}

export const postMsg = (props, params, url) => {
	const interfaceName = url.substring(url.lastIndexOf('/') + 1)
	return axios.post("http://" + JSON.parse(localStorage.getItem("config")).tyddURL + url, JSON.stringify(params), {
		withCredentials: true,
	}).then((res) => {
		props.onResponse(buildRes(interfaceName, res.data));
	}).catch(error => {
		props.onResponse(buildRes(interfaceName, { "message": error.message }));
	})
}