"use client";

import { useEffect, useRef } from "react";

interface UseGoogleAutocompleteProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
  countryRestriction?: string;
}

export const useGoogleAutocomplete = ({
  inputRef,
  onPlaceSelected,
  countryRestriction = "be",
}: UseGoogleAutocompleteProps) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!inputRef.current || !window.google) return;

    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: countryRestriction },
      fields: ["address_components", "geometry", "formatted_address", "name"],
    });

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace();
      if (place) {
        onPlaceSelected(place);
      }
    });

    return () => {
      if (window.google && autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [inputRef, onPlaceSelected, countryRestriction]);

  return autocompleteRef.current;
};
