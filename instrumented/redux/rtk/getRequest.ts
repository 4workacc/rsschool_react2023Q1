function cov_nc5jnluos() {
  var path = "D:\\dev\\rsschool_react2023Q1\\src\\redux\\rtk\\getRequest.ts";
  var hash = "62f2a6461a529118bba440aff640a5d7824b0d3e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\dev\\rsschool_react2023Q1\\src\\redux\\rtk\\getRequest.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "1": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "2": {
        start: {
          line: 9,
          column: 31
        },
        end: {
          line: 9,
          column: 56
        }
      },
      "3": {
        start: {
          line: 14,
          column: 44
        },
        end: {
          line: 14,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 14
          }
        },
        loc: {
          start: {
            line: 7,
            column: 27
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 14
          }
        },
        loc: {
          start: {
            line: 9,
            column: 31
          },
          end: {
            line: 9,
            column: 56
          }
        },
        line: 9
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
    hash: "62f2a6461a529118bba440aff640a5d7824b0d3e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nc5jnluos = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_nc5jnluos();
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TRequestAnswer, TRickAndMortyCharacter } from 'types';
export const rickApi = (cov_nc5jnluos().s[0]++, createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/'
  }),
  endpoints: builder => {
    cov_nc5jnluos().f[0]++;
    cov_nc5jnluos().s[1]++;
    return {
      getAllCharacters: builder.query<TRequestAnswer, string>({
        query: (name: string) => {
          cov_nc5jnluos().f[1]++;
          cov_nc5jnluos().s[2]++;
          return `character/?name=${name}`;
        }
      })
    };
  },
  refetchOnMountOrArgChange: true
}));
export const {
  useGetAllCharactersQuery
} = (cov_nc5jnluos().s[3]++, rickApi);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbmM1am5sdW9zIiwiYWN0dWFsQ292ZXJhZ2UiLCJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIlRSZXF1ZXN0QW5zd2VyIiwiVFJpY2tBbmRNb3J0eUNoYXJhY3RlciIsInJpY2tBcGkiLCJzIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImYiLCJnZXRBbGxDaGFyYWN0ZXJzIiwicXVlcnkiLCJuYW1lIiwicmVmZXRjaE9uTW91bnRPckFyZ0NoYW5nZSIsInVzZUdldEFsbENoYXJhY3RlcnNRdWVyeSJdLCJzb3VyY2VzIjpbImdldFJlcXVlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBUUmVxdWVzdEFuc3dlciwgVFJpY2tBbmRNb3J0eUNoYXJhY3RlciB9IGZyb20gJ3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCByaWNrQXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogJ3JpY2tBcGknLFxyXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS8nIH0pLFxyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICBnZXRBbGxDaGFyYWN0ZXJzOiBidWlsZGVyLnF1ZXJ5PFRSZXF1ZXN0QW5zd2VyLCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChuYW1lOiBzdHJpbmcpID0+IGBjaGFyYWN0ZXIvP25hbWU9JHtuYW1lfWAsXHJcbiAgICB9KSxcclxuICB9KSxcclxuICByZWZldGNoT25Nb3VudE9yQXJnQ2hhbmdlOiB0cnVlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0QWxsQ2hhcmFjdGVyc1F1ZXJ5IH0gPSByaWNrQXBpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixTQUFTRSxTQUFTLEVBQUVDLGNBQWMsUUFBUSw4QkFBOEI7QUFDeEUsU0FBU0MsY0FBYyxFQUFFQyxzQkFBc0IsUUFBUSxPQUFPO0FBRTlELE9BQU8sTUFBTUMsT0FBTyxJQUFBTixhQUFBLEdBQUFPLENBQUEsT0FBR0wsU0FBUyxDQUFDO0VBQy9CTSxXQUFXLEVBQUUsU0FBUztFQUN0QkMsU0FBUyxFQUFFTixjQUFjLENBQUM7SUFBRU8sT0FBTyxFQUFFO0VBQW1DLENBQUMsQ0FBQztFQUMxRUMsU0FBUyxFQUFHQyxPQUFPLElBQU07SUFBQVosYUFBQSxHQUFBYSxDQUFBO0lBQUFiLGFBQUEsR0FBQU8sQ0FBQTtJQUFBO01BQ3ZCTyxnQkFBZ0IsRUFBRUYsT0FBTyxDQUFDRyxLQUFLLENBQUNYLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RFcsS0FBSyxFQUFFQSxDQUFDQyxJQUFJLEVBQUUsTUFBTSxLQUFLO1VBQUFoQixhQUFBLEdBQUFhLENBQUE7VUFBQWIsYUFBQSxHQUFBTyxDQUFBO1VBQUEsT0FBQyxtQkFBa0JTLElBQUssRUFBQztRQUFEO01BQ25ELENBQUM7SUFDSCxDQUFDO0VBQUQsQ0FBRTtFQUNGQyx5QkFBeUIsRUFBRTtBQUM3QixDQUFDLENBQUM7QUFDRixPQUFPLE1BQU07RUFBRUM7QUFBeUIsQ0FBQyxJQUFBbEIsYUFBQSxHQUFBTyxDQUFBLE9BQUdELE9BQU8ifQ==