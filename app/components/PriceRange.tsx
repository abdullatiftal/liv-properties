import React, { useState, FormEvent, useEffect, useRef } from 'react';

interface PriceRangeProps {
    setPr: (range: string) => void;
    setVisible: (arg0: boolean) => void;
    pr: string;
    className: string;
}

const PriceRange = ({ pr, setPr, className, setVisible }: PriceRangeProps) => {
    const [prMin, setPrMin] = useState('');
    const [prMax, setPrMax] = useState('');
    const [isValidRange, setIsValidRange] = useState(true);

    useEffect(() => {
        const [initialPrMin, initialPrMax] = pr.split('-');
        setPrMin(initialPrMin || '');
        setPrMax(initialPrMax || '');
    }, [pr]);

    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleOutSideClick = (event: { target: any; }) => {
            if (!ref.current?.contains(event.target)) {
                setVisible(false);
            }
        };

        window.addEventListener('mousedown', handleOutSideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutSideClick);
        };
    }, [ref]);

    const onReset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPrMin('');
        setPrMax('');
        setPr('');
        setIsValidRange(true);
    };

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPrMin(value);
        if (prMax && value && parseFloat(value) > parseFloat(prMax)) {
            setIsValidRange(false);
        } else {
            setIsValidRange(true);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPrMax(value);
        if (prMin && value && parseFloat(value) < parseFloat(prMin)) {
            setIsValidRange(false);
        } else {
            setIsValidRange(true);
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidRange) {
            setPr(prMin + '-' + prMax);
        }
    };

    return (
        <div ref={ref}>
            <form
                className={`price-popup flex w-[300px] flex-col gap-[14px] bg-[#EDDFD0] px-[20px] py-[25px] ${className}`}
                onSubmit={onSubmit}
                onReset={onReset}
            >
                {!isValidRange && (
                    <p className='text-red-600'>
                        Maximum value cannot be less than Minimum value.
                    </p>
                )}
                <div className='relative flex flex-row justify-between gap-[14px] text-[rgb(130,113,97)]'>
                    <div className='w-[calc(50% - 7px)] flex flex-col gap-[10px] text-left'>
                        <span className='block'>Minimum</span>
                        <input
                            type='number'
                            name='pr_min'
                            id='pr_min'
                            value={prMin}
                            onChange={handleMinChange}
                            min='0'
                            className={`sm:leading-1 block w-full border-0 border-b-[1px] border-[#827161] bg-transparent py-1.5 pl-0
                        text-left text-[100%] text-[rgb(130,113,97)] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition
                        duration-200 ease-in-out hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0]`}
                        />
                        <button
                            className={`cursor-pointer bg-[#827161] py-3 text-sm font-[500] text-white hover:bg-[#916940] disabled:bg-gray-400`}
                            type='reset'
                            disabled={!prMin && !prMax}
                        >
                            Reset
                        </button>
                    </div>
                    <div className='w-[calc(50% - 7px)] flex flex-col gap-[10px] text-left'>
                        <span className='block'>Maximum</span>
                        <input
                            type='number'
                            name='pr_max'
                            id='pr_max'
                            value={prMax}
                            min='0'
                            onChange={handleMaxChange}
                            className={`sm:leading-1 block w-full border-0 border-b-[1px] border-[#827161] bg-transparent py-1.5 pl-0
                        text-left text-[100%] text-[rgb(130,113,97)] placeholder-[#eddfd0] ring-0 ring-inset ring-transparent transition
                        duration-200 ease-in-out hover:ring-[#EDDFD0]/50 focus:ring-0 focus:ring-inset focus:ring-[#EDDFD0]`}
                        />
                        <button
                            className={`cursor-pointer bg-[#916940] py-3 text-sm font-[500] text-white hover:bg-[#827161] disabled:bg-gray-400`}
                            type='submit'
                            disabled={!prMin || !prMax}
                        >
                            Done
                        </button>
                    </div>
                </div>
                <div className='absolute bottom-[-15px] left-2/4 h-0 w-0 -translate-x-2/4 translate-y-0 border-x-[15px] border-b-0 border-t-[15px] border-solid border-x-transparent border-t-[#EDDFD0]'></div>
            </form>
        </div>
    );
};

export default PriceRange;
