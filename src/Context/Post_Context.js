import {createContext, useContext, useReducer} from "react";

const Post_state_context = createContext(null);
const Post_dispatch_context = createContext(null);

function Post_reducer(state, action) {
    switch (action.type) {
        // case "SET_Post" : {
        //     return {...state, Post_text : action.payload};
        // }
        case "LIKE_Post" :{
            const Post_id = action.payload;
            const founded_index = state.Post_list.findIndex((item)=>item.post_id === Post_id);

            if (founded_index === -1) {
                return state;
            }
            return {...state, Post_list : [
                    ...state.Post_list.slice(0,founded_index),
                    {
                        ...state.Post_list[founded_index],
                        like_num : state.Post_list[founded_index].like_num +1
                    },
                    ...state.Post_list.slice(founded_index+1)
                ]};
        }
        case "SET_Post_List": {
            return {...state, Post_list: action.payload};
        }
        default:{
            throw new Error("unhandled action type");
        }

    }
}

function Post_provider({children}) {
    const [state, dispatch] = useReducer(Post_reducer, {
        // Post_text : "",
        Post_list : []
    });

    return(
        <Post_state_context.Provider value={state}>
            <Post_dispatch_context.Provider value={dispatch}>
                {children}
            </Post_dispatch_context.Provider>
        </Post_state_context.Provider>
    );
}

function Use_Post_State() {
    let post_state = useContext(Post_state_context);
    if (post_state === undefined){
        throw new Error("usePostState must be use within a PostProvider");
    }
    return post_state;
}

function Use_Post_Dispatch() {
    let post_dispatch = useContext(Post_dispatch_context);
    if (post_dispatch === undefined){
        throw new Error("usePostDispatch must be use within a PostProvider");
    }
    return post_dispatch;
}

// function set_Post_text(dispatch, post_text) {
//     dispatch({
//         type : "SET_Post",
//         payload : post_text
//     });
// };

function post_like(dispatch, post_id) {
    dispatch({
        type : "LIKE_Post",
        payload : post_id
    });
};

function set_Post_list(dispatch, post_list) {
    dispatch({
        type : "SET_Post_List",
        payload : post_list
    });
};

export {
    Post_provider,
    Use_Post_State,
    Use_Post_Dispatch,
    // set_Post_text,
    set_Post_list,
    post_like,};