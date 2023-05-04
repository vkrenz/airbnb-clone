'use client'

import Select from 'react-select';
// import ReactFlagSelect from 'react-flags-select';

import useCountries from '@/app/hooks/useCountries';

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

const CountrySelect : React.FC<CountrySelectProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useCountries();

    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={val => onChange(val as CountrySelectValue)}
                formatOptionLabel={(opt: any) => (
                    <div className="flex flex-row items-center gap-3">
                        <div>{opt.flag}</div>
                        {/* <ReactFlagSelect
                            selected={opt.value.toLowerCase()}
                            selectedSize={18}
                            onSelect={() => {}}
                        /> */}
                        <div>
                            {opt.label},
                            <span className="text-neutral-500 ml-1">
                                {opt.region}
                            </span>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}
 
export default CountrySelect;