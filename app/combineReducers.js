//
import {combineReducers,createStore} from 'redux';
const userReducer= (state={},action)=> {
	if(action.type=='SETNAME')
	{
		state={...state,name:action.name};
	}
	else
	{
		state={...state,age:action.age};
	}
	return state;
}
const tweetsReducer= (state={},action)=> {
	
	return state;
}

const reducers=combineReducers({
	user:userReducer,
	tweets:tweetsReducer,
})

const store = createStore(reducers,{
	user:{
		name:'hello',
		age:'35',
	},
	tweets:[]
});
store.subscribe(()=>{
	console.info('state:',store.getState());
})
store.dispatch({ type: 'SETNAME' ,name:'zhong'})
