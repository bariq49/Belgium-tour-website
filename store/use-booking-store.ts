import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface BookingStep1Data {
    location: string;
}

export interface BookingStep2Data {
    pricingId: string;
    pricing: any | null;
    addons: {
        prepaidFuel: boolean;
        deliveryService: boolean;
        tripProtection: boolean;
    };
}

export interface BookingStep3Data {
    address: string;
    agreeCancellation: boolean;
    agreeRentalAgreement: boolean;
    driversLicenseImage: string;
    insuranceImage: string;
    signature: string;
}

export interface BookingStep4Data {
    fullName: string;
    email: string;
    phone: string;
    understandCardFee: boolean;
}

// =============== STATE ===============

interface BookingState {
    step1: BookingStep1Data | null;
    step2: BookingStep2Data | null;
    step3: BookingStep3Data | null;
    step4: BookingStep4Data | null;
    settings: any | null;
    setStep1Data: (data: BookingStep1Data) => void;
    setStep2Data: (data: Partial<BookingStep2Data>) => void;
    setStep3Data: (data: Partial<BookingStep3Data>) => void;
    setStep4Data: (data: Partial<BookingStep4Data>) => void;
    setSettings: (settings: any) => void;
    clearStep1: () => void;
    clearStep2: () => void;
    clearStep3: () => void;
    clearStep4: () => void;
    resetAll: () => void;
}

// =============== STORE ===============

const STORE_VERSION = 1;

export const useBookingStore = create<BookingState>()(
    persist(
        (set) => ({
            step1: null,
            step2: {
                pricingId: '',
                pricing: null,
                addons: {
                    prepaidFuel: false,
                    deliveryService: false,
                    tripProtection: false,
                },
            },
            step3: {
                address: '',
                agreeCancellation: false,
                agreeRentalAgreement: false,
                driversLicenseImage: '',
                insuranceImage: '',
                signature: '',
            },
            step4: {
                fullName: '',
                email: '',
                phone: '',
                understandCardFee: false,
            },
            settings: null,

            setStep1Data: (data) =>
                set({
                    step1: data,
                }),

            setStep2Data: (data) =>
                set((state) => ({
                    step2: state.step2 ? { ...state.step2, ...data } : null,
                })),

            setStep3Data: (data) =>
                set((state) => ({
                    step3: state.step3 ? { ...state.step3, ...data } : null,
                })),

            setStep4Data: (data) =>
                set((state) => ({
                    step4: state.step4 ? { ...state.step4, ...data } : null,
                })),

            setSettings: (settings) =>
                set({
                    settings,
                }),

            clearStep1: () =>
                set({
                    step1: null,
                }),

            clearStep2: () =>
                set({
                    step2: null,
                }),

            clearStep3: () =>
                set({
                    step3: null,
                }),

            clearStep4: () =>
                set({
                    step4: null,
                }),

            resetAll: () =>
                set({
                    step1: null,
                    step2: null,
                    step3: null,
                    step4: null,
                    settings: null,
                }),
        }),
        {
            name: 'belgium-tour-booking-storage',
            version: STORE_VERSION,
            storage: createJSONStorage(() => localStorage),

            partialize: (state) => ({
                step1: state.step1,
                step2: state.step2,
                step3: state.step3,
                step4: state.step4,
                settings: state.settings,
            }),
        }
    )
);

// =============== SELECTORS ===============

import { useShallow } from 'zustand/react/shallow';

export const useIsStep1Ready = () =>
    useBookingStore((state) => Boolean(state.step1));

// =============== COMPUTED ===============

export const useBookingCalculations = () => {
    return useBookingStore(useShallow((state) => {
    }));
};
