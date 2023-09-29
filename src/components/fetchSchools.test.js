import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchSchools } from '../redux/actions/schools';

const mock = new MockAdapter(axios);
const url = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';

describe('fetchSchools action', () => {
  afterEach(() => {
    mock.reset();
  });

  test('Requesting the schools fetching successfully', async () => {
    const expectedData = [
      {
        dbn: '02M260',
        school_name: 'Clinton School Writers & Artists, M.S. 260',
        boro: 'M',
        borough: 'MANHATTAN',
      },
      {
        dbn: '17K548',
        school_name: 'Brooklyn School for Music & Theatre',
        boro: 'K',
        borough: 'BROOKLYN',
      },
    ];

    mock.onGet(url).reply(200, expectedData);

    // Dispatch the action and wait for the service
    const dispatch = jest.fn();
    await fetchSchools()(dispatch);

    // Expect the FETCH_SCHOOLS_REQUEST action
    expect(dispatch).toHaveBeenCalledWith({
      type: 'FETCH_SCHOOLS_REQUEST',
    });
  });

  test('Handling the errors', async () => {
    mock.onGet(url).reply(500);

    // Dispatch the action and wait for the service
    const dispatch = jest.fn();
    await fetchSchools()(dispatch);

    // Expect the FETCH_SCHOOLS_REQUEST action
    expect(dispatch).toHaveBeenCalledWith({
      type: 'FETCH_SCHOOLS_REQUEST',
    });
  });
});
