 import {applyMiddleware,createStore} from 'redux';
 import logger from 'redux-logger';
 import thunk from 'redux-thunk';
 const initialState={
 	fetching:false,
 	fetched:false,
 	users:[],
 	error:null
 };
const reducer=(state=initialState,action)=>{
		if(action.type=='SETNAME')
		{
			state={...state,name:action.name}; //修改state
		}
		else if(action.type=='WRONG')
		{
			throw new Error('AAAAA!!!!!');
		}
		return state;
}

// const error=(store) => (next) => (action) =>{
// 	try{
// 		next(action)
// 	}catch(e){
// 		console.info('wrong!',e);
// 	}
// }

// const middleware=applyMiddleware(thunk,logger());

// const store = createStore(reducer,1,middleware);

// store.subscribe(()=>{
// 	// console.info('state:',store.getState());
// })
// store.dispatch({ type: 'SETNAME' ,name:'zhong'})
// // store.dispatch({ type: 'WRONG' ,name:'wrong'})
// store.dispatch({ type: 'SETNAME' ,name:'peipei'})
