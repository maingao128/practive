export default {
	init(state, preState) {
		return state;
	},

	deleteResource(payload, state) {
		try{
			state.infos[payload.listIndex].resourses.splice(payload.resourceIndex, 1);
		}catch(e){
			console.warn("[deleteResource]删除报错，数据格式不正确，请检查state.infos是否为空数组");
		}
		return {...state};
	},

	addResource(payload, state) {
		try{
			let resourses = state.infos[payload.listIndex].resourses;
			state.infos[payload.listIndex].resourses = resourses.concat(payload.value.split(","));
		}catch(e){
			console.warn("[addResource]添加报错，数据格式不正确，请检查state.infos是否为空数组");
		}
		return {...state};
	}
};