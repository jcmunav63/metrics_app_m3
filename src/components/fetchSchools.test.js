// const MockAdapter = require('axios-mock-adapter');
const { fetchSchools } = require('../redux/actions/schools');
const api = axios.create({
  baseURL: 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json',
});

jest.mock(api);

// var mock = new MockAdapter(api);

describe('fetchSchools action', () => {
//   afterEach(() => {
//     mock.reset;
//   });

  test('Fetching the schools successfully', async () => {
    const expectedData = [
      {
        'dbn': '02M260',
        'school_name': 'Clinton School Writers & Artists, M.S. 260',
        'boro': 'M',
        'borough': 'MANHATTAN', 
      },
      {
        'dbn': '17K548',
        'school_name': 'Brooklyn School for Music & Theatre',
        'boro': 'K',
        'borough': 'BROOKLYN', 
      }
    ];

    axios.get.mockResolvedValueOnce(expectedData);
    // mock.onGet('/').reply(200, expectedData);

    const result = await fetchSchools();
    // Dispatch the action and wait for the service
    // const dispatch = jest.fn();
    // await fetchSchools()(dispatch);

    expect(axios.get).toHaveBeenCalledWith({
      type: 'FETCH_SCHOOLS_SUCCESS',
      payload: expectedData,
    });
    expect(result).toEqual(expectedData);
    // Check if the data corresponds
    // expect(dispatch).toHaveBeenCalledWith({
    //   type: 'FETCH_SCHOOLS_SUCCESS',
    //   payload: expectedData,
    // });
  });

  // test('Handling the errors', async () => {
  //   mock.onGet('/').reply(500);

    // Dispatch the action and wait for the service
    // const dispatch = jest.fn();
    // await fetchSchools()(dispatch);

    // Check if the expected error corresponds
    // expect(dispatch).toHaveBeenCalledWith({
    //   type: 'FETCH_SCHOOLS_FAILURE',
    //   error: true,
    // });
  // });
});
