function cov_2or12il9tm() {
  var path = "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\apiReducer.ts";
  var hash = "0c2d01aef087e3369da3badf51c986abfca7a489";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\apiReducer.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "1": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 58
        }
      },
      "2": {
        start: {
          line: 17,
          column: 36
        },
        end: {
          line: 17,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 21
          },
          end: {
            line: 11,
            column: 22
          }
        },
        loc: {
          start: {
            line: 11,
            column: 95
          },
          end: {
            line: 13,
            column: 9
          }
        },
        line: 11
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
    hash: "0c2d01aef087e3369da3badf51c986abfca7a489"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2or12il9tm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2or12il9tm();
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TRequestAnswer } from "types";
export const apiSlice = (cov_2or12il9tm().s[0]++, createSlice({
  name: 'api',
  initialState: ({
    info: '',
    results: []
  } as TRequestAnswer),
  reducers: {
    setApiValue: (state, {
      payload: {
        info,
        results
      }
    }: PayloadAction<TRequestAnswer>) => {
      cov_2or12il9tm().f[0]++;
      cov_2or12il9tm().s[1]++;
      state.info = info, state.results = results;
    }
  }
}));
export const {
  actions,
  reducer
} = (cov_2or12il9tm().s[2]++, apiSlice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm9yMTJpbDl0bSIsImFjdHVhbENvdmVyYWdlIiwiUGF5bG9hZEFjdGlvbiIsImNyZWF0ZVNsaWNlIiwiVFJlcXVlc3RBbnN3ZXIiLCJhcGlTbGljZSIsInMiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaW5mbyIsInJlc3VsdHMiLCJyZWR1Y2VycyIsInNldEFwaVZhbHVlIiwic3RhdGUiLCJwYXlsb2FkIiwiZiIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsiYXBpUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFRSZXF1ZXN0QW5zd2VyIH0gZnJvbSBcInR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnYXBpJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIGluZm86ICcnLFxyXG4gICAgICAgIHJlc3VsdHM6IFtdXHJcbiAgICB9IGFzIFRSZXF1ZXN0QW5zd2VyLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzZXRBcGlWYWx1ZTogKHN0YXRlLCB7IHBheWxvYWQ6IHsgaW5mbywgcmVzdWx0cyB9IH06IFBheWxvYWRBY3Rpb248VFJlcXVlc3RBbnN3ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIChzdGF0ZS5pbmZvID0gaW5mbywgIHN0YXRlLnJlc3VsdHMgPSByZXN1bHRzKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhY3Rpb25zLCByZWR1Y2VyIH0gPSBhcGlTbGljZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxhQUFhLEVBQUVDLFdBQVcsUUFBUSxrQkFBa0I7QUFDN0QsU0FBU0MsY0FBYyxRQUFRLE9BQU87QUFFdEMsT0FBTyxNQUFNQyxRQUFRLElBQUFMLGNBQUEsR0FBQU0sQ0FBQSxPQUFHSCxXQUFXLENBQUM7RUFDaENJLElBQUksRUFBRSxLQUFLO0VBQ1hDLFlBQVksR0FBRTtJQUNWQyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxPQUFPLEVBQUU7RUFDYixDQUFDLElBQUlOLGNBQWM7RUFDbkJPLFFBQVEsRUFBRTtJQUNOQyxXQUFXLEVBQUVBLENBQUNDLEtBQUssRUFBRTtNQUFFQyxPQUFPLEVBQUU7UUFBRUwsSUFBSTtRQUFFQztNQUFRO0lBQWlDLENBQTlCLEVBQUVSLGFBQWEsQ0FBQ0UsY0FBYyxDQUFDLEtBQUs7TUFBQUosY0FBQSxHQUFBZSxDQUFBO01BQUFmLGNBQUEsR0FBQU0sQ0FBQTtNQUNsRk8sS0FBSyxDQUFDSixJQUFJLEdBQUdBLElBQUksRUFBR0ksS0FBSyxDQUFDSCxPQUFPLEdBQUdBLE9BQU87SUFDaEQ7RUFDSjtBQUNKLENBQUMsQ0FBQztBQUVGLE9BQU8sTUFBTTtFQUFFTSxPQUFPO0VBQUVDO0FBQVEsQ0FBQyxJQUFBakIsY0FBQSxHQUFBTSxDQUFBLE9BQUdELFFBQVEifQ==