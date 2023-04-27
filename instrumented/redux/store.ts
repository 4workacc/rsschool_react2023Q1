function cov_ozoqz95h7() {
  var path = "D:\\dev\\rsschool_react2023Q1\\src\\redux\\store.ts";
  var hash = "6ca57a0fbc921faa31b54284e17459786e827a3a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\dev\\rsschool_react2023Q1\\src\\redux\\store.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "1": {
        start: {
          line: 14,
          column: 21
        },
        end: {
          line: 22,
          column: 2
        }
      },
      "2": {
        start: {
          line: 21,
          column: 44
        },
        end: {
          line: 21,
          column: 93
        }
      },
      "3": {
        start: {
          line: 26,
          column: 70
        },
        end: {
          line: 26,
          column: 81
        }
      },
      "4": {
        start: {
          line: 29,
          column: 57
        },
        end: {
          line: 29,
          column: 68
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 19
          }
        },
        loc: {
          start: {
            line: 21,
            column: 44
          },
          end: {
            line: 21,
            column: 93
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6ca57a0fbc921faa31b54284e17459786e827a3a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ozoqz95h7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ozoqz95h7();
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as searchReducer } from './reducers/searchReducer';
import { reducer as cardReducer } from "./reducers/bigCardReducer";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { rickApi } from "./rtk/getRequest";
import { reducer as formReducer } from "./reducers/formReducer";
const reducers = (cov_ozoqz95h7().s[0]++, combineReducers({
  searchReducer
}));
export const store = (cov_ozoqz95h7().s[1]++, configureStore({
  reducer: {
    searchReducer: searchReducer,
    cardReducer: cardReducer,
    formReducer: formReducer,
    [rickApi.reducerPath]: rickApi.reducer
  },
  middleware: getDefaultMiddleware => {
    cov_ozoqz95h7().f[0]++;
    cov_ozoqz95h7().s[2]++;
    return getDefaultMiddleware().concat(rickApi.middleware);
  }
}));
export type TRootState = ReturnType<typeof store.getState>;
export const useFullStateSelector: TypedUseSelectorHook<TRootState> = (cov_ozoqz95h7().s[3]++, useSelector);
export type TFullDispatch = typeof store.dispatch;
export const useFullStateDispatch: () => TFullDispatch = (cov_ozoqz95h7().s[4]++, useDispatch);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfb3pvcXo5NWg3IiwiYWN0dWFsQ292ZXJhZ2UiLCJjb21iaW5lUmVkdWNlcnMiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJzZWFyY2hSZWR1Y2VyIiwiY2FyZFJlZHVjZXIiLCJUeXBlZFVzZVNlbGVjdG9ySG9vayIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJyaWNrQXBpIiwiZm9ybVJlZHVjZXIiLCJyZWR1Y2VycyIsInMiLCJzdG9yZSIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiZiIsImNvbmNhdCIsIlRSb290U3RhdGUiLCJSZXR1cm5UeXBlIiwiZ2V0U3RhdGUiLCJ1c2VGdWxsU3RhdGVTZWxlY3RvciIsIlRGdWxsRGlzcGF0Y2giLCJkaXNwYXRjaCIsInVzZUZ1bGxTdGF0ZURpc3BhdGNoIl0sInNvdXJjZXMiOlsic3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHJlZHVjZXIgYXMgc2VhcmNoUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvc2VhcmNoUmVkdWNlcic7XHJcbmltcG9ydCB7IHJlZHVjZXIgYXMgY2FyZFJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2Vycy9iaWdDYXJkUmVkdWNlclwiO1xyXG5pbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vayB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyByaWNrQXBpIH0gZnJvbSBcIi4vcnRrL2dldFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzL2Zvcm1SZWR1Y2VyXCI7XHJcblxyXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBzZWFyY2hSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgICBzZWFyY2hSZWR1Y2VyOiBzZWFyY2hSZWR1Y2VyLFxyXG4gICAgICAgIGNhcmRSZWR1Y2VyOiBjYXJkUmVkdWNlcixcclxuICAgICAgICBmb3JtUmVkdWNlcjogZm9ybVJlZHVjZXIsXHJcbiAgICAgICAgW3JpY2tBcGkucmVkdWNlclBhdGhdOiByaWNrQXBpLnJlZHVjZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQocmlja0FwaS5taWRkbGV3YXJlKSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgVFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcclxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxTdGF0ZVNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxUUm9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xyXG5cclxuZXhwb3J0IHR5cGUgVEZ1bGxEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcclxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxTdGF0ZURpc3BhdGNoOiAoKSA9PiBURnVsbERpc3BhdGNoID0gdXNlRGlzcGF0Y2g7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLGVBQWUsRUFBRUMsY0FBYyxRQUFRLGtCQUFrQjtBQUNsRSxTQUFTQyxPQUFPLElBQUlDLGFBQWEsUUFBUSwwQkFBMEI7QUFDbkUsU0FBU0QsT0FBTyxJQUFJRSxXQUFXLFFBQVEsMkJBQTJCO0FBQ2xFLFNBQVNDLG9CQUFvQixRQUFRLGFBQWE7QUFDbEQsU0FBU0MsV0FBVyxRQUFRLGFBQWE7QUFDekMsU0FBU0MsV0FBVyxRQUFRLGFBQWE7QUFDekMsU0FBU0MsT0FBTyxRQUFRLGtCQUFrQjtBQUMxQyxTQUFTTixPQUFPLElBQUlPLFdBQVcsUUFBUSx3QkFBd0I7QUFFL0QsTUFBTUMsUUFBUSxJQUFBWixhQUFBLEdBQUFhLENBQUEsT0FBR1gsZUFBZSxDQUFDO0VBQzdCRztBQUNKLENBQUMsQ0FBQztBQUVGLE9BQU8sTUFBTVMsS0FBSyxJQUFBZCxhQUFBLEdBQUFhLENBQUEsT0FBR1YsY0FBYyxDQUFDO0VBQ2hDQyxPQUFPLEVBQUU7SUFDTEMsYUFBYSxFQUFFQSxhQUFhO0lBQzVCQyxXQUFXLEVBQUVBLFdBQVc7SUFDeEJLLFdBQVcsRUFBRUEsV0FBVztJQUN4QixDQUFDRCxPQUFPLENBQUNLLFdBQVcsR0FBR0wsT0FBTyxDQUFDTjtFQUNqQyxDQUFDO0VBQ0RZLFVBQVUsRUFBR0Msb0JBQW9CLElBQUs7SUFBQWpCLGFBQUEsR0FBQWtCLENBQUE7SUFBQWxCLGFBQUEsR0FBQWEsQ0FBQTtJQUFBLE9BQUFJLG9CQUFvQixFQUFFLENBQUNFLE1BQU0sQ0FBQ1QsT0FBTyxDQUFDTSxVQUFVLENBQUM7RUFBRDtBQUM1RixDQUFDLENBQUM7QUFHRixPQUFPLEtBQUtJLFVBQVUsR0FBR0MsVUFBVSxDQUFDLE9BQU9QLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO0FBQzFELE9BQU8sTUFBTUMsb0JBQW9CLEVBQUVoQixvQkFBb0IsQ0FBQ2EsVUFBVSxDQUFDLElBQUFwQixhQUFBLEdBQUFhLENBQUEsT0FBR0wsV0FBVztBQUVqRixPQUFPLEtBQUtnQixhQUFhLEdBQUcsT0FBT1YsS0FBSyxDQUFDVyxRQUFRO0FBQ2pELE9BQU8sTUFBTUMsb0JBQW9CLEVBQUUsTUFBTUYsYUFBYSxJQUFBeEIsYUFBQSxHQUFBYSxDQUFBLE9BQUdKLFdBQVcifQ==