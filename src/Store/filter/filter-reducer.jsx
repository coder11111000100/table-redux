import { createSlice } from "@reduxjs/toolkit";

const reduce = createSlice({
  name: "filter",
  initialState: {
    coll: "",
    condition: "",
    content: "",
  },
  reducers: {
    setFilter: (state, action) => {
      const { coll, condition, content } = action.payload;
      if (coll !== undefined) state.coll = coll;
      if (condition !== undefined) state.condition = condition;
      if (content !== undefined) state.content = content;
    },
  },
});

const { setFilter } = reduce.actions;

const reduceFilter = reduce.reducer;

export { setFilter, reduceFilter };
