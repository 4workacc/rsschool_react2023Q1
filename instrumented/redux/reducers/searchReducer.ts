function cov_2mmlri4zfm() {
  var path = "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\searchReducer.ts";
  var hash = "5d95cc1156a7ff01346dfb8233ef5e99892aa4c2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\searchReducer.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "1": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 40
        }
      },
      "2": {
        start: {
          line: 16,
          column: 36
        },
        end: {
          line: 16,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 10,
            column: 21
          }
        },
        loc: {
          start: {
            line: 10,
            column: 90
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5d95cc1156a7ff01346dfb8233ef5e99892aa4c2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mmlri4zfm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2mmlri4zfm();
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TReduxSearch } from '../../types';
export const searchSlice = (cov_2mmlri4zfm().s[0]++, createSlice({
  name: 'search',
  initialState: ({
    searchValue: ''
  } as TReduxSearch),
  reducers: {
    setSearchValue: (state, {
      payload: {
        searchValue
      }
    }: PayloadAction<TReduxSearch>) => {
      cov_2mmlri4zfm().f[0]++;
      cov_2mmlri4zfm().s[1]++;
      state.searchValue = searchValue;
    }
  }
}));
export const {
  actions,
  reducer
} = (cov_2mmlri4zfm().s[2]++, searchSlice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm1tbHJpNHpmbSIsImFjdHVhbENvdmVyYWdlIiwiUGF5bG9hZEFjdGlvbiIsImNyZWF0ZVNsaWNlIiwiVFJlZHV4U2VhcmNoIiwic2VhcmNoU2xpY2UiLCJzIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaFZhbHVlIiwicmVkdWNlcnMiLCJzZXRTZWFyY2hWYWx1ZSIsInN0YXRlIiwicGF5bG9hZCIsImYiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VzIjpbInNlYXJjaFJlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgVFJlZHV4U2VhcmNoIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzZWFyY2gnLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgc2VhcmNoVmFsdWU6ICcnLCAgICBcclxuICB9IGFzIFRSZWR1eFNlYXJjaCxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VhcmNoVmFsdWU6IChzdGF0ZSwgeyBwYXlsb2FkOiB7IHNlYXJjaFZhbHVlIH0gfTogUGF5bG9hZEFjdGlvbjxUUmVkdXhTZWFyY2g+KSA9PiB7XHJcbiAgICAgIChzdGF0ZS5zZWFyY2hWYWx1ZSA9IHNlYXJjaFZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhY3Rpb25zLCByZWR1Y2VyIH0gPSBzZWFyY2hTbGljZTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsYUFBYSxFQUFFQyxXQUFXLFFBQVEsa0JBQWtCO0FBQzdELFNBQVNDLFlBQVksUUFBUSxhQUFhO0FBRTFDLE9BQU8sTUFBTUMsV0FBVyxJQUFBTCxjQUFBLEdBQUFNLENBQUEsT0FBR0gsV0FBVyxDQUFDO0VBQ3JDSSxJQUFJLEVBQUUsUUFBUTtFQUNkQyxZQUFZLEdBQUU7SUFDWkMsV0FBVyxFQUFFO0VBQ2YsQ0FBQyxJQUFJTCxZQUFZO0VBQ2pCTSxRQUFRLEVBQUU7SUFDUkMsY0FBYyxFQUFFQSxDQUFDQyxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFO1FBQUVKO01BQVk7SUFBK0IsQ0FBNUIsRUFBRVAsYUFBYSxDQUFDRSxZQUFZLENBQUMsS0FBSztNQUFBSixjQUFBLEdBQUFjLENBQUE7TUFBQWQsY0FBQSxHQUFBTSxDQUFBO01BQ25GTSxLQUFLLENBQUNILFdBQVcsR0FBR0EsV0FBVztJQUNsQztFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsT0FBTyxNQUFNO0VBQUVNLE9BQU87RUFBRUM7QUFBUSxDQUFDLElBQUFoQixjQUFBLEdBQUFNLENBQUEsT0FBR0QsV0FBVyJ9