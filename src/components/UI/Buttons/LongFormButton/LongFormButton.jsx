import React from 'react';
import {Button} from "antd";

const LongFormButton = ({children}) => {

    return (
        <Button>
            {children}
        </Button>
    );
};

export default LongFormButton;