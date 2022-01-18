import React, { useEffect, useState } from "react";
import AutoComplete from "react-google-autocomplete";

const AutoCompleteAddress = ({ saveAddress }: any) => {
    const [state, setState] = useState<any>({});

    useEffect(() => {
        saveAddress(state.formatted_address);
    }, []);

    console.log();

    return (
        <div>
            <h4>Address</h4>
            <AutoComplete
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                onPlaceSelected={(place) => setState(place)}
                options={{
                    types: ["(regions)"],
                    componentRestrictions: { country: "za" },
                }}
            />
        </div>
    );
};

export default AutoCompleteAddress;
