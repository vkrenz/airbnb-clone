'use client'

import queryString from "query-string";
import { formatISO } from "date-fns";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";

import Modal from "./Modal";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";

import useSearchModal from "@/app/hooks/useSearchModal";
import dynamic from "next/dynamic";

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2
}

const SearchModal = () => {
    const [step, setStep] = useState(STEPS.LOCATION);
    const [guestCount, setGuestCount] = useState(1);
    const [roomCount, setRoomCount] = useState(1);
    const [bathroomCount, setbathroomCount] = useState(1);
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    const [location, setLocation] = useState<CountrySelectValue>();
    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false,
    }), [location]);

    const onBack = useCallback(() => {
        setStep(val => val - 1);
    }, []);

    const onNext = useCallback(() => {
        setStep(val => val + 1);
    }, []);

    const router = useRouter();

    const params = useSearchParams();

    const searchModal = useSearchModal();

    const onSubmit = useCallback(async () => {
        if (step !== STEPS.INFO) return onNext();

        let currentQuery = {};

        if (params) currentQuery = queryString.parse(params.toString());

        const updatedQuery: any = {
            ...currentQuery,
            locationValue: location?.value,
            guestCount,
            roomCount,
            bathroomCount
        };

        if (dateRange.startDate) updatedQuery.startDate = formatISO(dateRange.startDate);
        if (dateRange.endDate) updatedQuery.endDate = formatISO(dateRange.endDate);

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        setStep(STEPS.LOCATION);

        searchModal.onClose();

        router.push(url);
    }, [
        step,
        searchModal,
        location,
        router,
        guestCount,
        roomCount,
        bathroomCount,
        dateRange,
        onNext,
        params
    ]);

    const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) return 'Search';

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.LOCATION) return undefined;

        return 'Back';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Where do you wanna go?"
                subtitle="Find the perfect location!"
            />
            <CountrySelect
                value={location}
                onChange={val => setLocation(val as CountrySelectValue)}
            />
            <hr />
            <Map center={location?.latlng} />
        </div>
    )

    if (step === STEPS.DATE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="When do you plan to go?"
                    subtitle="Make sure everyone is free!"
                />
                <Calendar
                    value={dateRange}
                    onChange={val => setDateRange(val.selection)}
                />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="More information"
                    subtitle="Find your perfect place!"
                />
                <Counter
                    title="Guests"
                    subtitle="How many guests are coming?"
                    value={guestCount}
                    onChange={val => setGuestCount(val)}
                />
                <hr />
                <Counter
                    title="Rooms"
                    subtitle="How many rooms do you need?"
                    value={roomCount}
                    onChange={val => setRoomCount(val)}
                />
                <hr />
                <Counter
                    title="Bathrooms"
                    subtitle="How many bathrooms do you need??"
                    value={bathroomCount}
                    onChange={val => setbathroomCount(val)}
                />
            </div>
        )
    }

    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={onSubmit}
            title="Filters"
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
            secondaryActionLabel={secondaryActionLabel}
            body={bodyContent}
        />
    );
}
 
export default SearchModal;