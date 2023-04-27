function cov_2kpc0cmyv7() {
  var path = "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\bigCardReducer.ts";
  var hash = "35982e378ede3f72aa5f434f573c9a481f870293";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\dev\\rsschool_react2023Q1\\src\\redux\\reducers\\bigCardReducer.ts",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 28,
          column: 2
        }
      },
      "1": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 20,
          column: 14
        }
      },
      "2": {
        start: {
          line: 23,
          column: 12
        },
        end: {
          line: 25,
          column: 13
        }
      },
      "3": {
        start: {
          line: 30,
          column: 36
        },
        end: {
          line: 30,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 25
          },
          end: {
            line: 16,
            column: 26
          }
        },
        loc: {
          start: {
            line: 16,
            column: 96
          },
          end: {
            line: 21,
            column: 9
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 21
          },
          end: {
            line: 22,
            column: 22
          }
        },
        loc: {
          start: {
            line: 22,
            column: 32
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "35982e378ede3f72aa5f434f573c9a481f870293"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2kpc0cmyv7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2kpc0cmyv7();
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRickAndMortyCharacter } from 'types';
type TBigCard = {
  isShow: boolean;
  cardData: TRickAndMortyCharacter | null;
};
export const cardSlice = (cov_2kpc0cmyv7().s[0]++, createSlice({
  name: 'card',
  initialState: ({
    isShow: false,
    cardData: null
  } as TBigCard),
  reducers: {
    setBigCardValue: (state, {
      payload: {
        isShow,
        cardData
      }
    }: PayloadAction<TBigCard>) => {
      cov_2kpc0cmyv7().f[0]++;
      cov_2kpc0cmyv7().s[1]++;
      state.isShow = isShow, state.cardData = cardData;
    },
    hideBigCard: state => {
      cov_2kpc0cmyv7().f[1]++;
      cov_2kpc0cmyv7().s[2]++;
      state.isShow = false;
    }
  }
}));
export const {
  actions,
  reducer
} = (cov_2kpc0cmyv7().s[3]++, cardSlice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmtwYzBjbXl2NyIsImFjdHVhbENvdmVyYWdlIiwiUGF5bG9hZEFjdGlvbiIsImNyZWF0ZVNsaWNlIiwiVFJpY2tBbmRNb3J0eUNoYXJhY3RlciIsIlRCaWdDYXJkIiwiaXNTaG93IiwiY2FyZERhdGEiLCJjYXJkU2xpY2UiLCJzIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic2V0QmlnQ2FyZFZhbHVlIiwic3RhdGUiLCJwYXlsb2FkIiwiZiIsImhpZGVCaWdDYXJkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlcyI6WyJiaWdDYXJkUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBUUmlja0FuZE1vcnR5Q2hhcmFjdGVyIH0gZnJvbSAndHlwZXMnO1xyXG5cclxudHlwZSBUQmlnQ2FyZCA9IHtcclxuICAgIGlzU2hvdzogYm9vbGVhbjtcclxuICAgIGNhcmREYXRhOiBUUmlja0FuZE1vcnR5Q2hhcmFjdGVyIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjYXJkJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICAgICAgY2FyZERhdGE6IG51bGxcclxuICAgIH0gYXMgVEJpZ0NhcmQsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldEJpZ0NhcmRWYWx1ZTogKHN0YXRlLCB7IHBheWxvYWQ6IHsgaXNTaG93LCBjYXJkRGF0YSB9IH06IFBheWxvYWRBY3Rpb248VEJpZ0NhcmQ+KSA9PiB7XHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlzU2hvdyA9IGlzU2hvdyxcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNhcmREYXRhID0gY2FyZERhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVCaWdDYXJkOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNTaG93ID0gZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWN0aW9ucywgcmVkdWNlciB9ID0gY2FyZFNsaWNlO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxhQUFhLEVBQUVDLFdBQVcsUUFBUSxrQkFBa0I7QUFDN0QsU0FBU0Msc0JBQXNCLFFBQVEsT0FBTztBQUU5QyxLQUFLQyxRQUFRLEdBQUc7RUFDWkMsTUFBTSxFQUFFLE9BQU87RUFDZkMsUUFBUSxFQUFFSCxzQkFBc0IsR0FBRyxJQUFJO0FBQzNDLENBQUM7QUFFRCxPQUFPLE1BQU1JLFNBQVMsSUFBQVIsY0FBQSxHQUFBUyxDQUFBLE9BQUdOLFdBQVcsQ0FBQztFQUNqQ08sSUFBSSxFQUFFLE1BQU07RUFDWkMsWUFBWSxHQUFFO0lBQ1ZMLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLFFBQVEsRUFBRTtFQUNkLENBQUMsSUFBSUYsUUFBUTtFQUNiTyxRQUFRLEVBQUU7SUFDTkMsZUFBZSxFQUFFQSxDQUFDQyxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFO1FBQUVULE1BQU07UUFBRUM7TUFBUztJQUEyQixDQUF4QixFQUFFTCxhQUFhLENBQUNHLFFBQVEsQ0FBQyxLQUFLO01BQUFMLGNBQUEsR0FBQWdCLENBQUE7TUFBQWhCLGNBQUEsR0FBQVMsQ0FBQTtNQUVoRkssS0FBSyxDQUFDUixNQUFNLEdBQUdBLE1BQU0sRUFDckJRLEtBQUssQ0FBQ1AsUUFBUSxHQUFHQSxRQUFRO0lBRWpDLENBQUM7SUFDRFUsV0FBVyxFQUFHSCxLQUFLLElBQUs7TUFBQWQsY0FBQSxHQUFBZ0IsQ0FBQTtNQUFBaEIsY0FBQSxHQUFBUyxDQUFBO01BRWhCSyxLQUFLLENBQUNSLE1BQU0sR0FBRyxLQUFLO0lBRWhDO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixPQUFPLE1BQU07RUFBRVksT0FBTztFQUFFQztBQUFRLENBQUMsSUFBQW5CLGNBQUEsR0FBQVMsQ0FBQSxPQUFHRCxTQUFTIn0=