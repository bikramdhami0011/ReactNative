const { createSlice, nanoid } = require("@reduxjs/toolkit");
const initialState={
    UserAddCard:[]
}
export const Slice =createSlice({
    name:"AddCard",
    initialState,
    reducers:{
           Add_To_Card:(state,action)=>{
                    const actulalitem=action.payload
                    const data={
                        id:nanoid(),
                        items:actulalitem
                    }
                 
               state.UserAddCard.push(data);
           },
//            Remove_To_Card:(state,action)=>{
//             const actulalitem=action.payload
//            actulalitem.filter((elem)=>{
//             console.log(elem);
//            })
//    }
    }
})
export const {Add_To_Card}=Slice.actions;
export default Slice.reducer