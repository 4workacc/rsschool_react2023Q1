function cov_2jhmhvkn5z() {
  var path = "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\formReducer.ts";
  var hash = "e64ab71e67d85fce8101f0efd68a9fa9e608bf9b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\formReducer.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 25
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 17,
          column: 13
        }
      },
      "2": {
        start: {
          line: 23,
          column: 36
        },
        end: {
          line: 23,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 22
          },
          end: {
            line: 14,
            column: 23
          }
        },
        loc: {
          start: {
            line: 14,
            column: 88
          },
          end: {
            line: 18,
            column: 9
          }
        },
        line: 14
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
    hash: "e64ab71e67d85fce8101f0efd68a9fa9e608bf9b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2jhmhvkn5z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2jhmhvkn5z();
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TFormCardData } from 'types';
type TFormCards = {
  formCards: TFormCardData[];
};
export const formSlice = (cov_2jhmhvkn5z().s[0]++, createSlice({
  name: 'form',
  initialState: ({
    formCards: []
  } as TFormCards),
  reducers: {
    setFormCards: (state, {
      payload: {
        formCards
      }
    }: PayloadAction<TFormCards>) => {
      cov_2jhmhvkn5z().f[0]++;
      cov_2jhmhvkn5z().s[1]++;
      state.formCards = formCards;
    }
  }
}));
export const {
  actions,
  reducer
} = (cov_2jhmhvkn5z().s[2]++, formSlice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmpobWh2a241eiIsImFjdHVhbENvdmVyYWdlIiwiUGF5bG9hZEFjdGlvbiIsImNyZWF0ZVNsaWNlIiwiVEZvcm1DYXJkRGF0YSIsIlRGb3JtQ2FyZHMiLCJmb3JtQ2FyZHMiLCJmb3JtU2xpY2UiLCJzIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic2V0Rm9ybUNhcmRzIiwic3RhdGUiLCJwYXlsb2FkIiwiZiIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsiZm9ybVJlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgVEZvcm1DYXJkRGF0YSB9IGZyb20gJ3R5cGVzJztcclxuXHJcbnR5cGUgVEZvcm1DYXJkcyA9IHtcclxuICAgIGZvcm1DYXJkczogVEZvcm1DYXJkRGF0YVtdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2Zvcm0nLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7ICAgICAgIFxyXG4gICAgICAgIGZvcm1DYXJkczogW11cclxuICAgIH0gYXMgVEZvcm1DYXJkcyxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0Rm9ybUNhcmRzOiAoc3RhdGUsIHsgcGF5bG9hZDogeyBmb3JtQ2FyZHMgfSB9OiBQYXlsb2FkQWN0aW9uPFRGb3JtQ2FyZHM+KSA9PiB7XHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHN0YXRlLmZvcm1DYXJkcyA9IGZvcm1DYXJkc1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSAgICAgICBcclxuICAgIH1cclxuICB9LFxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWN0aW9ucywgcmVkdWNlciB9ID0gZm9ybVNsaWNlO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxhQUFhLEVBQUVDLFdBQVcsUUFBUSxrQkFBa0I7QUFDN0QsU0FBU0MsYUFBYSxRQUFRLE9BQU87QUFFckMsS0FBS0MsVUFBVSxHQUFHO0VBQ2RDLFNBQVMsRUFBRUYsYUFBYSxFQUFFO0FBQzlCLENBQUM7QUFFRCxPQUFPLE1BQU1HLFNBQVMsSUFBQVAsY0FBQSxHQUFBUSxDQUFBLE9BQUdMLFdBQVcsQ0FBQztFQUNqQ00sSUFBSSxFQUFFLE1BQU07RUFDWkMsWUFBWSxHQUFFO0lBQ1ZKLFNBQVMsRUFBRTtFQUNmLENBQUMsSUFBSUQsVUFBVTtFQUNmTSxRQUFRLEVBQUU7SUFDTkMsWUFBWSxFQUFFQSxDQUFDQyxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFO1FBQUVSO01BQVU7SUFBNkIsQ0FBMUIsRUFBRUosYUFBYSxDQUFDRyxVQUFVLENBQUMsS0FBSztNQUFBTCxjQUFBLEdBQUFlLENBQUE7TUFBQWYsY0FBQSxHQUFBUSxDQUFBO01BRXhFSyxLQUFLLENBQUNQLFNBQVMsR0FBR0EsU0FBUztJQUVuQztFQUNKO0FBQ0YsQ0FBQyxDQUNGO0FBRUQsT0FBTyxNQUFNO0VBQUVVLE9BQU87RUFBRUM7QUFBUSxDQUFDLElBQUFqQixjQUFBLEdBQUFRLENBQUEsT0FBR0QsU0FBUyJ9