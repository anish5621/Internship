import { useReducer } from 'react';

type State = {
  count: number;
  step: number;
  lastAction: string | null;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set_count'; payload: number }
  | { type: 'set_step'; payload: number }
  | { type: 'reset' };

const initialState: State = {
  count: 0,
  step: 1,
  lastAction: null,
};

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + state.step,
        lastAction: 'INCREMENT',
      };

    case 'decrement':
      return {
        ...state,
        count: state.count - state.step,
        lastAction: 'DECREMENT',
      };

    case 'set_count':
      return {
        ...state,
        count: action.payload,
        lastAction: `SET COUNT TO ${action.payload}`,
      };

    case 'set_step':
      return {
        ...state,
        step: action.payload,
        lastAction: `CHANGED STEP TO ${action.payload}`,
      };

    case 'reset':
      return initialState;
default: {
  const _exhaustiveCheck: never = action;
  throw new Error(`Unhandled action type: ${_exhaustiveCheck}`);
}
    }
  }


export default function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Typed Counter (useReducer)</h2>

      <div>
        <p><strong>Count:</strong> {state.count}</p>
        <p><strong>Step Size:</strong> {state.step}</p>
        <p><strong>Last Action:</strong> {state.lastAction ?? 'None'}</p>
      </div>

      <div>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          -{state.step}
        </button>
        <button onClick={() => dispatch({ type: 'increment' })}>
          +{state.step}
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>

      <div>
        <label htmlFor="step-select">Change Step Size: </label>
        <select
          id="step-select"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: 'set_step', payload: Number(e.target.value) })
          }
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>

      <div>
        <button
          onClick={() =>
            dispatch({ type: 'set_count', payload: 100 })
          }
        >
          Set Count to 100
        </button>
      </div>
    </div>
  );
}