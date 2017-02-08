 import {applyMiddleware,createStore} from 'redux';
 import logger from 'redux-logger';
 import thunk from 'redux-thunk';
 const initialState={
 	fetching:false,
 	fetched:false,
 	users:[],
 	error:null
 };
const reducer=(initialState=0,action)=>{
		if(action.type=='SETNAME')
		{
			initialState={...initialState,name:action.name};
		}
		else if(action.type=='WRONG')
		{
			throw new Error('AAAAA!!!!!');
		}
		return initialState;
}

const error=(store) => (next) => (action) =>{
	try{
		next(action)
	}catch(e){
		console.info('wrong!',e);
	}
}

const middleware=applyMiddleware(thunk(),error);

const store = createStore(reducer,1,middleware);

store.subscribe(()=>{
	// console.info('state:',store.getState());
})
store.dispatch({ type: 'SETNAME' ,name:'zhong'})
// store.dispatch({ type: 'WRONG' ,name:'wrong'})
store.dispatch({ type: 'SETNAME' ,name:'peipei'})
