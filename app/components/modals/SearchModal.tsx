'use client'

import queryString from "query-string";
import { formatISO } from "date-fns";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";

import Modal from "./Modal";
import { CountrySelectValue } from "../inputs/CountrySelect";

import useSearchModal from "@/app/hooks/useSearchModal";
import dynamic from "next/dynamic";
import Heading from "../Heading";

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
        <Heading
            title="Location"
            subtitle="Pick a location"
        />
    )

    if (step === STEPS.DATE) {
        let bodyContent = (
            <Heading
                title=""
                subtitle=""
            />
        )
    }

    if (step === STEPS.INFO) {
        let bodyContent = (
            <Heading
                title=""
                subtitle=""
            />
        )
    }

    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={searchModal.onOpen}
            title="Filters"
            actionLabel="Search"
            body={bodyContent}
        />
    );
}
 
export default SearchModal;