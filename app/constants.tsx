import { Field } from '@/app/types';
// import { useAPI } from '../context/APIContext';

//constant values
export const apiUrl = 'https://codeandcode.xyz/demo/slim_properties';
export const gmapsApiKey = 'AIzaSyD88z8fXIyVINVS11rwWh2EWxOMU7_iLgE';

export const fetcher = async (url: string) =>
    await fetch(url).then((res) => res.json());

//fetch token
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

//fetch cms-pages
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

//fetch property data
export async function fetchProperty(id: string | number) {
    console.log('fetching Property');
    try {
        const res = await fetch(
            apiUrl + `/api/projectdetails?unique_id=${id}`,
            {
                next: { revalidate: 3600 }
            }
        );

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// takes and field name and returns field value for the data - json
export const getFieldValueByName = (
    data: Field | any[],
    fieldName: string
): string | null => {
    const item = Object.values(data).find(
        (item) => item.field_name === fieldName
    );
    return item ? item.field_value : null;
};
