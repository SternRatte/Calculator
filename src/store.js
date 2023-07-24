import {createStore} from "vuex";

const store = createStore({
    state() {
        return{
            result:'',
            history: [],
        }
    },
    actions:{
        async calculated(ctx) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(this.state.result),
            };

            fetch("https://localhost:7137/calculate", requestOptions)
                .then(async response => {
                    const data = await response.json();
                    if (!response.ok) {
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }

                    this.state.history.push(this.state.result);
                    localStorage.setItem('history', JSON.stringify(this.state.history));
                    ctx.commit('updateMessage', data.result);
                })
                .catch(error => {
                    console.error(error);
                    alert(error);
                    ctx.commit('updateMessage', '');
                })
        }
    },
    mutations: {
        reset (state) {
            state.result = '';
        },
        input (state, value) {
            state.result = state.result.toString();
            state.result+=value;
        },
        updateMessage (state, message) {
            state.result = message;
        },
        setHistory(state, valHistory){
            state.history = valHistory;
        },
    },
    getters: {
        allExpressions(state) {
            return state.history;
        }
    },
})

export default store