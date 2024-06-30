import axios from 'axios';
import { Field } from '@/app/types';
// import { useAPI } from '../context/APIContext';

// export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const apiUrl = 'https://codeandcode.xyz/demo/slim_properties';
export const gmapsApiKey = 'AIzaSyD88z8fXIyVINVS11rwWh2EWxOMU7_iLgE';

// export const fetcher = (...args: any) => fetch(args).then((res) => res.json());
export const fetcher = async (url: string) =>
    await fetch(url).then((res) => res.json());

// axios.defaults.withXSRFToken = true;

export const fetchTokenAndReturn = async () => {
    try {
        const response = await fetch(
            'https://codeandcode.xyz/demo/slim_properties/api/token',
            {}
        );

        const token = response.json();
        return token;
    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
};

export async function fetchData(id: number) {
    console.log('fetching');
    try {
        const res = await fetch(apiUrl + `/api/cms-pages?page_id=${id}`, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// export const fetchData = async (id: number) => {
//     try {
//         const response = await axios.get(
//             `${apiUrl}/api/cms-pages?page_id=${id}'`
//         );
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// };

export const postFetcher = async (url: string, payload?: string) => {
    try {
        const csrfToken = await fetchTokenAndReturn();
        const headers = {
            'Content-Type': 'application/json',
            _token: csrfToken
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

// takes and field name and returns field value for the data
export const getFieldValueByName = (
    data: Field | any[],
    fieldName: string
): string | null => {
    const item = Object.values(data).find(
        (item) => item.field_name === fieldName
    );
    return item ? item.field_value : null;
};
