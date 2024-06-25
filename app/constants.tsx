import axios from 'axios';
// import { useAPI } from '../context/APIContext';

// export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const apiUrl = 'https://codeandcode.xyz/demo/slim_properties';
export const fetcher = (...args: any) => fetch(args).then((res) => res.json());

// export const gmapsApiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY as string
export const gmapsApiKey = 'AIzaSyAS49hXHr0hePqJdzalBGh3iTOuDrgXX00';

// const fetchTokenA = async () => {
//   const { token } = useAPI();
// };

// axios.defaults.withXSRFToken = true;

export const fetchTokenAndReturn = async () => {
  try {
    const response = await axios.get(
      'https://codeandcode.xyz/demo/slim_properties/api/token',
      {},
    );

    const token = response.data;
    return token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export const postFetcher = async (url: string, payload?: string) => {
  try {
    const csrfToken = await fetchTokenAndReturn();
    const headers = {
      'Content-Type': 'application/json',
      '_token': csrfToken,
    };

    const response = await axios.post(url, payload, { headers });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.message);
      throw error;
    } else {
      console.error('General Error:', error);
      throw error;
    }
  }
};
