import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect
} from 'react';
import useSWR from 'swr';
import { apiUrl, fetcher } from '../constants';
import {
    Property,
    FeaturedParameters,
    UpcomingProperties,
    ReadyProperties,
    SearchProperty,
    SearchParameters,
    ContactUs
} from '@/app/types';

export interface APIContextData {
    upcomingProperties: {
        data: UpcomingProperties | undefined;
        isLoading: boolean;
        error: Error | undefined;
    };
    readyProperties: {
        data: ReadyProperties | undefined;
        isLoading: boolean;
        error: Error | undefined;
    };
    featuredProperties: {
        data: Property[];
        isLoading: boolean;
        error: Error | undefined;
    };
    error: Error | undefined;
    token: string | undefined;
    setParameters: (params: FeaturedParameters) => void;
    searchProperty: {
        data: SearchProperty | undefined;
        isLoading: boolean;
        error: Error | undefined;
    };
    contactUs: {
        data: ContactUs | undefined;
        isLoading: boolean;
        error: Error | undefined;
    };
    setSearchParameters: (params: string) => void;
}

export const APIContextDefaultValue: APIContextData = {
    upcomingProperties: {
        data: undefined,
        isLoading: false,
        error: undefined
    },
    readyProperties: {
        data: undefined,
        isLoading: false,
        error: undefined
    },
    featuredProperties: { data: [], isLoading: false, error: undefined },
    error: undefined,
    token: '',
    setParameters: () => {},
    searchProperty: {
        data: undefined,
        isLoading: false,
        error: undefined
    },
    contactUs: {
        data: undefined,
        isLoading: false,
        error: undefined
    },
    setSearchParameters: () => {}
};

export const APIContext = createContext<APIContextData>(APIContextDefaultValue);

export function APIContextProvider({ children }: { children: ReactNode }) {
    /*
     * get contact us
     */
    const {
        data: contactUs,
        error: contactUsError,
        isLoading: contactUsisLoading
    } = useSWR<ContactUs>(`${apiUrl}/api/cms-pages?page_id=6`, fetcher);

    /*
     * get upcoming properties
     */
    const {
        data: upcomingData,
        error: upcomingPropertiesError,
        isLoading: upcomingPropertiesisLoading
    } = useSWR<UpcomingProperties>(
        `${apiUrl}/api/search?construction_status=upcoming`,
        fetcher
    );

    /*
     * get ready properties
     */
    const {
        data: readyData,
        error: readyPropertiesError,
        isLoading: readyPropertiesisLoading
    } = useSWR<ReadyProperties>(
        `${apiUrl}/api/search?construction_status=ready`,
        fetcher
    );

    /*
     * get featured properties
     */
    const [featuredProperties, setFeaturedProperties] = useState<Property[]>(
        []
    );
    const [parameters, setParameters] = useState<FeaturedParameters>({
        propType: 'all',
        action: 'buy'
    });
    const fetchUrl =
        parameters.propType === 'all'
            ? `${apiUrl}/api/get-featured-properties`
            : `${apiUrl}/api/get-featured-properties?property_type=${parameters.propType}&availablefor=${parameters.action}`;

    const {
        data: featuredData,
        error: featuredPropertiesError,
        isLoading: featuredPropertiesisLoading
    } = useSWR<Property[]>(fetchUrl, fetcher);

    useEffect(() => {
        if (featuredData) {
            setFeaturedProperties(featuredData);
        }
    }, [featuredData]);

    /*
     * get API token
     */
    const { data: token, error: tokenError } = useSWR<string>(
        `${apiUrl}/api/token`,
        fetcher
    );

    /*
     * get search property
     */
    const [searchProperty, setSearchProperty] = useState<SearchProperty>();
    const [searchParameters, setSearchParameters] = useState<string>('');

    const {
        data: searchData,
        error: searchPropertyError,
        isLoading: searchPropertyisLoading
    } = useSWR<SearchProperty>(
        searchParameters
            ? `${apiUrl}/api/search${searchParameters}&sort_by='id'&sort_order='DESC'`
            : null,
        fetcher
    );

    useEffect(() => {
        if (searchData) {
            setSearchProperty(searchData);
        }
    }, [searchData]);

    /*
     * all errors
     */
    const error =
        featuredPropertiesError ||
        upcomingPropertiesError ||
        readyPropertiesError ||
        tokenError ||
        searchPropertyError ||
        contactUs;

    return (
        <APIContext.Provider
            value={{
                upcomingProperties: {
                    data: upcomingData,
                    isLoading: upcomingPropertiesisLoading,
                    error: upcomingPropertiesError
                },
                readyProperties: {
                    data: readyData,
                    isLoading: readyPropertiesisLoading,
                    error: readyPropertiesError
                },
                featuredProperties: {
                    data: featuredProperties,
                    isLoading: featuredPropertiesisLoading,
                    error: featuredPropertiesError
                },
                setParameters,
                error,
                token,
                searchProperty: {
                    data: searchData,
                    isLoading: searchPropertyisLoading,
                    error: searchPropertyError
                },
                contactUs: {
                    data: contactUs,
                    isLoading: contactUsisLoading,
                    error: contactUsError
                },
                setSearchParameters
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (!context) {
        throw new Error('useAPI must be used within an APIContextProvider');
    }
    return context;
}
